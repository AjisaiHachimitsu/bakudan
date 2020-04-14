import Player, { Direction } from "./player.js"
import Input from "./input"
export default class PlayerControler
{
    readonly ninzu: number = 1;
    players: Player[];
    constructor()
    {
        this.players = new Array<Player>(this.ninzu);
        for (let i = 0; i < this.ninzu;i++)
        {
            this.players[i] = new Player("img/char1/char1_001.png", 1, 1)
        }
    }
}