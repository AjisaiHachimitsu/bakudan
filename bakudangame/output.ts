import { fieldStatus, default as Field, Position } from "./field.js"
import Player from "./player.js";
import List from "./list.js";
import Bomb from "./bomb.js";

export default class Output
{
    private static table: HTMLTableElement;
    private static blockCollor: string;
    private static fieldColor: string;
    static readonly bombimagePath: string = "img/bomb/bomb_002.png";
    static readonly explosionimagePath: string = "img/explosion/bomb_033.png";
    static start(table0: HTMLTableElement)
    {
        this.table = table0;
        this.blockCollor = "gray";
        this.fieldColor = "lightgreen";
    }

    private static FieldDraw(field:Readonly< Field>): void
    {
        this.table.innerHTML = "";
        for (let i = 0; i < field.height; i++)
        {
            this.table.insertRow();
            for (let j = 0; j < field.width; j++)
            {
                let cell = this.table.rows[i].insertCell();
                cell.style.backgroundColor = this.fieldColor;
                switch (field.GetField(new Position(j, i)))
                {
                    case fieldStatus.BLOCK:
                        cell.style.backgroundColor = this.blockCollor;
                        break;
                    case fieldStatus.BOMB:
                        cell.innerHTML += '<img src="' + this.bombimagePath + '"/>'
                        break;
                    case fieldStatus.EXPLOSION:
                        let elaseExplosion = () =>
                        {
                            cell.innerHTML = "";
                        }
                        cell.innerHTML += '<img src="' + this.explosionimagePath + '"/>'
                        setTimeout(elaseExplosion, 300);
                        break;
                    default:
                }
            }
        }
    }
    private static PlayerDraw(players:readonly Readonly< Player>[]): void
    {
        for (let i = 0; i < players.length; i++)
        {
            if (players[i].IsKilled) continue;
            this.AccessCell(players[i].Position).innerHTML += '<img src="' + players[i].imagePath + '"/>';
        }
    }
    private static BombDraw(bombs:Readonly< List<Readonly< Bomb>>>)
    {
        for (bombs.First(); bombs.IsNull === false; bombs.Next())
        {
            this.AccessCell(bombs.Value.position).innerHTML += '<img src="' + this.bombimagePath + '"/>'
        }
    }
    private static AccessCell(i: number, j: number): HTMLTableCellElement;
    private static AccessCell(position: Position): HTMLTableCellElement;
    private static AccessCell(value1: number |Readonly< Position>, value2?: number)
    {
        if (typeof (value1) === "number")
        {
            return this.table.rows[value1].cells[value2];
        }
        else 
        {
            return this.table.rows[value1.y].cells[value1.x];
        }
    }
    static Draw(field:Readonly< Field>, players:readonly Readonly< Player>[], bombs:Readonly< List<Readonly< Bomb>>>)
    {
        this.FieldDraw(field);
        //this.BombDraw(bombs);
        this.PlayerDraw(players)
    }
}