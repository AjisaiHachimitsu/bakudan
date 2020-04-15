import Player, { Direction } from "./player.js"
import Input from "./input"
import Field from "./field.js";
import Output from "./output.js";
import Message from "./message.js";

export default class PlayerControler
{
    private static field: Field;
    private static ninzu: number = 4;
    private static junban: number = 0;
    private static players: Player[];
    static start(field0: Field)
    {
        this.field = field0;
        this.players = new Array<Player>(this.ninzu);
        for (let i = 0; i < this.ninzu; i++)
        {
            let path = "img/char" + i + "/char" + i + "_001.png";
            this.players[i] = new Player(path, i + 1, 1)
        }
        Output.Draw(this.field,this.players);
    }
    static ArrowButtonClick(direction: Direction): void
    {
        if (this.players[this.junban].move(direction, this.field) == false)
        {
            Message.AddMessage("そこには行けません。<br>");
        }
        Output.Draw(this.field,this.players);
    }
    static GetPlayers(): Player[]
    {
        return this.players;
    }
}