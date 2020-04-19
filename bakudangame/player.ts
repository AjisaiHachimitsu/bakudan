﻿import { default as Field, fieldStatus, Position } from "./field.js";

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
    readonly isCpu:boolean
    constructor(img: string, position0: Position,isCpu=false)
    {
        this.imagePath = img;
        this.position = position0;
        this.isCpu = isCpu;
    }
    move(direction: Direction, field: Field): boolean
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