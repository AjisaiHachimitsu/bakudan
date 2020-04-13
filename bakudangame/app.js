import Field from "./field.js";
import Output from "./output.js";
import Input from "./input.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    let output = new Output(document.getElementById("maintable"));
    output.Draw(field);
    let input = new Input((document.getElementById("buttontable")));
};
//# sourceMappingURL=app.js.map