import Field from "./field.js"
import Output from "./output.js";
import Input from "./input.js";
import Player, { Direction } from "./player.js";
import Messge from "./message.js";
function main():void
{

}
window.onload = () =>
{
    let field = new Field(21, 15);
    let output = new Output((document.getElementById("maintable") as HTMLTableElement));
    output.FieldDraw(field);
    let input = new Input((document.getElementById("buttontable")) as HTMLTableElement);
    let player1 = new Player("img/char1/char1_001.png", 1, 1);
    output.PlayerDraw(player1);
    let message = new Messge(document.getElementById("message")) 
    message.AddMessage("Hello");
};