import { default as Field, fieldStatus, Position } from "./field.js";
import BombControler from "./bomb_controler.js";

export enum Direction
{
    TODOWN,
    TOUP,
    TOLEFT,
    TORIGHT
};

export default class Player
{
    imagePath: string;
    private position: Position;
    private isKilled: boolean = false;
    readonly isCpu: boolean;
    constructor(img: string, position0: Position, isCpu = false)
    {
        this.imagePath = img;
        this.position = position0;
        this.isCpu = isCpu;
    }
    Copy(): Player
    {
        let a = new Player(this.imagePath, this.position.Copy(), this.isCpu)
        a.isKilled = this.isKilled;
        return a;
    }
    CheckMove(direction: Direction, field: Readonly<Field>): boolean
    {
        let target: Position;
        switch (direction)
        {
            case Direction.TODOWN:
                target = this.position.Down;
                break;
            case Direction.TOUP:
                target = this.position.Up;
                break;
            case Direction.TORIGHT:
                target = this.position.Right;
                break;
            case Direction.TOLEFT:
                target = this.position.Left;
                break;
        }
        return field.GetField(target) !== fieldStatus.NONE

    }
    Move(direction: Direction, field:Readonly< Field>): boolean
    {
        let target: Position;
        switch (direction)
        {
            case Direction.TODOWN:
                target = this.position.Down;
                break;
            case Direction.TOUP:
                target = this.position.Up;
                break;
            case Direction.TORIGHT:
                target = this.position.Right;
                break;
            case Direction.TOLEFT:
                target = this.position.Left;
                break;
        }
        if (field.GetField(target) !== fieldStatus.NONE)
        {
            return false;
        }
        this.position = target;
        return true;
    }
    CheckPutBomb(field: Readonly<Field>, bombControler: Readonly<BombControler>): boolean
    {
        return bombControler.CheckPutBomb(this, field);
    }
    PutBomb(field: Field, bombControler: BombControler): boolean
    {
        return bombControler.PutBomb(this, field);
    }
    get Position()
    {
        return this.position;
    }
    get IsKilled(): boolean
    {
        return this.isKilled;
    }
    Killed(killPlayer: Player)
    {
        this.isKilled = true;
    }
}