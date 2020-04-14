import Player, { Direction } from "./player.js"
import Input from "./input"
import Field from "./field.js";
import Output from "./output.js";
export default class PlayerControler
{
    readonly field: Field;
    readonly ninzu: number = 1;
    private junban: number = 0;
    readonly output:Output
   players: Player[];
    constructor(field0:Field,output0:Output)
    {
        this.players = new Array<Player>(this.ninzu);
        this.output = output0;
        for (let i = 0; i < this.ninzu;i++)
        {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 3)
        }
    }
    UpButtonClick()
    {
        alert("↑");
        this.players[this.junban].move(Direction.TOUP, this.field);
        this.output.PlayerDraw(this.players[this.junban]);
    }
}