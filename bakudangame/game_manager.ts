
import Player, { Direction } from "./player.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import Output from "./output.js";
import Message from "./message.js";
export default class GameManager
{
    private static field: Field;
    private static playerControler: PlayerControler;
    private static bombControler: BombControler;
    private static acttionCounter = 0;
    private static readonly numOfAction: number = 5;
    static start(field: Field, playerControler: PlayerControler, bombCotroler: BombControler)
    {
        this.field = field;
        this.playerControler = playerControler;
        this.bombControler = bombCotroler;
        this.Draw()
    }
    static Draw()
    {
        Output.Draw(this.field, this.playerControler.Players, this.bombControler.Bombs);
    }
    static ArrowButtonClick(direction: Direction): void
    {
        if (this.playerControler.TurnPlayer.move(direction, this.field) === false)
        {
            Message.AddMessage("そこには行けません。<br>");
            return;
        }
        GameManager.Draw();
        this.CountUpActtion();
    }
    static PassButtonClick(): void
    {
        this.ChangeToNextTurn();
    }
    static BombButtonClick(): void
    {
        if (GameManager.bombControler.PutBomb(this.playerControler.TurnPlayer,this.field))
        {
            GameManager.Draw();
            this.CountUpActtion();
        }
        else
        {
            Message.AddMessage("そこには置けません。<br>");
        }
    }
    private static CountUpActtion()
    {
        this.acttionCounter++;
        if (this.acttionCounter >= this.numOfAction)
        {
            this.ChangeToNextTurn();
        }

    }
    private static ChangeToNextTurn()
    {
        this.acttionCounter = 0;
        do
        {
            this.bombControler.TurnPassed(this.playerControler.TurnPlayer, this.playerControler.Players,this.field)
            this.playerControler.ChangeToNextPlayer();
            GameManager.Draw();
            this.field.EraseExplosion();
            if (this.playerControler.NumOfArive <= 1) break;
        } while (this.playerControler.TurnPlayer.IsKilled);
    }
}