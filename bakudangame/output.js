import { fieldStatus } from "./field.js";
let table;
let blockCollor;
let fieldColor;
function start(table0) {
    table = table0;
    blockCollor = "gray";
    fieldColor = "lightgreen";
}
function FieldDraw(field) {
    table.innerHTML = "";
    for (let i = 0; i < field.height; i++) {
        table.insertRow();
        for (let j = 0; j < field.width; j++) {
            let cell = table.rows[i].insertCell();
            if (field.GetField(i, j) == fieldStatus.BLOCK)
                cell.style.backgroundColor = blockCollor;
            else
                cell.style.backgroundColor = fieldColor;
        }
    }
}
function PlayerDraw(player) {
    AccessCell(player.y, player.x).innerHTML = '<img src="' + player.imagePath + '"/>';
}
function AccessCell(i, j) {
    return table.rows[i].cells[j];
}
function Draw(field, player) {
    FieldDraw(field);
    PlayerDraw(player);
}
export default { start, Draw };
//# sourceMappingURL=output.js.map