import Field from "./field.js";
import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    Messge.start(document.getElementById("message"));
    Output.start(document.getElementById("maintable"));
    //Output.FieldDraw(field);
    PlayerControler.start(field);
    Input.start((document.getElementById("buttontable")));
    //let player1 = playerControler.players[0];
};
//Output.PlayerDraw(PlayerControler.players[0]);
//# sourceMappingURL=app.js.map