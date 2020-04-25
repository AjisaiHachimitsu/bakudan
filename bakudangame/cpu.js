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
        return new TreenodeWithAction(this.playerControler, this.bombControler, this.field, this.action);
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
        let a = treeNodeWithAction.Copy();
        for (let i = 0; i < this.actionSet.length; i++) {
            if (this.checkActionSet[i](treeNodeWithAction)) {
                this.actionSet[i](a);
                a.action = this.actionSet[i];
                if (depth <= 1) {
                    array.push([a]);
                }
                else {
                    let b = this.CreateActionTree(a, depth - 1);
                    for (let j = 0; j < b.length; j++) {
                        array.push([a].concat(b[j]));
                    }
                }
            }
        }
        array.push([null]);
        return array;
    }
    NextActions() {
        let tree = new TreenodeWithAction(this.playerControler, this.bombControler, this.field, null);
        return this.CreateActionTree(tree, this.numOfAction);
    }
    RandomActions(playerControler, field, bombControler) {
        let tree = this.NextActions();
        alert(tree.length);
        let rand = Math.floor(Math.random() * tree.length);
        for (let j = 0; j < tree[rand].length; j++) {
            if (tree[rand][j] != null)
                tree[rand][j].action(new GameTreeNode(playerControler, bombControler, field));
        }
    }
}
//# sourceMappingURL=cpu.js.map