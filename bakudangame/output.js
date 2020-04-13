import { fieldStatus } from "./field.js";
export default class Output {
    constructor(table0) {
        this.table = table0;
        this.blockCollor = "gray";
        this.fieldColor = "lightgreen";
    }
    FieldDraw(field) {
        this.table.innerHTML = "";
        for (let i = 0; i < field.height; i++) {
            this.table.insertRow();
            for (let j = 0; j < field.width; j++) {
                let cell = this.table.rows[i].insertCell();
                if (field.mainfield[i][j] == fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
    PlayerDraw(player) {
        this.AccessCell(player.y, player.x).innerHTML = '<img src="' + player.imagePath + '"/>';
    }
    AccessCell(i, j) {
        return this.table.rows[i].cells[j];
    }
}
//# sourceMappingURL=output.js.map