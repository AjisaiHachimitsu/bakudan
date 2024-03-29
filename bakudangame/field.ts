﻿
export enum fieldStatus
{
    NONE,
    BLOCK,
    BOMB,
    EXPLOSION

};

export class Position//コピーメソッドあり
{
    x: number;
    y: number;
    constructor(x0: number, y0: number)
    {
        this.x = x0;
        this.y = y0;
    }
    get Right(): Position
    {
        return new Position(this.x + 1, this.y);
    }
    get Left(): Position
    {
        return new Position(this.x - 1, this.y);
    } get Up(): Position
    {
        return new Position(this.x, this.y - 1);
    } get Down(): Position
    {
        return new Position(this.x, this.y + 1);
    }
    static IsEq(a: Position, b: Position)
    {
        return a.x === b.x && a.y === b.y;
    }
    Copy(): Position
    {
        return new Position(this.x, this.y)
    }

}
export default class Field//コピーメソッドあり
{
    readonly width: number;
    readonly height: number;
    private mainfield: fieldStatus[][];
    GetField(position: Readonly<Position>): fieldStatus
    {
        return this.mainfield[position.y][position.x];
    }

    constructor(width0: number, height0: number, mainfield0?: fieldStatus[][])
    {
        this.width = width0;
        this.height = height0;
        this.mainfield = [];
        if (mainfield0 == undefined)
        {
            for (let i = 0; i < this.height; i++)
            {
                this.mainfield[i] = [];
                for (let j = 0; j < this.width; j++)
                {
                    if (i % 2 === 0 && j % 2 === 0)
                    {
                        this.mainfield[i][j] = fieldStatus.BLOCK;
                    }
                    else
                    {
                        this.mainfield[i][j] = fieldStatus.NONE;
                    }
                    if (i === 0 || i === this.height - 1 || j === 0 || j === this.width - 1)
                    {
                        this.mainfield[i][j] = fieldStatus.BLOCK;
                    }
                }
            }
        }
        else
        {
            for (let i = 0; i < this.height; i++)
            {
                this.mainfield[i] = mainfield0[i].concat();
            }
        }
    }
    PutBomb(position: Readonly<Position>)
    {
        this.mainfield[position.y][position.x] = fieldStatus.BOMB;
    }
    IsOutOfField(position: Readonly<Position>): boolean
    {
        return position.x < 0 || position.x > this.width || position.y < 0 || position.y > this.height;
    }
    Explosion(position: Readonly<Position>)
    {
        this.mainfield[position.y][position.x] = fieldStatus.EXPLOSION;
    }
    EraseExplosion(): void
    {
        for (let i = 0; i < this.height; i++)
        {
            for (let j = 0; j < this.width; j++)
            {
                if (this.mainfield[i][j] === fieldStatus.EXPLOSION)
                    this.mainfield[i][j] = fieldStatus.NONE;
            }
        }
    }
    Copy(): Field
    {
        return new Field(this.width, this.height, this.mainfield)
    }
}