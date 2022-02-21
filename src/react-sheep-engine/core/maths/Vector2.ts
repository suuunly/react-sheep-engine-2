export class Vector2 {

    public static get zero() {
        return new Vector2(0, 0);
    }

    public static get one() {
        return new Vector2(1, 1);
    }

    public static add(a: Vector2, b: Vector2) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    public static subtract(a: Vector2, b: Vector2) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    constructor(public x: number, public y: number) { }
}