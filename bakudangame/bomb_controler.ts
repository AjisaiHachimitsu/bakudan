import Bomb from "./bomb.js";
import List from "./list.js";
import Player from "./player.js";
import Field, { fieldStatus } from "./field.js";
import GameManager from "./game_manager.js";
export default class BombControler
{
    private static readonly explosionSize: number = 3;
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
    ChangePlayer(player: Player)
    {
        for (this.bombs.First(); this.bombs.IsNull === false; )
        {
            if (this.bombs.Value.putPlayer === player)
            {
                this.bombs.Value.CountUp();
            }
            if (this.bombs.Value.counter >= BombControler.explosionTime)
            {
                this.field.ElaseBomb(this.bombs.Value.position)
                this.bombs.delete();

            }
            else this.bombs.Next()
        }
        GameManager.Draw();
    }
    
}
