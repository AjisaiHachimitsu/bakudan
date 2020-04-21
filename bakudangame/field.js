export var fieldStatus;
(function (fieldStatus) {
    fieldStatus[fieldStatus["NONE"] = 0] = "NONE";
    fieldStatus[fieldStatus["BLOCK"] = 1] = "BLOCK";
    fieldStatus[fieldStatus["BOMB"] = 2] = "BOMB";
    fieldStatus[fieldStatus["EXPLOSION"] = 3] = "EXPLOSION";
})(fieldStatus || (fieldStatus = {}));
;
export class Position //コピーメソッドあり
 {
    constructor(x0, y0) {
        this.x = x0;
        this.y = y0;
    }
    get Right() {
        return new Position(this.x + 1, this.y);
    }
    get Left() {
        return new Position(this.x - 1, this.y);
    }
    get Up() {
        return new Position(this.x, this.y - 1);
    }
    get Down() {
        return new Position(this.x, this.y + 1);
    }
    static IsEq(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    Copy() {
        return new Position(this.x, this.y);
    }
}
export default class Field //コピーメソッドあり
 {
    constructor(width0, height0, mainfield0) {
        this.width = width0;
        this.height = height0;
        this.mainfield = [];
        if (mainfield0 == undefined) {
            for (let i = 0; i < this.height; i++) {
                this.mainfield[i] = [];
                for (let j = 0; j < this.width; j++) {
                    if (i % 2 === 0 && j % 2 === 0) {
                        this.mainfield[i][j] = fieldStatus.BLOCK;
                    }
                    else {
                        this.mainfield[i][j] = fieldStatus.NONE;
                    }
                    if (i === 0 || i === this.height - 1 || j === 0 || j === this.width - 1) {
                        this.mainfield[i][j] = fieldStatus.BLOCK;
                    }
                }
            }
        }
        else {
            for (let i = 0; i < this.height; i++) {
                this.mainfield[i] = mainfield0[i].concat();
            }
        }
    }
    GetField(position) {
        return this.mainfield[position.y][position.x];
    }
    PutBomb(position) {
        this.mainfield[position.y][position.x] = fieldStatus.BOMB;
    }
    IsOutOfField(position) {
        return position.x < 0 || position.x > this.width || position.y < 0 || position.y > this.height;
    }
    Explosion(position) {
        this.mainfield[position.y][position.x] = fieldStatus.EXPLOSION;
    }
    EraseExplosion() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.mainfield[i][j] === fieldStatus.EXPLOSION)
                    this.mainfield[i][j] = fieldStatus.NONE;
            }
        }
    }
    copy() {
        return new Field(this.width, this.height, this.mainfield);
    }
}
//# sourceMappingURL=field.js.map