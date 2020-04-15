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
    Output.start((document.getElementById("maintable") as HTMLTableElement));
    //Output.FieldDraw(field);
    PlayerControler.start(field);
    Input.start((document.getElementById("buttontable")) as HTMLTableElement);
    Messge.start(document.getElementById("message"));
    //let player1 = playerControler.players[0];
};

//Output.PlayerDraw(PlayerControler.players[0]);