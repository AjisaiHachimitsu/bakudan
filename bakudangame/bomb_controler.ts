import Bomb from "./bomb.js";
import List from "./list.js";
import Player from "./player.js";
import Field, { fieldStatus } from "./field.js";
export default class BombControler
{
    private static readonly explosionTime = 3;
    private bombs: List<Bomb>;
    static readonly imagePath: string = "img/bomb/bomb_002.png";
    private  field: Field;
    constructor(field:Field)
    {
        this.bombs = new List<Bomb>();
        BombControler.imagePath 
        this.field = field;
    }

     PutBomb(putPlayer: Player):boolean
    {
        if (this.field.GetField(putPlayer.Position) === fieldStatus.BOMB) return false;
        this.bombs.add(new Bomb(putPlayer))
        this.field.PutBomb(putPlayer.Position);
        return true;
    }
     get Bombs()
    {
        return this.bombs;
    }
}
