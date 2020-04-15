import Player, { Direction } from "./player.js"
import Input from "./input"
import Field from "./field.js";
import Output from "./output.js";
import Message from "./message.js";

export default class PlayerControler
{
    private static field: Field;
    private static ninzu: number = 1;
    private static junban: number = 0;
    private static players: Player[];
    static start(field0: Field)
    {
        this.field = field0;
        this.players = new Array<Player>(this.ninzu);
        for (let i = 0; i < this.ninzu; i++)
        {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 1)
        }
        Output.Draw(this.field, this.players[0]);
    }
    static ArrowButtonClick(direction: Direction): void
    {
        if (this.players[this.junban].move(direction, this.field) == false)
        {
            Message.AddMessage("そこには行けません。<br>");
        }
        Output.Draw(this.field, this.players[this.junban]);
    }
}