import Player, { Direction } from "./player.js";
import Field from "./field.js";

export default class Cpu
{
    ExploreAllAction(turnPlayer: Player, field: Field)
    {
        let actions = new Array<() => boolean>(5);
        for (let i = 0; i < 4; i++)
        {
            actions[i] = function () {return turnPlayer.move(i, field) };
        }
        //actions[length - 1] = function () {return turnPlayer.PutBomb(field,)}
    }
}