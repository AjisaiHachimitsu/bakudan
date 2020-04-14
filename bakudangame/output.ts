import {fieldStatus,default as Field} from "./field.js"
import Player from "./player.js";

export default class Output
{
    static table: HTMLTableElement;
    static blockCollor: string;
    static  fieldColor: string;
    constructor(table0: HTMLTableElement)
    {
        Output.table = table0;
        Output.blockCollor = "gray";
        Output.fieldColor = "lightgreen";
    }

    FieldDraw(field: Field):void
    {
        Output.table.innerHTML = "";
        for (let i = 0; i < field.height; i++)
        {
            Output.table.insertRow();
            for (let j = 0; j < field.width; j++)
            {
                let cell = Output.table.rows[i].insertCell();
                if (field.GetField(i,j) == fieldStatus.BLOCK)
                    cell.style.backgroundColor = Output.blockCollor;
                else
                    cell.style.backgroundColor = Output.fieldColor;
            }
        }
    }
    static PlayerDraw(player: Player): void
    {
        Output.AccessCell(player.y, player.x).innerHTML = '<img src="' + player.imagePath + '"/>';
    }
    private static AccessCell(i: number, j: number): HTMLTableCellElement
    {
        return Output.table.rows[i].cells[j];
    }
}