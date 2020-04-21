import Bomb from "./bomb.js";
import List from "./list.js";
import { fieldStatus } from "./field.js";
//import GameManager from "./game_manager.js";
export default class BombControler {
    constructor() {
        this.bombs = new List();
        //this.field = field;
    }
    //private readonly field: Field;
    Copy() {
        let a = new BombControler();
        a.bombs = this.bombs.Copy(function (bomb) { return bomb.Copy(); });
        return a;
    }
    CheckPutBomb(putPlayer, field) {
        return field.GetField(putPlayer.Position) !== fieldStatus.BOMB;
    }
    PutBomb(putPlayer, field) {
        if (this.CheckPutBomb(putPlayer, field) === false)
            return false;
        this.bombs.add(new Bomb(putPlayer));
        field.PutBomb(putPlayer.Position);
        return true;
    }
    get Bombs() {
        return this.bombs;
    }
    TurnPassed(player, players, field) {
        for (this.bombs.First(); this.bombs.IsNull === false; this.bombs.Next()) {
            if (this.bombs.Value.putPlayer === player) {
                this.bombs.Value.CountUp();
            }
            if (this.bombs.Value.counter >= BombControler.explosionTime) {
                this.bombs.Value.Explosion(this.bombs, field, players);
            }
        }
        for (this.bombs.First(); this.bombs.IsNull === false;) {
            if (this.bombs.Value.IsExplosion) {
                this.bombs.delete();
            }
            else
                this.bombs.Next();
        }
    }
}
BombControler.explosionTime = 3;
//# sourceMappingURL=bomb_controler.js.map