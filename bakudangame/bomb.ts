import { Position } from "./field";
import Player from "./player";
export default class Bomb
{
    readonly position: Position;
    readonly putPlayer: Player;
    counter: number=0;
    constructor(position0:Position,putPlayer0:Player)
    {
        this.putPlayer=putPlayer0
        this.position = position0;
    }
    CountUp()
    {
        this.counter++;
    }
}