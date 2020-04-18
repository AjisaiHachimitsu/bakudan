import { Position, fieldStatus } from "./field.js";
export default class Bomb {
    constructor(putPlayer0) {
        this.isExplosion = false;
        this.counter = 0;
        this.putPlayer = putPlayer0;
        this.position = this.putPlayer.Position;
    }
    CountUp() {
        this.counter++;
    }
    Explosion(bombs, field) {
        if (this.isExplosion)
            return;
        this.isExplosion = true;
        field.Explosion(this.position);
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j <= Bomb.explosionSize; j++) {
                let target = new Position(j * directions[i][0] + this.position.x, j * directions[i][1] + this.position.y);
                //alert([target.x,target.y])
                if (field.GetField(target) === fieldStatus.BLOCK)
                    break;
                if (field.GetField(target) === fieldStatus.BOMB) {
                    for (bombs.First(); bombs.IsNull === false; bombs.Next()) {
                        if (Position.IsEq(bombs.Value.position, target)) {
                            //alert(bombs.Value.isExplosion);
                            bombs.Value.Explosion(bombs, field);
                            break;
                        }
                    }
                }
                field.Explosion(target);
            }
        }
    }
    get IsExplosion() {
        return this.isExplosion;
    }
}
Bomb.explosionSize = 3;
//# sourceMappingURL=bomb.js.map