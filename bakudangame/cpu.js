export default class Cpu {
    constructor(numOfAction, playerControler, bombControler, field) {
        this.numOfAction = numOfAction;
        this.playerControler = playerControler.Copy();
        this.bombControler = bombControler.Copy();
        this.field = field.Copy();
        this.allActions = [];
    }
    ExplorNextAction() {
    }
    ExplorAllAction() {
        let actionSet = new Array(6);
        for (let i = 0; i < 4; i++) {
            actionSet[i] = () => { return this.playerControler.TurnPlayer.move(i, this.field); };
        }
        actionSet[4] = () => { return this.playerControler.TurnPlayer.PutBomb(this.field, this.bombControler); };
        actionSet[5] = null;
        let actions = [];
        for (let i = 0; i < this.numOfAction; i++) {
            actions.push(actionSet[0]);
        }
    }
}
//# sourceMappingURL=cpu.js.map