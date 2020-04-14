import PlayerControler from "./player_controler.js";


let inputTable: HTMLTableElement;
function start(inputTable0: HTMLTableElement)
{
    inputTable = inputTable0;
    for (let i = 0; i < 3; i++)
    {
        inputTable.insertRow();
        for (let j = 0; j < 3; j++)
        {
            inputTable.rows[i].insertCell();
        }
    }
    let getCell = (i: number, j: number) =>
    {
        return inputTable.rows[i].cells[j];
    }

    //playerControler.UpButtonClick();
    getCell(0, 1).innerHTML = '<button id="up-button">↑</button>';
    let upButton = document.getElementById("up-button") as HTMLButtonElement;
    upButton.onclick = PlayerControler.UpButtonClick;
    getCell(1, 0).innerHTML = '<button>←</button>';
    getCell(1, 2).innerHTML = '<button>→</button>';
    getCell(2, 1).innerHTML = '<button>↓</button>';
    getCell(1, 1).innerHTML = '<button>Bomb!</button>';
    getCell(2, 2).innerHTML = '<button>Pass</button>';
}
export default { start };