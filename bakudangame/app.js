import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import { GameManager } from "./game_manager.js";
function main() {
}
window.onload = () => {
    Messge.start(document.getElementById("message"));
    Output.start(document.getElementById("maintable"));
    Input.start((document.getElementById("buttontable")));
    GameManager.start();
};
//Output.PlayerDraw(PlayerControler.players[0]);
//# sourceMappingURL=app.js.map