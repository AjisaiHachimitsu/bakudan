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
    private allActions: (() => boolean)[][];
    constructor(numOfAction: number, playerControler:Readonly< PlayerControler>, bombControler:Readonly< BombControler>, field:Readonly< Field>)
    {
        this.numOfAction = numOfAction;
        this.playerControler = playerControler.Copy();
        this.bombControler = bombControler.Copy();
        this.field = field.Copy();
        this.allActions = [];
    }
    ExplorNextAction()
    {
        
    }
    private ExplorAllAction()
    {
        let actionSet = new Array<() => boolean>(6);
        for (let i = 0; i < 4; i++)
        {
            actionSet[i] = () => { return this.playerControler.TurnPlayer.Move(i, this.field) };
        }
        actionSet[4] = () => { return this.playerControler.TurnPlayer.PutBomb(this.field, this.bombControler) }
        actionSet[5] = null;
        let actions:(()=>boolean)[]=[];
        for (let i = 0; i < this.numOfAction; i++)
        {
            if (actionSet[0]);
            actions.push(actionSet[0]);
        }
    }
}