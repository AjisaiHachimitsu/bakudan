import Field from "./field.js"
import Output from "./output.js";



function main():void
{

}
window.onload = () =>
{
    let field = new Field(21, 15);
    let output = new Output((document.getElementById("maintable") as HTMLTableElement))
    output.Draw(field);
};