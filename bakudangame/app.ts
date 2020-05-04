import Field from "./field.js"
import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import { GameManager } from "./game_manager.js";
function main():void
{

}
window.onload = () =>
{

    
    Messge.start(document.getElementById("message"));
    
    Output.start((document.getElementById("maintable") as HTMLTableElement));
    
    Input.start((document.getElementById("buttontable")) as HTMLTableElement);
    GameManager.start();

    

};

//Output.PlayerDraw(PlayerControler.players[0]);