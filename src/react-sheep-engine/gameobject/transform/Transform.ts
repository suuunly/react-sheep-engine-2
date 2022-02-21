import { Vector2 } from "../../core/maths/Vector2";

export type Transform = {
    position: Readonly<Vector2>;
    setPosition(value: Vector2): void
    translate(value: Vector2): void
};