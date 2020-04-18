import Bomb from "./bomb.js";
import List from "./list.js";
import { fieldStatus } from "./field.js";
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
}
BombControler.explosionTime = 3;
BombControler.imagePath = "img/bomb/bomb_002.png";
//# sourceMappingURL=bomb_controler.js.map