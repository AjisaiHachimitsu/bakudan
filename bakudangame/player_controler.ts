import Player, { Direction } from "./player.js"
import Input from "./input"
import Field from "./field.js";
import Output from "./output.js";


let field: Field;
let ninzu: number = 1;
let junban: number = 0;
let players: Player[];
function start(field0: Field)
{
    field = field0;
    players = new Array<Player>(ninzu);
    for (let i = 0; i < ninzu; i++)
    {
        players[i] = new Player("img/char1/char1_001.png", 1, 3)
    }
    Output.Draw(field, players[0]);
}
function ArrowButtonClick(direction:Direction):void
{
    players[junban].move(direction, field);
    Output.Draw(field, players[junban]);
}
export default { start, ArrowButtonClick }