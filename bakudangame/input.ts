import PlayerControler from "./player_controler.js";
import Player from "./player.js";
export default class Input
{
    readonly inputTable: HTMLTableElement;
    static playerControler: PlayerControler;
    constructor(inputTable0: HTMLTableElement,playerControler0:PlayerControler)
    {
        this.inputTable = inputTable0;
        for (let i = 0; i < 3; i++)
        {
            this.inputTable.insertRow();
            for (let j = 0; j < 3; j++)
            {
                this.inputTable.rows[i].insertCell();
            }
        }
        let getCell =(i: number, j: number) =>
        {
            return this.inputTable.rows[i].cells[j];
        }

        Input.playerControler =playerControler0;
        getCell(0, 1).innerHTML = '<button OnClick="Input.playerControler.UpButtonClick()">↑</button>';
        getCell(1, 0).innerHTML = '<button>←</button>';
        getCell(1,2).innerHTML = '<button>→</button>';
        getCell(2, 1).innerHTML = '<button>↓</button>';
        getCell(1, 1).innerHTML = '<button>Bomb!</button>';
        getCell(2, 2).innerHTML = '<button>Pass</button>';
    }
}