import Output from "./output.js";
import Message from "./message.js";
export default class GameManager {
    static start(field, playerControler, bombCotroler) {
        this.field = field;
        this.playerControler = playerControler;
        this.bombControler = bombCotroler;
        this.Draw();
    }
    static Draw() {
        Output.Draw(this.field, this.playerControler.Players, this.bombControler.Bombs);
    }
    static ArrowButtonClick(direction) {
        if (this.playerControler.TurnPlayer.move(direction, this.field) === false) {
            Message.AddMessage("そこには行けません。<br>");
            return;
        }
        this.CountUpActtion();
        GameManager.Draw();
    }
    static PassButtonClick() {
        this.ChangeToNextTurn();
    }
    static BombButtonClick() {
        if (GameManager.bombControler.PutBomb(this.playerControler.TurnPlayer)) {
            this.CountUpActtion();
        }
        else {
            Message.AddMessage("そこには置けません。<br>");
        }
        GameManager.Draw();
    }
    static CountUpActtion() {
        this.acttionCounter++;
        if (this.acttionCounter >= this.numOfAction) {
            this.ChangeToNextTurn();
        }
    }
    static ChangeToNextTurn() {
        this.bombControler.TurnPassed(this.playerControler.TurnPlayer);
        this.playerControler.ChangeToNextPlayer();
        this.acttionCounter = 0;
        GameManager.Draw();
    }
}
GameManager.acttionCounter = 0;
GameManager.numOfAction = 5;
//# sourceMappingURL=game_manager.js.map