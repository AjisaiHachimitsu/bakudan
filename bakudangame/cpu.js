export default class Cpu {
    ExploreAllAction(turnPlayer, field) {
        let actions = new Array(5);
        for (let i = 0; i < 4; i++) {
            actions[i] = function () { return turnPlayer.move(i, field); };
        }
        //actions[length - 1] = function () {return turnPlayer.PutBomb(field,)}
    }
}
//# sourceMappingURL=cpu.js.map