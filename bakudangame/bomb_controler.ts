import Bomb from "./bomb.js";
import List from "./list.js";
import Player from "./player.js";
import Field, { fieldStatus } from "./field.js";
export default class BombControler
{
    private static readonly explosionTime = 3;
    private static bombs: List<Bomb>;
    static imagePath: string;
    private static field: Field;
    static start(field:Field)
    {
        this.bombs = new List<Bomb>();
        this.imagePath = "img/bomb/bomb_002.png"
        this.field = field;
    }

    static PutBomb(putPlayer: Player):boolean
    {
        if (this.field.GetField(putPlayer.Position) === fieldStatus.BOMB) return false;
        this.bombs.add(new Bomb(putPlayer))
        this.field.PutBomb(putPlayer.Position);
        return true;
    }
    static GetBombs()
    {
        return this.bombs;
    }
}
