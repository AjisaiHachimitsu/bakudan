import Player, { Direction } from "./player.js";
import Field from "./field.js";
import PlayerControler from "./player_controler.js";
import BombControler from "./bomb_controler.js";

class Action
{
    check: () => boolean;
    action: () => boolean;
    constructor(check: () => boolean, action: () => boolean)
    {
        this.check = check;
        this.action = action;
    }
}

export default class Cpu
{
    private readonly numOfAction: number;
    private playerControler: PlayerControler;
    private bombControler: BombControler;
    private field: Field;
    private allActions: (() => boolean)[][];
    constructor(numOfAction: number, playerControler: Readonly<PlayerControler>, bombControler: Readonly<BombControler>, field: Readonly<Field>)
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
        let actionSet = new Array<Action>(6);
        for (let i = 0; i < 4; i++)
        {
            actionSet[i] = new Action(() => { return this.playerControler.TurnPlayer.CheckMove(i, this.field) },
                () => { return this.playerControler.TurnPlayer.Move(i, this.field) });
        }
        actionSet[4] = new Action(() => { return this.playerControler.TurnPlayer.CheckPutBomb(this.field, this.bombControler) },
            () => { return this.playerControler.TurnPlayer.PutBomb(this.field, this.bombControler) })
        while ()
        {
            let actions: (() => boolean)[] = [];
            while (actions.length < this.numOfAction)
            {
                if (actionSet[0].check)
                    actions.push(actionSet[0].action);
                else break;
            }
            this.allActions.push(actions);
        }
    }
}