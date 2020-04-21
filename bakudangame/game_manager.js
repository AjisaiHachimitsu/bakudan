import Output from "./output.js";
import Message from "./message.js";
export class GameManager {
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
        if (this.playerControler.TurnPlayer.Move(direction, this.field) === false) {
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
        if (GameManager.playerControler.TurnPlayer.PutBomb(this.field, this.bombControler)) {
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
            this.bombControler.TurnPassed(this.playerControler.TurnPlayer, this.playerControler.Players, this.field);
            this.playerControler.ChangeToNextPlayer();
            if (this.playerControler.NumOfArive <= 1)
                break;
        } while (this.playerControler.TurnPlayer.IsKilled);
        GameManager.Draw();
        this.field.EraseExplosion();
    }
}
GameManager.acttionCounter = 0;
GameManager.numOfAction = 6;
//# sourceMappingURL=game_manager.js.map