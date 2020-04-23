import Player, { Direction } from "./player.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";

class TreenodeWithAction
{
    treenode: GameTreeNode;
    action: (gameTreeNode: GameTreeNode) => boolean;
    constructor(treenode: GameTreeNode, action: (gameTreeNode: GameTreeNode) => boolean)
    {
        this.treenode = treenode;
        this.action = action;
    }
}
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

    private CreateActionTree(treeNodeWithAction: TreenodeWithAction, depth: number) : TreenodeWithAction[]
    {
        let array: TreenodeWithAction[] = [];
        for (let i = 0; i < this.actionSet.length; i++)
        {
            if (this.checkActionSet[i](treeNodeWithAction.treenode))
            {
                let a = treeNodeWithAction.treenode.Copy();
                this.actionSet[i](a)
                if (depth <= 0)
                {
                    array.push(new TreenodeWithAction(treeNodeWithAction.treenode, this.actionSet[i]))
                }
                else
                {
                    let b = this.CreateActionTree(new TreenodeWithAction(a, this.actionSet[i]), depth - 1)
                    for (let j = 0; j < b.length; j++)
                    {
                        array.push(b[j])
                    }
                }
            }
        }
        array.push(null)
        return array;

    }
    private NecstActions()
    {
        let tree = new GameTreeNode(this.playerControler, this.bombControler, this.field);
    }

    //RandomActions(player: Player, field: Field, bombControler: BombControler)
    //{
    //    //let actions: ((player:Player) => boolean)[] = [];
    //    for (let i = 0; i < this.numOfAction; i++)
    //    {
    //        let a: number
    //        do
    //        {
    //            if (Math.random() < 0.05) return;
    //            a = Math.floor(Math.random() * this.actionSet.length)
    //        } while (this.checkActionSet[a](this.playerControler.TurnPlayer, this.field, this.bombControler) === false)
    //        this.actionSet[a](this.playerControler.TurnPlayer, this.field, this.bombControler)
    //        this.actionSet[a](player, field, bombControler);
    //    }

    //}
}