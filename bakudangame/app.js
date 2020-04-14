import Field from "./field.js";
import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    let output = new Output(document.getElementById("maintable"));
    output.FieldDraw(field);
    let input = new Input((document.getElementById("buttontable")));
    let playerControler = new PlayerControler;
    let player1 = playerControler.players[0];
    output.PlayerDraw(player1);
    let message = new Messge(document.getElementById("message"));
    message.AddMessage("こんにちは。", "red");
    message.AddImage(player1.imagePath);
    message.AddMessage("こんにちは。", "brown");
};
//# sourceMappingURL=app.js.map