import Bomb from "./bomb.js";
import { fieldStatus } from "./field.js";
//import GameManager from "./game_manager.js";
export default class BombControler {
    constructor() {
        this.bombs = new Array();
        //this.field = field;
    }
    //private readonly field: Field;
    Copy() {
        let a = new BombControler();
        for (let i = 0; i < this.bombs.length; i++) {
            a.bombs[i] = this.bombs[i].Copy();
        }
        return a;
    }
    CheckPutBomb(putPlayer, field) {
        return field.GetField(putPlayer.Position) !== fieldStatus.BOMB;
    }
    PutBomb(putPlayer, field) {
        if (this.CheckPutBomb(putPlayer, field) === false)
            return false;
        this.bombs.push(new Bomb(putPlayer));
        field.PutBomb(putPlayer.Position);
        return true;
    }
    get Bombs() {
        return this.bombs;
    }
    TurnPassed(player, players, field) {
        for (let i = 0; i < this.bombs.length; i++) {
            if (this.bombs[i].putPlayer === player) {
                this.bombs[i].CountUp();
            }
            if (this.bombs[i].counter >= BombControler.explosionTime) {
                this.bombs[i].Explosion(this.bombs, field, players);
            }
        }
        for (let i = 0; i < this.bombs.length; i++) {
            if (this.bombs[i].IsExplosion) {
                this.bombs.splice(i);
            }
        }
    }
}
BombControler.explosionTime = 3;
//# sourceMappingURL=bomb_controler.js.map