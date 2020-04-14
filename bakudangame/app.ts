import Field from "./field.js"
import Output from "./output.js";
import Input from "./input.js";
import Player, { Direction } from "./player.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
function main():void
{

}
window.onload = () =>
{
    let field = new Field(21, 15);
    let output = new Output((document.getElementById("maintable") as HTMLTableElement));
    output.FieldDraw(field);
    let playerControler = new PlayerControler(field,output);
    let input = new Input((document.getElementById("buttontable")) as HTMLTableElement, playerControler);
    output.PlayerDraw(playerControler.players[0]);
    //let player1 = playerControler.players[0];
};