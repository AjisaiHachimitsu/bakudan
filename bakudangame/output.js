import { fieldStatus, Position } from "./field.js";
import BombControler from "./bomb_controler.js";
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
                if (field.GetField(new Position(j, i)) === fieldStatus.BLOCK)
                    cell.style.backgroundColor = this.blockCollor;
                else
                    cell.style.backgroundColor = this.fieldColor;
            }
        }
    }
    static PlayerDraw(players) {
        for (let item of players)
            this.AccessCell(item.Position.y, item.Position.x).innerHTML += '<img src="' + item.imagePath + '"/>';
    }
    static BombDraw(bombs) {
        for (bombs.First(); bombs.IsNull === false; bombs.Next()) {
            this.AccessCell(bombs.Value.position).innerHTML += '<img src="' + BombControler.imagePath + '"/>';
        }
    }
    static AccessCell(value1, value2) {
        if (typeof (value1) === "number") {
            return this.table.rows[value1].cells[value2];
        }
        else {
            return this.table.rows[value1.y].cells[value1.x];
        }
    }
    static Draw(field, players, bombs) {
        this.FieldDraw(field);
        this.BombDraw(bombs);
        this.PlayerDraw(players);
    }
}
//# sourceMappingURL=output.js.map