import { Direction } from "./player.js";
import GameManager from "./game_manager.js";
export default class Input {
    static start(inputTable0) {
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
        getCell(0, 1).innerHTML = '<button id="up-button">↑</button>';
        let upButton = document.getElementById("up-button");
        upButton.onclick = function () { GameManager.ArrowButtonClick(Direction.TOUP); };
        getCell(1, 0).innerHTML = '<button id="left-button">←</button>';
        let leftButton = document.getElementById("left-button");
        leftButton.onclick = function () { GameManager.ArrowButtonClick(Direction.TOLEFT); };
        getCell(1, 2).innerHTML = '<button id="right-button">→</button>';
        let rightButton = document.getElementById("right-button");
        rightButton.onclick = function () { GameManager.ArrowButtonClick(Direction.TORIGHT); };
        getCell(2, 1).innerHTML = '<button id="down-button">↓</button>';
        let downButton = document.getElementById("down-button");
        downButton.onclick = function () { GameManager.ArrowButtonClick(Direction.TODOWN); };
        getCell(1, 1).innerHTML = '<button id="bomb-button">Bomb!</button>';
        let bombButton = document.getElementById("bomb-button");
        bombButton.onclick = function () { GameManager.BombButtonClick(); };
        getCell(2, 2).innerHTML = '<button id="pass-button">Pass</button>';
        let passButton = document.getElementById("pass-button");
        passButton.onclick = function () { GameManager.PassButtonClick(); };
    }
}
//# sourceMappingURL=input.js.map