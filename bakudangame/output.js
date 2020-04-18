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
                cell.style.backgroundColor = this.fieldColor;
                switch (field.GetField(new Position(j, i))) {
                    case fieldStatus.BLOCK:
                        cell.style.backgroundColor = this.blockCollor;
                        break;
                    case fieldStatus.BOMB:
                        cell.innerHTML += '<img src="' + this.bombimagePath + '"/>';
                        break;
                    case fieldStatus.EXPLOSION:
                        cell.innerHTML += '<img src="' + this.explosionimagePath + '"/>';
                        break;
                    default:
                }
            }
        }
    }
    static PlayerDraw(players) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].Iskilled)
                continue;
            this.AccessCell(players[i].Position).innerHTML += '<img src="' + players[i].imagePath + '"/>';
        }
    }
    static BombDraw(bombs) {
        for (bombs.First(); bombs.IsNull === false; bombs.Next()) {
            this.AccessCell(bombs.Value.position).innerHTML += '<img src="' + this.bombimagePath + '"/>';
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
        //this.BombDraw(bombs);
        this.PlayerDraw(players);
    }
}
Output.bombimagePath = "img/bomb/bomb_002.png";
Output.explosionimagePath = "img/explosion/bomb_033.png";
//# sourceMappingURL=output.js.map