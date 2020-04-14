import Player, { Direction } from "./player.js"
import Input from "./input"
import Field from "./field.js";
import Output from "./output.js";
export default class PlayerControler
{
    readonly field: Field;
    readonly ninzu: number = 1;
    private junban: number = 0;
   players: Player[];
    constructor(field0:Field)
    {
        this.players = new Array<Player>(this.ninzu);
        for (let i = 0; i < this.ninzu;i++)
        {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 3)
        }
    }
    UpButtonClick()
    {
        alert("↑");
        this.players[this.junban].move(Direction.TOUP, this.field);
        Output.PlayerDraw(this.players[this.junban]);
    }
}