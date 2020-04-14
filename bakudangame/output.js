import { fieldStatus } from "./field.js";
export default class Output {
    constructor(table0) {
        Output.table = table0;
        Output.blockCollor = "gray";
        Output.fieldColor = "lightgreen";
    }
    FieldDraw(field) {
        Output.table.innerHTML = "";
        for (let i = 0; i < field.height; i++) {
            Output.table.insertRow();
            for (let j = 0; j < field.width; j++) {
                let cell = Output.table.rows[i].insertCell();
                if (field.GetField(i, j) == fieldStatus.BLOCK)
                    cell.style.backgroundColor = Output.blockCollor;
                else
                    cell.style.backgroundColor = Output.fieldColor;
            }
        }
    }
    static PlayerDraw(player) {
        Output.AccessCell(player.y, player.x).innerHTML = '<img src="' + player.imagePath + '"/>';
    }
    static AccessCell(i, j) {
        return Output.table.rows[i].cells[j];
    }
}
//# sourceMappingURL=output.js.map