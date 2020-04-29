import Output from "./output.js";
import Message from "./message.js";
import Cpu from "./cpu.js";
export class GameManager {
    static start(field, playerControler, bombCotroler) {
        this.field = field;
        this.playerControler = playerControler;
        this.bombControler = bombCotroler;
        this.Draw();
        this.ShowNumOfAction();
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
        this.ShowNumOfAction();
        if (this.acttionCounter >= this.numOfAction) {
            this.ChangeToNextTurn();
        }
    }
    static ShowNumOfAction() {
        let message = "あと" + String(this.numOfAction - this.acttionCounter) + "回行動できます。<br>";
        Message.AddMessage(message);
    }
    static ChangeToNextTurn() {
        this.acttionCounter = 0;
        Message.ClearMessage();
        do {
            if (this.playerControler.TurnPlayer.isCpu && this.playerControler.TurnPlayer.IsKilled === false) {
                let cpu = new Cpu(this.numOfAction, this.playerControler, this.bombControler, this.field);
                cpu.Action(this.playerControler, this.field, this.bombControler);
            }
            this.bombControler.TurnPassed(this.playerControler.TurnPlayer, this.playerControler.Players, this.field);
            this.playerControler.ChangeToNextPlayer();
            if (this.playerControler.NumOfArive <= 1)
                break;
        } while (this.playerControler.TurnPlayer.IsKilled || this.playerControler.TurnPlayer.isCpu);
        GameManager.Draw();
        this.ShowNumOfAction();
        this.field.EraseExplosion();
    }
}
GameManager.acttionCounter = 0;
GameManager.numOfAction = 3;
//# sourceMappingURL=game_manager.js.map