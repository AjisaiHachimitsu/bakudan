import { fieldStatus } from "./field.js";
export var Direction;
(function (Direction) {
    Direction[Direction["TOLEFT"] = 0] = "TOLEFT";
    Direction[Direction["TORIGHT"] = 1] = "TORIGHT";
    Direction[Direction["TOUP"] = 2] = "TOUP";
    Direction[Direction["TODOWN"] = 3] = "TODOWN";
})(Direction || (Direction = {}));
;
export default class Player {
    constructor(img, x0, y0) {
        this.imagePath = img;
        this.x = x0;
        this.y = y0;
    }
    move(direction, field) {
        let dir = new Array(2);
        switch (direction) {
            case Direction.TODOWN:
                dir = [1, 0];
                break;
            case Direction.TOUP:
                dir = [-1, 0];
                break;
            case Direction.TORIGHT:
                dir = [0, 1];
                break;
            case Direction.TOLEFT:
                dir = [0, -1];
                break;
        }
        if (field.GetField(this.y + dir[0], this.x + dir[1]) != fieldStatus.NONE) {
            return false;
        }
        this.y += dir[0];
        this.x += dir[1];
        return true;
    }
}
//# sourceMappingURL=player.js.map