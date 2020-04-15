import { fieldStatus, default as Field } from "./field.js"
import Player from "./player.js";

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
                if (field.GetField(i, j) == fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
    private static PlayerDraw(players: Player[]): void
    {
        for(let item of players)
        this.AccessCell(item.y, item.x).innerHTML += '<img src="' + item.imagePath + '"/>';
    }
    private static AccessCell(i: number, j: number): HTMLTableCellElement
    {
        return this.table.rows[i].cells[j];
    }
    static Draw(field: Field, players: Player[])
    {
        this.FieldDraw(field);
        this.PlayerDraw(players)
    }
}