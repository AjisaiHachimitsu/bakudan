export var fieldStatus;
(function (fieldStatus) {
    fieldStatus[fieldStatus["NONE"] = 0] = "NONE";
    fieldStatus[fieldStatus["BLOCK"] = 1] = "BLOCK";
    fieldStatus[fieldStatus["BOMB"] = 2] = "BOMB";
    fieldStatus[fieldStatus["EXPLOSION"] = 3] = "EXPLOSION";
})(fieldStatus || (fieldStatus = {}));
;
export default class Field {
    constructor(width0, height0) {
        this.width = width0;
        this.height = height0;
        this.mainfield = [];
        for (let i = 0; i < this.height; i++) {
            this.mainfield[i] = [];
            for (let j = 0; j < this.width; j++) {
                if (i % 2 == 0 && j % 2 == 0) {
                    this.mainfield[i][j] = fieldStatus.BLOCK;
                }
                else {
                    this.mainfield[i][j] = fieldStatus.NONE;
                }
                if (i == 0 || i == this.height - 1 || j == 0 || j == this.width - 1) {
                    this.mainfield[i][j] = fieldStatus.BLOCK;
                }
            }
        }
    }
    GetField(i, j) {
        return this.mainfield[i][j];
    }
}
//# sourceMappingURL=field.js.map