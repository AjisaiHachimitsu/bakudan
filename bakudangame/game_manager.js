import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import Output from "./output.js";
export default class GameManager {
    static start(field) {
        this.field = field;
        this.players = PlayerControler.GetPlayers();
        this.bombs = BombControler.GetBombs();
        this.Draw();
    }
    static Draw() {
        Output.Draw(this.field, this.players, this.bombs);
    }
}
//# sourceMappingURL=game_manager.js.map