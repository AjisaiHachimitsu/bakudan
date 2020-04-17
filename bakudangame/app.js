import Field from "./field.js";
import Messge from "./message.js";
import List from "./list.js";
function main() {
}
window.onload = () => {
    let field = new Field(21, 15);
    Messge.start(document.getElementById("message"));
    /*Output.start((document.getElementById("maintable") as HTMLTableElement));
    PlayerControler.start(field);
    Input.start((document.getElementById("buttontable")) as HTMLTableElement);*/
    let testlist = new List();
    for (let i = 0; i < 10; i++) {
        testlist.add(i);
    }
    while (testlist.IsNull == false) {
        if (testlist.Value === 3)
            testlist.delete();
        Messge.AddMessage(String(testlist.Value));
        Messge.BeginNewLine();
        testlist.Next();
    }
};
//Output.PlayerDraw(PlayerControler.players[0]);
//# sourceMappingURL=app.js.map