import Bomb from "./bomb.js";
import List from "./list.js";
import Player from "./player.js";
import Field, { fieldStatus } from "./field.js";
//import GameManager from "./game_manager.js";
export default class BombControler
{
    private static readonly explosionTime = 3;
    private bombs: List<Bomb>;
    //private readonly field: Field;

    Copy():BombControler
    {
        let a = new BombControler();
        a.bombs = this.bombs.Copy(function (bomb: Bomb) { return bomb.Copy() });
        return a;
    }

    constructor()
    {
        this.bombs = new List<Bomb>();
        //this.field = field;
    }
    CheckPutBomb(putPlayer:Readonly< Player>,field:Readonly< Field>): boolean
    {
        return field.GetField(putPlayer.Position) !== fieldStatus.BOMB
    }
    PutBomb(putPlayer: Player,field:Field): boolean
    {
        if (this.CheckPutBomb(putPlayer,field)===false) return false;
        this.bombs.add(new Bomb(putPlayer))
        field.PutBomb(putPlayer.Position);
        return true;
    }
    get Bombs()
    {
        return this.bombs;
    }
    TurnPassed(player: Player,players:Player[],field:Field)
    {
        for (this.bombs.First(); this.bombs.IsNull === false; this.bombs.Next())
        {
            if (this.bombs.Value.putPlayer === player)
            {
                this.bombs.Value.CountUp();
            }
            if (this.bombs.Value.counter >= BombControler.explosionTime)
            {
                this.bombs.Value.Explosion(this.bombs, field,players);

            }
        }
        for (this.bombs.First(); this.bombs.IsNull as boolean === false;)
        {
            if (this.bombs.Value.IsExplosion)
            {
                this.bombs.delete();
            }
            else this.bombs.Next()
        }
    }

}
