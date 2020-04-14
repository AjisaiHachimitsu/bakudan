import Player from "./player.js";
import Output from "./output.js";
import Message from "./message.js";
let field;
let ninzu = 1;
let junban = 0;
let players;
function start(field0) {
    field = field0;
    players = new Array(ninzu);
    for (let i = 0; i < ninzu; i++) {
        players[i] = new Player("img/char1/char1_001.png", 1, 3);
    }
    Output.Draw(field, players[0]);
}
function ArrowButtonClick(direction) {
    if (players[junban].move(direction, field) == false) {
        Message.AddMessage("そこには行けません。<br>");
    }
    Output.Draw(field, players[junban]);
}
export default { start, ArrowButtonClick };
//# sourceMappingURL=player_controler.js.map