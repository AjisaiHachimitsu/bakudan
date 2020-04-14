import Player, { Direction } from "./player.js";
import Output from "./output.js";
export default class PlayerControler {
    constructor(field0) {
        PlayerControler.players = new Array(PlayerControler.ninzu);
        for (let i = 0; i < PlayerControler.ninzu; i++) {
            PlayerControler.players[i] = new Player("img/char1/char1_001.png", 1, 3);
        }
    }
    static UpButtonClick() {
        alert("↑");
        this.players[this.junban].move(Direction.TOUP, this.field);
        Output.PlayerDraw(this.players[this.junban]);
    }
}
PlayerControler.ninzu = 1;
PlayerControler.junban = 0;
//# sourceMappingURL=player_controler.js.map