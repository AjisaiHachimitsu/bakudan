
import Player from "./player.js";
import List from "./list.js";
import Bomb from "./bomb.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";
import Output from "./output.js";

export default class GameManager
{
    static field: Field;
    static playerControler: PlayerControler;
    static bombControler: BombControler;
    static start(field:Field,playerControler:PlayerControler,bombCotroler:BombControler)
    {
        this.field = field;
        this.playerControler = playerControler;
        this.bombControler = bombCotroler;
        this.Draw()
    }
    static Draw()
    {
        Output.Draw(this.field, this.playerControler.Players, this.bombControler.Bombs);
    }
}