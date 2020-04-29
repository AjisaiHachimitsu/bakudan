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

    let field = new Field(15, 11);
    Messge.start(document.getElementById("message"));
    let playerControler=new PlayerControler(field);
    Output.start((document.getElementById("maintable") as HTMLTableElement));
    let bombControler=new BombControler();
    Input.start((document.getElementById("buttontable")) as HTMLTableElement);
    GameManager.start(field,playerControler,bombControler);

    

};

//Output.PlayerDraw(PlayerControler.players[0]);