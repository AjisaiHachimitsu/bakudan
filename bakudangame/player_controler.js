import Player from "./player.js";
import { Position } from "./field.js";
import Message from "./message.js";
import BombControler from "./bomb_controler.js";
import GameManager from "./game_manager.js";
export default class PlayerControler {
    static start(field0) {
        this.numOfAction = 3;
        this.field = field0;
        this.players = new Array(this.ninzu);
        for (let i = 0; i < this.ninzu; i++) {
            let path = "img/char" + i + "/char" + i + "_001.png";
            let x0, y0;
            if (i % 2 === 0)
                x0 = 1; //left
            else
                x0 = this.field.width - 2; //right
            if (Math.floor(i / 2) === 0)
                y0 = 1; //top
            else
                y0 = this.field.height - 2; //bottom
            this.players[i] = new Player(path, new Position(x0, y0));
        }
        this.ShowJunban();
    }
    static ArrowButtonClick(direction) {
        if (this.players[this.junban].move(direction, this.field) === false) {
            Message.AddMessage("そこには行けません。<br>");
            return;
        }
        this.CountUpActtion();
        GameManager.Draw();
    }
    static PassButtonClick() {
        this.ChangeToNextPlayer();
    }
    static GetPlayers() {
        return this.players;
    }
    static ChangeToNextPlayer() {
        this.acttionCounter = 0;
        this.junban++;
        this.junban %= this.ninzu;
        this.ShowJunban();
    }
    static ShowJunban() {
        Message.ClearMessage();
        Message.AddImage(this.players[this.junban].imagePath);
        Message.AddMessage("の番です。<br>");
    }
    static BombButtonClick() {
        if (BombControler.PutBomb(this.players[this.junban])) {
            this.CountUpActtion();
        }
        else {
            Message.AddMessage("そこには置けません。<br>");
        }
    }
    static CountUpActtion() {
        this.acttionCounter++;
        if (this.acttionCounter >= this.numOfAction) {
            this.ChangeToNextPlayer();
        }
    }
}
PlayerControler.ninzu = 4;
PlayerControler.junban = 0;
PlayerControler.acttionCounter = 0;
//# sourceMappingURL=player_controler.js.map