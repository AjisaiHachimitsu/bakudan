import Player from "./player.js";
import Output from "./output.js";
import Message from "./message.js";
export default class PlayerControler {
    static start(field0) {
        this.field = field0;
        this.players = new Array(this.ninzu);
        for (let i = 0; i < this.ninzu; i++) {
            let path = "img/char" + i + "/char" + i + "_001.png";
            let x0, y0;
            if (i % 2 == 0)
                x0 = 1; //left
            else
                x0 = this.field.width - 2; //right
            if (Math.floor(i / 2) == 0)
                y0 = 1; //top
            else
                y0 = this.field.height - 2; //bottom
            this.players[i] = new Player(path, x0, y0);
        }
        Output.Draw(this.field, this.players);
    }
    static ArrowButtonClick(direction) {
        if (this.players[this.junban].move(direction, this.field) == false) {
            Message.AddMessage("そこには行けません。<br>");
        }
        Output.Draw(this.field, this.players);
    }
    static GetPlayers() {
        return this.players;
    }
}
PlayerControler.ninzu = 4;
PlayerControler.junban = 0;
//# sourceMappingURL=player_controler.js.map