export default class Input {
    constructor(inputTable0) {
        this.inputTable = inputTable0;
        for (let i = 0; i < 3; i++) {
            this.inputTable.insertRow();
            for (let j = 0; j < 3; j++) {
                this.inputTable.rows[i].insertCell();
            }
        }
        let getCell = (i, j) => {
            return this.inputTable.rows[i].cells[j];
        };
        getCell(0, 1).innerHTML = '<button>↑</button>';
        getCell(1, 0).innerHTML = '<button>←</button>';
        getCell(1, 2).innerHTML = '<button>→</button>';
        getCell(2, 1).innerHTML = '<button>↓</button>';
        getCell(1, 1).innerHTML = '<button>Bomb!</button>';
    }
}
//# sourceMappingURL=input.js.map