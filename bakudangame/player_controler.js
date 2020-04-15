import Player from "./player.js";
import Output from "./output.js";
import Message from "./message.js";
export default class PlayerControler {
    static start(field0) {
        this.field = field0;
        this.players = new Array(this.ninzu);
        for (let i = 0; i < this.ninzu; i++) {
            let path = "img/char" + i + "/char" + i + "_001.png";
            this.players[i] = new Player(path, i + 1, 1);
            Output.PlayerDraw(this.players[i]);
        }
    }
    static ArrowButtonClick(direction) {
        if (this.players[this.junban].move(direction, this.field) == false) {
            Message.AddMessage("そこには行けません。<br>");
        }
        Output.PlayerDraw(this.players[this.junban]);
    }
}
PlayerControler.ninzu = 4;
PlayerControler.junban = 0;
//# sourceMappingURL=player_controler.js.map