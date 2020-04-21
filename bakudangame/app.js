import Field from "./field.js";
import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import { GameManager } from "./game_manager.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    Messge.start(document.getElementById("message"));
    let playerControler = new PlayerControler(field);
    Output.start(document.getElementById("maintable"));
    let bombControler = new BombControler();
    Input.start((document.getElementById("buttontable")));
    GameManager.start(field, playerControler, bombControler);
};
//Output.PlayerDraw(PlayerControler.players[0]);
//# sourceMappingURL=app.js.map