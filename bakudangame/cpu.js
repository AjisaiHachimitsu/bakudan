class TreenodeWithAction {
    constructor(treenode, action) {
        this.treenode = treenode;
        this.action = action;
    }
}
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
    CreateActionTree(treeNodeWithAction, depth) {
        let array = [];
        for (let i = 0; i < this.actionSet.length; i++) {
            if (this.checkActionSet[i](treeNodeWithAction.treenode)) {
                let a = treeNodeWithAction.treenode.Copy();
                this.actionSet[i](a);
                if (depth <= 0) {
                    array.push(new TreenodeWithAction(treeNodeWithAction.treenode, this.actionSet[i]));
                }
                else {
                    let b = this.CreateActionTree(new TreenodeWithAction(a, this.actionSet[i]), depth - 1);
                    for (let j = 0; j < b.length; j++) {
                        array.push(b[j]);
                    }
                }
            }
        }
        array.push(null);
        return array;
    }
    NecstActions() {
        let tree = new GameTreeNode(this.playerControler, this.bombControler, this.field);
    }
}
//# sourceMappingURL=cpu.js.map