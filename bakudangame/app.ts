import Field from "./field.js"
import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
import List from "./list.js";
import BombControler from "./bomb_controler.js";
import GameManager from "./game_manager.js";
function main():void
{

}
window.onload = () =>
{

    let field = new Field(21, 15);
    Messge.start(document.getElementById("message"));
    PlayerControler.start(field);
    Output.start((document.getElementById("maintable") as HTMLTableElement));
    BombControler.start(field);
    Input.start((document.getElementById("buttontable")) as HTMLTableElement);
    GameManager.start(field);

    

};

//Output.PlayerDraw(PlayerControler.players[0]);