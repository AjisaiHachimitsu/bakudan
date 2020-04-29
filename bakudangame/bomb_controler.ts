import Bomb from "./bomb.js";
import Player from "./player.js";
import Field, { fieldStatus } from "./field.js";
//import GameManager from "./game_manager.js";
export default class BombControler
{
    private static readonly explosionTime = 3;
    private bombs: Array<Bomb>;
    //private readonly field: Field;

    Copy():BombControler
    {
        let a = new BombControler();
        for (let i = 0; i < this.bombs.length; i++)
        {
            a.bombs[i] = this.bombs[i].Copy();
        }
        return a;
    }

    constructor()
    {
        this.bombs = new Array<Bomb>();
        //this.field = field;
    }
    CheckPutBomb(putPlayer:Readonly< Player>,field:Readonly< Field>): boolean
    {
        return field.GetField(putPlayer.Position) !== fieldStatus.BOMB
    }
    PutBomb(putPlayer: Player,field:Field): boolean
    {
        if (this.CheckPutBomb(putPlayer,field)===false) return false;
        this.bombs.push(new Bomb(putPlayer))
        field.PutBomb(putPlayer.Position);
        return true;
    }
    get Bombs()
    {
        return this.bombs;
    }
    TurnPassed(player: Player,players:Player[],field:Field)
    {
        for (let i = 0; i < this.bombs.length;i++)
        {
            if (this.bombs[i].putPlayer === player)
            {
                this.bombs[i].CountUp();
            }
            if (this.bombs[i].counter >= BombControler.explosionTime)
            {
                this.bombs[i].Explosion(this.bombs, field,players);

            }
        }
        for (let i = 0; i < this.bombs.length;)
        {
            if (this.bombs[i].IsExplosion)
            {
                this.bombs.splice(i, 1);
            }
            else i++;
        }
    }
    static get ExplosionTime()
    {
        return this.explosionTime
    }
}
