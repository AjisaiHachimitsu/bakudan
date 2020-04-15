import Player, { Direction } from "./player.js"
import Field from "./field.js";
import Output from "./output.js";
import Message from "./message.js";

export default class PlayerControler
{
    private static field: Field;
    private static ninzu: number = 4;
    private static junban: number = 0;
    private static players: Player[];
    private static numOfAction: number;
    private static acttionCounter = 0;
    static start(field0: Field)
    {
        this.numOfAction = 3;
        this.field = field0;
        this.players = new Array<Player>(this.ninzu);
        for (let i = 0; i < this.ninzu; i++)
        {
            let path = "img/char" + i + "/char" + i + "_001.png";
            let x0, y0: number;
            if (i % 2 == 0) x0 = 1;//left
            else x0 = this.field.width - 2;//right
            if (Math.floor(i / 2) == 0) y0 = 1;//top
            else y0 = this.field.height - 2;//bottom
            this.players[i] = new Player(path, x0, y0)
        }
        Output.Draw(this.field, this.players);
        this.ShowJunban();
    }
    static ArrowButtonClick(direction: Direction): void
    {
        if (this.players[this.junban].move(direction, this.field) == false)
        {
            Message.AddMessage("そこには行けません。<br>");
            return;
        }
        Output.Draw(this.field,this.players);
        this.acttionCounter++;
        if (this.acttionCounter >= this.numOfAction)
        {
            this.ChangeToNextPlayer();
        }
    }
    static PassButtonClick():void
    {
        this.ChangeToNextPlayer();
    }
    static GetPlayers(): Player[]
    {
        return this.players;
    }
    static ChangeToNextPlayer(): void
    {
        this.acttionCounter = 0;
        this.junban++
        this.junban %= this.ninzu;
        this.ShowJunban();
    }
    static ShowJunban(): void
    {
        Message.ClearMessage();
        Message.AddImage(this.players[this.junban].imagePath);
        Message.AddMessage("の番です。<br>")
    }
}