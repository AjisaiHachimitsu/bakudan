import Player, { Direction } from "./player.js"
import Field, { Position } from "./field.js";
import Message from "./message.js";
//import GameManager from "./game_manager.js";

export default class PlayerControler
{
    private numOfAlive: number;
    private field: Field;
    private static readonly ninzu: number = 4;
    private junban: number = 0;
    private players: Player[];
    constructor(field0: Field)
    {
        this.numOfAlive = PlayerControler.ninzu;
        this.field = field0;
        this.players = new Array<Player>(PlayerControler.ninzu);
        for (let i = 0; i < PlayerControler.ninzu; i++)
        {
            let path = "img/char" + i + "/char" + i + "_001.png";
            let x0, y0: number;
            if (i % 2 === 0) x0 = 1;//left
            else x0 = this.field.width - 2;//right
            if (Math.floor(i / 2) === 0) y0 = 1;//top
            else y0 = this.field.height - 2;//bottom
            this.players[i] = new Player(path, new Position(x0, y0))
        }
        this.ShowJunban();
    }
    get Players(): Player[]
    {
        return this.players;
    }
    ChangeToNextPlayer(): void
    {
        this.junban++
        this.junban %= PlayerControler.ninzu;
        this.ShowJunban();
    }
    ShowJunban(): void
    {
        Message.ClearMessage();
        Message.AddImage(this.players[this.junban].imagePath);
        Message.AddMessage("の番です。<br>")
    }
    get TurnPlayer()
    {
        return this.players[this.junban];
    }
}