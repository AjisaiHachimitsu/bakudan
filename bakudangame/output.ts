import {fieldStatus,default as Field} from "./field.js"

export default class Output
{
    readonly table: HTMLTableElement;
    readonly blockCollor: string;
    readonly fieldColor: string;
    constructor(table0: HTMLTableElement)
    {
        this.table = table0;
        this.blockCollor = "gray";
        this.fieldColor = "lightgreen";
    }

    Draw(field: Field):void
    {
        this.table.innerHTML = "";
        for (let i = 0; i < field.height; i++)
        {
            this.table.insertRow();
            for (let j = 0; j < field.width; j++)
            {
                let cell = this.table.rows[i].insertCell();
                if (field.mainfield[i][j] == fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
}