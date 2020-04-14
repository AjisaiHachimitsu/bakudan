import Player, { Direction } from "./player.js"
import Input from "./input"
import Field from "./field.js";
import Output from "./output.js";
export default class PlayerControler
{
    static field: Field;
    static  ninzu: number = 1;
    static junban: number = 0;
    static players: Player[];
    constructor(field0:Field)
    {
        PlayerControler.players = new Array<Player>(PlayerControler.ninzu);
        for (let i = 0; i < PlayerControler.ninzu;i++)
        {
            PlayerControler.players[i] = new Player("img/char1/char1_001.png", 1, 3)
        }
    }
    static UpButtonClick()
    {
        alert("↑");
        this.players[this.junban].move(Direction.TOUP, this.field);
        Output.PlayerDraw(this.players[this.junban]);
    }
}