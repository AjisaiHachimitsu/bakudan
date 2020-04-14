export default class Input {
    constructor(inputTable0, playerControler0) {
        Input.inputTable = inputTable0;
        for (let i = 0; i < 3; i++) {
            Input.inputTable.insertRow();
            for (let j = 0; j < 3; j++) {
                Input.inputTable.rows[i].insertCell();
            }
        }
        let getCell = (i, j) => {
            return Input.inputTable.rows[i].cells[j];
        };
        Input.playerControler = playerControler0;
        //Input.playerControler.UpButtonClick();
        getCell(0, 1).innerHTML = '<button onclick=alert(Input.playerControler)>↑</button>';
        getCell(1, 0).innerHTML = '<button>←</button>';
        getCell(1, 2).innerHTML = '<button>→</button>';
        getCell(2, 1).innerHTML = '<button>↓</button>';
        getCell(1, 1).innerHTML = '<button>Bomb!</button>';
        getCell(2, 2).innerHTML = '<button>Pass</button>';
    }
}
//# sourceMappingURL=input.js.map