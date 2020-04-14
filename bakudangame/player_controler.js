import Player from "./player.js";
import Output from "./output.js";
import Message from "./message.js";
export default class PlayerControler {
    static start(field0) {
        this.field = field0;
        this.players = new Array(this.ninzu);
        for (let i = 0; i < this.ninzu; i++) {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 3);
        }
        Output.Draw(this.field, this.players[0]);
    }
    static ArrowButtonClick(direction) {
        if (this.players[this.junban].move(direction, this.field) == false) {
            Message.AddMessage("そこには行けません。<br>");
        }
        Output.Draw(this.field, this.players[this.junban]);
    }
}
PlayerControler.ninzu = 1;
PlayerControler.junban = 0;
//# sourceMappingURL=player_controler.js.map