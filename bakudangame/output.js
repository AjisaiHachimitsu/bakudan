import { fieldStatus } from "./field.js";
export default class Output {
    static start(table0) {
        this.table = table0;
        this.blockCollor = "gray";
        this.fieldColor = "lightgreen";
    }
    static FieldDraw(field) {
        this.table.innerHTML = "";
        for (let i = 0; i < field.height; i++) {
            this.table.insertRow();
            for (let j = 0; j < field.width; j++) {
                let cell = this.table.rows[i].insertCell();
                if (field.GetField(i, j) == fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
    static PlayerDraw(player) {
        this.AccessCell(player.y, player.x).innerHTML = '<img src="' + player.imagePath + '"/>';
    }
    static AccessCell(i, j) {
        return this.table.rows[i].cells[j];
    }
    static Draw(field, player) {
        this.FieldDraw(field);
        this.PlayerDraw(player);
    }
}
//# sourceMappingURL=output.js.map