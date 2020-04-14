import Player, { Direction } from "./player.js";
import Output from "./output.js";
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
function UpButtonClick() {
    alert("↑");
    players[junban].move(Direction.TOUP, field);
    Output.Draw(field, players[junban]);
}
export default { start, UpButtonClick };
//# sourceMappingURL=player_controler.js.map