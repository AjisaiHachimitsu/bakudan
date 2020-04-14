import Player from "./player.js";
export default class PlayerControler {
    constructor() {
        this.ninzu = 1;
        this.players = new Array(this.ninzu);
        for (let i = 0; i < this.ninzu; i++) {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 1);
        }
    }
}
//# sourceMappingURL=player_controler.js.map