import { useState } from "react";
import { Vector2 } from "../../core/maths/Vector2";
import { Transform } from "./Transform";

export function useTransform(): Transform {
    const [position, setPosition] = useState(Vector2.zero);
    const [parent, setParent] = useState<Transform | null>(null);

    const translate = (pos: Vector2) => {
        setPosition(Vector2.add(position, pos));
    }

    return { position, setPosition, translate };
}