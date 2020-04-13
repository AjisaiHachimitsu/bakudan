import Field from "./field.js";
import Output from "./output.js";
import Input from "./input.js";
import Player from "./player.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    let output = new Output(document.getElementById("maintable"));
    output.FieldDraw(field);
    let input = new Input((document.getElementById("buttontable")));
    let player1 = new Player("img/char1/char1_001.png", 1, 1);
    output.PlayerDraw(player1);
};
//# sourceMappingURL=app.js.map