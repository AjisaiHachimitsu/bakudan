import Player, { Direction } from "./player.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";

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
        return new TreenodeWithAction(this.playerControler, this.bombControler, this.field, this.action);
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

    private CreateActionTree(treeNodeWithAction:Readonly< TreenodeWithAction>, depth: number): TreenodeWithAction[][]
    {
        let array: TreenodeWithAction[][] = [];
        let a = treeNodeWithAction.Copy();
        for (let i = 0; i < this.actionSet.length; i++)
        {
            if (this.checkActionSet[i](treeNodeWithAction))
            {
                this.actionSet[i](a)
                a.action = this.actionSet[i]
                if (depth <= 1)
                {
                    array.push([a])
                }
                else
                {
                    let b = this.CreateActionTree(a, depth - 1)
                    for (let j = 0; j < b.length; j++)
                    {
                        array.push([a].concat(b[j]));

                    }
                }
            }
        }
        array.push([null])
        return array;

    }
    private NextActions()
    {
        let tree = new TreenodeWithAction( this.playerControler, this.bombControler, this.field,null);
        return this.CreateActionTree(tree,this.numOfAction);
    }

    RandomActions(playerControler : PlayerControler, field: Field, bombControler: BombControler)
    {
        let tree = this.NextActions()
        alert(tree.length);
        let rand =Math.floor( Math.random() * tree.length);
        for (let j = 0; j < tree[rand].length; j++)
        {
            if (tree[rand][j] != null)
                tree[rand][j].action(new GameTreeNode(playerControler, bombControler, field));
        }

    }
}