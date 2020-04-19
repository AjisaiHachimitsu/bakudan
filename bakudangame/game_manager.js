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
        GameManager.Draw();
        this.CountUpActtion();
    }
    static PassButtonClick() {
        this.ChangeToNextTurn();
    }
    static BombButtonClick() {
        if (GameManager.bombControler.PutBomb(this.playerControler.TurnPlayer)) {
            GameManager.Draw();
            this.CountUpActtion();
        }
        else {
            Message.AddMessage("そこには置けません。<br>");
        }
    }
    static CountUpActtion() {
        this.acttionCounter++;
        if (this.acttionCounter >= this.numOfAction) {
            this.ChangeToNextTurn();
        }
    }
    static ChangeToNextTurn() {
        this.acttionCounter = 0;
        do {
            this.bombControler.TurnPassed(this.playerControler.TurnPlayer, this.playerControler.Players);
            this.playerControler.ChangeToNextPlayer();
            GameManager.Draw();
            this.field.EraseExplosion();
        } while (this.playerControler.TurnPlayer.Iskilled);
    }
}
GameManager.acttionCounter = 0;
GameManager.numOfAction = 5;
//# sourceMappingURL=game_manager.js.map