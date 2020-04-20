import Bomb from "./bomb.js";
import List from "./list.js";
import { fieldStatus } from "./field.js";
//import GameManager from "./game_manager.js";
export default class BombControler {
    //private readonly field: Field;
    constructor(field) {
        this.bombs = new List();
        //this.field = field;
    }
    PutBomb(putPlayer, field) {
        if (field.GetField(putPlayer.Position) === fieldStatus.BOMB)
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