import { fieldStatus, default as Field, Position } from "./field.js"
import Player from "./player.js";
import List from "./list.js";
import Bomb from "./bomb.js";
import BombControler from "./bomb_controler.js";

export default class Output
{
    private static table: HTMLTableElement;
    private static blockCollor: string;
    private static fieldColor: string;
    static start(table0: HTMLTableElement)
    {
        this.table = table0;
        this.blockCollor = "gray";
        this.fieldColor = "lightgreen";
    }

    private static FieldDraw(field: Field): void
    {
        this.table.innerHTML = "";
        for (let i = 0; i < field.height; i++)
        {
            this.table.insertRow();
            for (let j = 0; j < field.width; j++)
            {
                let cell = this.table.rows[i].insertCell();
                if (field.GetField(new Position(j, i)) === fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
    private static PlayerDraw(players: Player[]): void
    {
        for (let item of players)
            this.AccessCell(item.Position.y, item.Position.x).innerHTML += '<img src="' + item.imagePath + '"/>';
    }
    private static BombDraw(bombs: List<Bomb>)
    {
        for (bombs.First(); bombs.IsNull === false; bombs.Next())
        {
            this.AccessCell(bombs.Value.position).innerHTML += '<img src="' + BombControler.imagePath + '"/>'
        }
    }
    private static AccessCell(i: number, j: number): HTMLTableCellElement;
    private static AccessCell(position: Position): HTMLTableCellElement;
    private static AccessCell(value1: number|Position, value2?: number)
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
    static Draw(field: Field, players: Player[],bombs:List<Bomb>)
    {
        this.FieldDraw(field);
        this.BombDraw(bombs);
        this.PlayerDraw(players)
    }
}