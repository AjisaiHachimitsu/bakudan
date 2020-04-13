import Field from "./field.js"
import Output from "./output.js";
import Input from "./input.js";


function main():void
{

}
window.onload = () =>
{
    let field = new Field(21, 15);
    let output = new Output((document.getElementById("maintable") as HTMLTableElement));
    output.Draw(field);
    let input = new Input((document.getElementById("buttontable")) as HTMLTableElement);
};