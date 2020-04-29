import Field, { Position, fieldStatus } from "./field.js";
import Player from "./player";
import List from "./list";
export default class Bomb
{
    private static readonly explosionSize: number = 3;
    readonly position: Position;
    readonly putPlayer: Player;
    private isExplosion: boolean = false;
    counter: number = 0;
    Copy():Bomb
    {
        let a = new Bomb(this.putPlayer);
        a.isExplosion = this.isExplosion;
        a.counter = this.counter;
        return a;
    }
    constructor(putPlayer0: Player)
    {
        this.putPlayer = putPlayer0
        this.position = this.putPlayer.Position.Copy();
    }
    CountUp()
    {
        this.counter++;
    }
    Explosion(bombs: List<Bomb>, field: Field,players:Player[])
    {
        if (this.isExplosion) return;
        this.isExplosion = true;
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        for (let i = 0; i < 4; i++)
        {
            for (let j = 0; j <= Bomb.explosionSize; j++)
            {
                let target = new Position(j * directions[i][0] + this.position.x, j * directions[i][1] + this.position.y);
                //alert([target.x,target.y])
                if (field.GetField(target) === fieldStatus.BLOCK) break;
                for (let k = 0; k < players.length; k++)
                {
                    if (Position.IsEq(players[k].Position, target))
                        players[k].Killed(this.putPlayer);
                }
                if (field.GetField(target) === fieldStatus.BOMB)
                {
                    for (bombs.First(); bombs.IsNull === false; bombs.Next())
                    {
                        if (Position.IsEq(bombs.Value.position, target))
                        {
                            //alert(bombs.Value.isExplosion);
                            bombs.Value.Explosion(bombs, field,players);
                            break;
                        }
                    }
                }
                field.Explosion(target);
            }
        }
    }
    get IsExplosion()
    {
        return this.isExplosion;
    }
}