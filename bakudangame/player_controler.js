import Player from "./player.js";
import { Position } from "./field.js";
import Message from "./message.js";
//import GameManager from "./game_manager.js";
export default class PlayerControler {
    constructor(field0) {
        this.junban = 0;
        this.numOfArive = PlayerControler.ninzu;
        //this.field = field0;
        this.players = new Array(PlayerControler.ninzu);
        for (let i = 0; i < PlayerControler.ninzu; i++) {
            let path = "img/char" + i + "/char" + i + "_001.png";
            let x0, y0;
            if (i % 2 === 0)
                x0 = 1; //left
            else
                x0 = field0.width - 2; //right
            if (Math.floor(i / 2) === 0)
                y0 = 1; //top
            else
                y0 = field0.height - 2; //bottom
            let isCpu = [false, true, true, true];
            this.players[i] = new Player(path, new Position(x0, y0), isCpu[i]);
        }
        this.ShowJunban();
    }
    get Players() {
        return this.players;
    }
    ChangeToNextPlayer() {
        this.junban++;
        this.junban %= PlayerControler.ninzu;
        this.ShowJunban();
    }
    ShowJunban() {
        Message.ClearMessage();
        Message.AddImage(this.players[this.junban].imagePath);
        Message.AddMessage("の番です。<br>");
    }
    get TurnPlayer() {
        return this.players[this.junban];
    }
    get NumOfArive() {
        let a = 0;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].IsKilled === false)
                a++;
        }
        return a;
    }
}
//private field: Field;
PlayerControler.ninzu = 4;
//# sourceMappingURL=player_controler.js.map