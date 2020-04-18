import Bomb from "./bomb.js";
import List from "./list.js";
import { fieldStatus } from "./field.js";
import GameManager from "./game_manager.js";
export default class BombControler {
    constructor(field) {
        this.bombs = new List();
        BombControler.imagePath;
        this.field = field;
    }
    PutBomb(putPlayer) {
        if (this.field.GetField(putPlayer.Position) === fieldStatus.BOMB)
            return false;
        this.bombs.add(new Bomb(putPlayer));
        this.field.PutBomb(putPlayer.Position);
        return true;
    }
    get Bombs() {
        return this.bombs;
    }
    ChangePlayer(player) {
        for (this.bombs.First(); this.bombs.IsNull === false;) {
            if (this.bombs.Value.putPlayer === player) {
                this.bombs.Value.CountUp();
            }
            if (this.bombs.Value.counter >= BombControler.explosionTime) {
                this.field.ElaseBomb(this.bombs.Value.position);
                this.bombs.delete();
            }
            else
                this.bombs.Next();
        }
        GameManager.Draw();
    }
}
BombControler.explosionSize = 3;
BombControler.explosionTime = 3;
BombControler.imagePath = "img/bomb/bomb_002.png";
//# sourceMappingURL=bomb_controler.js.map