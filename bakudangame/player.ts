import { fieldStatus, default as Field } from "./field.js"

export enum Direction
{
    TOLEFT,
    TORIGHT,
    TOUP,
    TODOWN
};

export default class Player
{
    imagePath: string;
    x: number;
    y: number;

    constructor(img: string, x0: number, y0: number)
    {
        this.imagePath = img;
        this.x = x0;
        this.y = y0;
    }
    move(direction: Direction, field: Field): boolean
    {
        let dir = new Array<number>(2);
        switch (direction)
        {
            case Direction.TODOWN:
                dir = [1, 0];
                break;
            case Direction.TOUP:
                dir = [-1, 0];
                break;
            case Direction.TORIGHT:
                dir = [0,1];
                break;
            case Direction.TOLEFT:
                dir = [0,-1];
                break;
        }
        if (field.GetField(this.y + dir[0], this.x + dir[1]) != fieldStatus.NONE)
        {
            return false;
        }
        this.y += dir[0];
        this.x += dir[1];
        return true;
    }
}