import Player, { Direction } from "./player.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";



export default class Cpu
{
    private readonly numOfAction: number;
    private playerControler: PlayerControler;
    private bombControler: BombControler;
    private field: Field;
    private actionSet: ((player:Player,field:Field,bombControler?:BombControler)=>boolean)[];
    private checkActionSet: ((player: Player, field: Field, bombControler?: BombControler) => boolean)[];
    //private allActions: (() => boolean)[][];
    
    
    constructor(numOfAction: number, playerControler: Readonly<PlayerControler>, bombControler: Readonly<BombControler>, field: Readonly<Field>)
    {
        this.numOfAction = numOfAction;
        this.playerControler = playerControler.Copy();
        this.bombControler = bombControler.Copy();
        this.field = field.Copy();


        this.actionSet = [];
        this.checkActionSet = [];
        for (let i = 0; i < 4; i++)
        {
            this.actionSet[i] = (player: Player, field: Field) => { return player.Move(i, field) };
            this.checkActionSet[i] = (player: Player, field: Field) => { return player.CheckMove(i, field) };
        }
        this.actionSet.push((player: Player, field: Field, bombControler: BombControler) => { return player.PutBomb(field, bombControler) })
        this.checkActionSet.push((player: Player, field: Field, bombControler: BombControler) => { return player.CheckPutBomb(field, bombControler) });

    }
    RandomActions(player:Player,field:Field,bombControler:BombControler)
    {
        //let actions: ((player:Player) => boolean)[] = [];
        for (let i = 0; i < this.numOfAction; i++)
        {
            let a:number
            do
            {
                if (Math.random() < 0.05) return;
                a=Math.floor(Math.random()*this.actionSet.length)
            } while (this.checkActionSet[a](this.playerControler.TurnPlayer,this.field,this.bombControler) === false)
            this.actionSet[a](this.playerControler.TurnPlayer, this.field, this.bombControler)
            this.actionSet[a](player, field, bombControler);
        }

    }
}