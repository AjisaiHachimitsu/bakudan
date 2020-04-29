import Player, { Direction } from "./player.js"
import Field, { Position } from "./field.js";
import Message from "./message.js";
//import GameManager from "./game_manager.js";

export default class PlayerControler
{
    //private field: Field;
    private static readonly ninzu: number = 4;
    private junban: number = 0;
    private players: Player[];

    Copy(): PlayerControler
    {
        let a = new PlayerControler();
        a.junban = this.junban;
        a.players = []
        for (let i = 0; i < this.players.length; i++)
        {
            a.players[i] = this.players[i].Copy();
        }
        return a;
    }

    constructor(field0?: Field)
    {
        //this.field = field0;
        this.players = new Array<Player>(PlayerControler.ninzu);
        if (field0 == undefined) return;
        for (let i = 0; i < PlayerControler.ninzu; i++)
        {
            let path = "img/char" + i + "/char" + i + "_001.png";
            let x0, y0: number;
            if (i % 2 === 0) x0 = 1;//left
            else x0 = field0.width - 2;//right
            if (Math.floor(i / 2) === 0) y0 = 1;//top
            else y0 = field0.height - 2;//bottom

            let isCpu: boolean[] = [false, true, true, true];
            this.players[i] = new Player(path, new Position(x0, y0), isCpu[i]);


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
        if (this.TurnPlayer.IsKilled === false) this.ShowJunban();
    }
    ShowJunban(): void
    {
        //Message.ClearMessage();
        Message.BeginNewLine();
        Message.AddImage(this.players[this.junban].imagePath);
        Message.AddMessage("の番です。<br>")
    }
    get TurnPlayer()
    {
        return this.players[this.junban];
    }
    get NumOfArive(): number
    {
        let a = 0;
        for (let i = 0; i < this.players.length; i++)
        {
            if (this.players[i].IsKilled === false) a++;
        }
        return a;
    }
}