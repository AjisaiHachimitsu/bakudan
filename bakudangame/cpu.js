import { Direction } from "./player.js";
import BombControler from "./bomb_controler.js";
import Message from "./message.js";
class GameTreeNode {
    constructor(playerControler, bombControler, field) {
        this.playerControler = playerControler;
        this.bombControler = bombControler;
        this.field = field;
    }
    Copy() {
        return new GameTreeNode(this.playerControler.Copy(), this.bombControler.Copy(), this.field.Copy());
    }
}
class TreenodeWithAction extends GameTreeNode {
    constructor(playerControler, bombControler, field, action) {
        super(playerControler, bombControler, field);
        this.action = action;
    }
    Copy() {
        return new TreenodeWithAction(this.playerControler.Copy(), this.bombControler.Copy(), this.field.Copy(), this.action);
    }
}
export default class Cpu {
    //private allActions: (() => boolean)[][];
    constructor(numOfAction, playerControler, bombControler, field) {
        this.numOfAction = numOfAction;
        this.playerControler = playerControler.Copy();
        this.bombControler = bombControler.Copy();
        this.field = field.Copy();
        this.actionSet = [];
        this.checkActionSet = [];
        for (let i = 0; i < 4; i++) {
            this.actionSet[i] = (gameTreeNode) => { return gameTreeNode.playerControler.TurnPlayer.Move(i, gameTreeNode.field); };
            this.checkActionSet[i] = (gameTreeNode) => { return gameTreeNode.playerControler.TurnPlayer.CheckMove(i, gameTreeNode.field); };
        }
        this.actionSet.push((gameTreeNode) => {
            return gameTreeNode.playerControler.TurnPlayer.PutBomb(gameTreeNode.field, gameTreeNode.bombControler);
        });
        this.checkActionSet.push((gameTreeNode) => {
            return gameTreeNode.playerControler.TurnPlayer.CheckPutBomb(gameTreeNode.field, gameTreeNode.bombControler);
        });
    }
    CreateActionTree(treeNodeWithAction, depth, actionIndex) {
        let array = [];
        for (let i = 0; i < this.actionSet.length; i++) {
            if (!this.checkActionSet[i](treeNodeWithAction))
                continue;
            if ((actionIndex === Direction.TODOWN && i === Direction.TOUP) || (actionIndex === Direction.TOUP && i === Direction.TODOWN) ||
                (actionIndex === Direction.TOLEFT && i === Direction.TORIGHT) || (actionIndex === Direction.TORIGHT && i === Direction.TOLEFT))
                continue;
            let a = treeNodeWithAction.Copy();
            this.actionSet[i](a);
            a.action = this.actionSet[i];
            if (depth <= 1) {
                array.push([a]);
            }
            else {
                let b = this.CreateActionTree(a, depth - 1, i);
                for (let j = 0; j < b.length; j++) {
                    //let c:TreenodeWithAction[]=[];
                    //for (let k = 0; k < b[j].length; k++)
                    //{
                    //    c.push(b[j][k].Copy());
                    //}
                    array.push([a].concat(b[j]));
                }
            }
        }
        array.push([]);
        return array;
    }
    NextActions() {
        let tree = new TreenodeWithAction(this.playerControler, this.bombControler, this.field, null); //.Copy();
        let trees = this.CreateActionTree(tree, this.numOfAction);
        trees[trees.length - 1] = [tree];
        return trees;
    }
    Action(playerControler, field, bombControler) {
        let tree = this.NextActions();
        //alert(tree.length);
        let last = (array) => { return array[array.length - 1]; };
        let max = value(last(tree[0]));
        let maxIndex = [0];
        for (let i = 1; i < tree.length; i++) {
            let a = value(last(tree[i]));
            if (a < max) {
                max = a;
                maxIndex = [i];
            }
            else if (a === max) {
                maxIndex.push(i);
            }
        }
        Message.AddMessage(String(max));
        let rand = Math.floor(Math.random() * maxIndex.length);
        let actionIndex = maxIndex[rand];
        for (let j = 0; j < tree[actionIndex].length; j++) {
            if (tree[actionIndex][j].action != null)
                tree[actionIndex][j].action(new GameTreeNode(playerControler, bombControler, field));
        }
    }
}
function value(gameTreeNode0) {
    let gameTreeNode = gameTreeNode0.Copy();
    let isdeth = (player) => {
        let bombs = gameTreeNode.bombControler.Bombs;
        if (player === gameTreeNode.playerControler.TurnPlayer) {
            for (let i = 0; i < bombs.length; i++) {
                if (bombs[i].counter >= BombControler.ExplosionTime - 1)
                    bombs[i].Explosion(bombs, gameTreeNode.field, gameTreeNode.playerControler.Players);
            }
        }
        if (player.IsKilled)
            return true;
        return false;
    };
    if (isdeth(gameTreeNode.playerControler.TurnPlayer))
        return -1; //自分が死んだら-1
    let sum = 0;
    for (let i = 0; i < gameTreeNode.playerControler.Players.length; i++) {
        if (gameTreeNode.playerControler.Players[i].IsKilled)
            continue;
        if (isdeth(gameTreeNode.playerControler.Players[i]))
            sum++;
    }
    return sum;
}
//# sourceMappingURL=cpu.js.map