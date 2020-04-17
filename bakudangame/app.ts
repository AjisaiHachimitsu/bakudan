import Field from "./field.js"
import Output from "./output.js";
import Input from "./input.js";
import Messge from "./message.js";
import PlayerControler from "./player_controler.js";
import List from "./list.js";
function main():void
{

}
window.onload = () =>
{

    let field = new Field(21, 15);
    Messge.start(document.getElementById("message"));
    Output.start((document.getElementById("maintable") as HTMLTableElement));
    //Output.FieldDraw(field);
    PlayerControler.start(field);
    Input.start((document.getElementById("buttontable")) as HTMLTableElement);

    let testlist = new List<number>();
    testlist.add(1);
    testlist.add(2);

};

//Output.PlayerDraw(PlayerControler.players[0]);