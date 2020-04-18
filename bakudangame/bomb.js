export default class Bomb {
    constructor(putPlayer0) {
        this.counter = 0;
        this.putPlayer = putPlayer0;
        this.position = this.putPlayer.Position;
    }
    CountUp() {
        this.counter++;
    }
}
//# sourceMappingURL=bomb.js.map