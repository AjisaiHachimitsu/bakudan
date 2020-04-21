import { fieldStatus } from "./field.js";
export var Direction;
(function (Direction) {
    Direction[Direction["TODOWN"] = 0] = "TODOWN";
    Direction[Direction["TOUP"] = 1] = "TOUP";
    Direction[Direction["TOLEFT"] = 2] = "TOLEFT";
    Direction[Direction["TORIGHT"] = 3] = "TORIGHT";
})(Direction || (Direction = {}));
;
export default class Player {
    constructor(img, position0, isCpu = false) {
        this.isKilled = false;
        this.imagePath = img;
        this.position = position0;
        this.isCpu = isCpu;
    }
    Copy() {
        let a = new Player(this.imagePath, this.position.Copy(), this.isCpu);
        a.isKilled = this.isKilled;
        return a;
    }
    CheckMove(direction, field) {
        let target;
        switch (direction) {
            case Direction.TODOWN:
                target = this.position.Down;
                break;
            case Direction.TOUP:
                target = this.position.Up;
                break;
            case Direction.TORIGHT:
                target = this.position.Right;
                break;
            case Direction.TOLEFT:
                target = this.position.Left;
                break;
        }
        return field.GetField(target) !== fieldStatus.NONE;
    }
    Move(direction, field) {
        let target;
        switch (direction) {
            case Direction.TODOWN:
                target = this.position.Down;
                break;
            case Direction.TOUP:
                target = this.position.Up;
                break;
            case Direction.TORIGHT:
                target = this.position.Right;
                break;
            case Direction.TOLEFT:
                target = this.position.Left;
                break;
        }
        if (field.GetField(target) !== fieldStatus.NONE) {
            return false;
        }
        this.position = target;
        return true;
    }
    CheckPutBomb(field, bombControler) {
        return bombControler.CheckPutBomb(this, field);
    }
    PutBomb(field, bombControler) {
        return bombControler.PutBomb(this, field);
    }
    get Position() {
        return this.position;
    }
    get IsKilled() {
        return this.isKilled;
    }
    Killed(killPlayer) {
        this.isKilled = true;
    }
}
//# sourceMappingURL=player.js.map