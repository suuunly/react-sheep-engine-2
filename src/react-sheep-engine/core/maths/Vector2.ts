export class Vector2 {

    constructor(public x: number, public y: number) {
    }

    public static get zero(): Vector2 {
        return new Vector2(0, 0);
    }

    public static get one(): Vector2 {
        return new Vector2(1, 1);
    }

    public static get right(): Vector2 {
        return new Vector2(1, 0);
    }

    public static get left(): Vector2 {
        return new Vector2(-1, 0);
    }

    public static get up(): Vector2 {
        return new Vector2(0, 1);
    }

    public static get down(): Vector2 {
        return new Vector2(0, -1);
    }

    public static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    public static subtract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    public static multiply(v: Vector2, scalar: number): Vector2 {
        return new Vector2(v.x * scalar, v.y * scalar);
    }

    public add(rhs: Vector2) {
        this.x += rhs.x;
        this.y += rhs.y;

        return this;
    }

    public subtract(rhs: Vector2) {
        this.x -= rhs.x;
        this.y -= rhs.y;

        return this;
    }

    public multiply(rhs: number) {
        this.x *= rhs;
        this.y *= rhs;

        return this;
    }
}