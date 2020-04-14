import Player, { Direction } from "./player.js";
import Output from "./output.js";
export default class PlayerControler {
    constructor(field0) {
        this.ninzu = 1;
        this.junban = 0;
        this.players = new Array(this.ninzu);
        for (let i = 0; i < this.ninzu; i++) {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 3);
        }
    }
    UpButtonClick() {
        alert("↑");
        this.players[this.junban].move(Direction.TOUP, this.field);
        Output.PlayerDraw(this.players[this.junban]);
    }
}
//# sourceMappingURL=player_controler.js.map