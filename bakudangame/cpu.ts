import Player, { Direction } from "./player.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import Message from "./message.js";

class GameTreeNode
{
    playerControler: PlayerControler;
    bombControler: BombControler;
    field: Field;

    Copy()
    {
        return new GameTreeNode(this.playerControler.Copy(), this.bombControler.Copy(), this.field.Copy());

    }
    constructor(playerControler: PlayerControler, bombControler: BombControler, field: Field)
    {
        this.playerControler = playerControler;
        this.bombControler = bombControler;
        this.field = field;
    }

}


class TreenodeWithAction extends GameTreeNode
{
    action: (gameTreeNode: GameTreeNode) => boolean;
    Copy()
    {
        return new TreenodeWithAction(this.playerControler.Copy(), this.bombControler.Copy(), this.field.Copy(), this.action);
    }
    constructor(playerControler: PlayerControler, bombControler: BombControler, field: Field, action: (gameTreeNode: GameTreeNode) => boolean)
    {
        super(playerControler, bombControler, field);
        this.action = action;
    }
}

export default class Cpu
{
    private readonly numOfAction: number;
    private playerControler: PlayerControler;
    private bombControler: BombControler;
    private field: Field;
    private actionSet: ((gameTreeNode: GameTreeNode) => boolean)[];
    private checkActionSet: ((gameTreeNode: Readonly<GameTreeNode>) => boolean)[];
    //private allActions: (() => boolean)[][];


    constructor(numOfAction: number, playerControler: Readonly<PlayerControler>, bombControler: Readonly<BombControler>, field: Readonly<Field>)
    {
        this.numOfAction = numOfAction;
        this.playerControler = playerControler.Copy();
        this.bombControler = bombControler.Copy();
        this.field = field.Copy();


        this.actionSet = [];
        this.checkActionSet = [];
        for (let i = 0; i < 4; i++)
        {
            this.actionSet[i] = (gameTreeNode: GameTreeNode) => { return gameTreeNode.playerControler.TurnPlayer.Move(i, gameTreeNode.field) };
            this.checkActionSet[i] = (gameTreeNode: Readonly<GameTreeNode>) => { return gameTreeNode.playerControler.TurnPlayer.CheckMove(i, gameTreeNode.field) };
        }
        this.actionSet.push((gameTreeNode: GameTreeNode) =>
        {
            return gameTreeNode.playerControler.TurnPlayer.PutBomb(gameTreeNode.field, gameTreeNode.bombControler)
        })
        this.checkActionSet.push((gameTreeNode: Readonly<GameTreeNode>) =>
        {
            return gameTreeNode.playerControler.TurnPlayer.CheckPutBomb(gameTreeNode.field, gameTreeNode.bombControler)
        });

    }

    private CreateActionTree(treeNodeWithAction: Readonly<TreenodeWithAction>, depth: number, actionIndex?: number): TreenodeWithAction[][]
    {
        let array: TreenodeWithAction[][] = [];
        for (let i = 0; i < this.actionSet.length; i++)
        {
            if (!this.checkActionSet[i](treeNodeWithAction)) continue;
            if ((actionIndex === Direction.TODOWN && i === Direction.TOUP) || (actionIndex === Direction.TOUP && i=== Direction.TODOWN)||
                (actionIndex === Direction.TOLEFT && i===Direction.TORIGHT)|| (actionIndex === Direction.TORIGHT && i === Direction.TOLEFT)) continue;
            let a = treeNodeWithAction.Copy();
            this.actionSet[i](a)
            a.action = this.actionSet[i]
            if (depth <= 1)
            {
                array.push([a])
            }
            else
            {
                let b = this.CreateActionTree(a, depth - 1, i)
                for (let j = 0; j < b.length; j++)
                {
                    array.push([a].concat(b[j]));

                }
            }

        }
        array.push([])
        return array;

    }
    private NextActions()
    {
        let tree = new TreenodeWithAction(this.playerControler, this.bombControler, this.field, null);
        return this.CreateActionTree(tree, this.numOfAction);
    }

    Action(playerControler: PlayerControler, field: Field, bombControler: BombControler)
    {
        let tree = this.NextActions()
        //alert(tree.length);

        let max = this.value(tree[0][tree[0].length - 1]);
        let maxIndex = [0];
        for (let i = 1; i < tree.length-1; i++)//最後は空
        {
            let a = this.value(tree[i][tree[i].length - 1])
            if (a > max)
            {
                max = a;
                maxIndex = [i];
            }
            else if (a === max)
            {
                maxIndex.push(i);
            }
                
        }
        let rand = Math.floor(Math.random() * maxIndex.length);
        for (let j = 0; j < tree[rand].length; j++)
        {
            if (tree[rand][j] != null)
                tree[rand][j].action(new GameTreeNode(playerControler, bombControler, field));
        }

    }

    private value(gameTreeNode: GameTreeNode): number
    {
        let isdeth = (player: Player) =>
        {
            let bombs = gameTreeNode.bombControler.Bombs;
            for (bombs.First(); bombs.IsNull === false; bombs.Next())
            {
                if (bombs.Value.counter >= 2)
                    bombs.Value.Explosion(bombs, gameTreeNode.field, gameTreeNode.playerControler.Players);
            }
            if (player.IsKilled) return true;
            return false;
        }
        if (isdeth(this.playerControler.TurnPlayer)) return -1;//自分が死んだら-1
        let sum = 0;
        for (let i = 0; i < this.playerControler.Players.length; i++)
        {
            if(isdeth(this.playerControler.Players[i])) sum++
        }
        return sum;
    }
}