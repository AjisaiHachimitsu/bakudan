class Action {
    constructor(check, action) {
        this.check = check;
        this.action = action;
    }
}
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
            actionSet[i] = new Action(() => { return this.playerControler.TurnPlayer.CheckMove(i, this.field); }, () => { return this.playerControler.TurnPlayer.Move(i, this.field); });
        }
        actionSet[4] = new Action(() => { return this.playerControler.TurnPlayer.CheckPutBomb(this.field, this.bombControler); }, () => { return this.playerControler.TurnPlayer.PutBomb(this.field, this.bombControler); });
        //actionSet[5] = null;
        let actions = [];
        while (actions.length < this.numOfAction) {
            if (actionSet[0].check)
                actions.push(actionSet[0].action);
            else
                break;
        }
        this.allActions.push(actions);
    }
}
//# sourceMappingURL=cpu.js.map