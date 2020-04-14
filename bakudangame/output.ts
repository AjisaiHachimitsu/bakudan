import { fieldStatus, default as Field } from "./field.js"
import Player from "./player.js";


let table: HTMLTableElement;
let blockCollor: string;
let fieldColor: string;
function start(table0: HTMLTableElement)
{
    table = table0;
    blockCollor = "gray";
    fieldColor = "lightgreen";
}

function FieldDraw(field: Field): void
{
    table.innerHTML = "";
    for (let i = 0; i < field.height; i++)
    {
        table.insertRow();
        for (let j = 0; j < field.width; j++)
        {
            let cell = table.rows[i].insertCell();
            if (field.GetField(i, j) == fieldStatus.BLOCK)
                cell.style.backgroundColor = blockCollor;
            else
                cell.style.backgroundColor = fieldColor;
        }
    }
}
function PlayerDraw(player: Player): void
{
    AccessCell(player.y, player.x).innerHTML = '<img src="' + player.imagePath + '"/>';
}
function AccessCell(i: number, j: number): HTMLTableCellElement
{
    return table.rows[i].cells[j];
}
function Draw(field:Field,player:Player)
{
    FieldDraw(field);
    PlayerDraw(player)
}
export default { start,Draw };