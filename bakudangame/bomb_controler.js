import Bomb from "./bomb.js";
import List from "./list.js";
import { fieldStatus } from "./field.js";
export default class BombControler {
    static start(field) {
        this.bombs = new List();
        this.imagePath = "img/bomb/bomb_002.png";
        this.field = field;
    }
    static PutBomb(putPlayer) {
        if (this.field.GetField(putPlayer.Position) === fieldStatus.BOMB)
            return false;
        this.bombs.add(new Bomb(putPlayer));
        this.field.PutBomb(putPlayer.Position);
        return true;
    }
    static GetBombs() {
        return this.bombs;
    }
}
BombControler.explosionTime = 3;
//# sourceMappingURL=bomb_controler.js.map