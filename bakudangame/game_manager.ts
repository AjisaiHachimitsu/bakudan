
import Player from "./player.js";
import List from "./list.js";
import Bomb from "./bomb.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import Output from "./output.js";

export default class GameManager
{
    static players: Player[];
    static bombs: List<Bomb>
    static field: Field;
    static start(field:Field)
    {
        this.field = field;
        this.players = PlayerControler.GetPlayers();
        this.bombs = BombControler.GetBombs();
        this.Draw()
    }
    static Draw()
    {
        Output.Draw(this.field, this.players, this.bombs);
    }
}