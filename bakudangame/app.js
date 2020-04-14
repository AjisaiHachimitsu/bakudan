import Field from "./field.js";
import Output from "./output.js";
import Input from "./input.js";
import PlayerControler from "./player_controler.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    let output = new Output(document.getElementById("maintable"));
    output.FieldDraw(field);
    let playerControler = new PlayerControler(field, output);
    let input = new Input((document.getElementById("buttontable")), playerControler);
    output.PlayerDraw(playerControler.players[0]);
    //let player1 = playerControler.players[0];
};
//# sourceMappingURL=app.js.map