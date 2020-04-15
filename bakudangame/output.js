import { fieldStatus, Position } from "./field.js";
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
                if (field.GetField(new Position(j, i)) == fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
    static PlayerDraw(players) {
        for (let item of players)
            this.AccessCell(item.position.y, item.position.x).innerHTML += '<img src="' + item.imagePath + '"/>';
    }
    static AccessCell(i, j) {
        return this.table.rows[i].cells[j];
    }
    static Draw(field, players) {
        this.FieldDraw(field);
        this.PlayerDraw(players);
    }
}
//# sourceMappingURL=output.js.map