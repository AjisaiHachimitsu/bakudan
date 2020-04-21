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
            this.actionSet[i] = (player, field) => { return player.Move(i, field); };
            this.checkActionSet[i] = (player, field) => { return player.CheckMove(i, field); };
        }
        this.actionSet.push((player, field, bombControler) => { return player.PutBomb(field, bombControler); });
        this.checkActionSet.push((player, field, bombControler) => { return player.CheckPutBomb(field, bombControler); });
    }
    RandomActions(player, field, bombControler) {
        //let actions: ((player:Player) => boolean)[] = [];
        for (let i = 0; i < this.numOfAction; i++) {
            let a;
            do {
                if (Math.random() < 0.05)
                    return;
                a = Math.floor(Math.random() * this.actionSet.length);
            } while (this.checkActionSet[a](this.playerControler.TurnPlayer, this.field, this.bombControler) === false);
            this.actionSet[a](this.playerControler.TurnPlayer, this.field, this.bombControler);
            this.actionSet[a](player, field, bombControler);
        }
    }
}
//# sourceMappingURL=cpu.js.map