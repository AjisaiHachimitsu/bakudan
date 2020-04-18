import { Position } from "./field";
import Player from "./player";
export default class Bomb
{
    readonly position: Position;
    readonly putPlayer: Player;
    counter: number=0;
    constructor(putPlayer0:Player)
    {
        this.putPlayer=putPlayer0
        this.position = this.putPlayer.Position;
    }
    CountUp()
    {
        this.counter++;
    }
}