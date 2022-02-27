import {ReactNode} from "react";
import {GameComponent} from "../gameobject/GameComponent";
import {Vector2} from "../core/maths";

export class TextRenderer extends GameComponent {

    public text: string = "Hello World";

    public Render(position: Vector2, rotation: number): ReactNode {
        return <p style={{
            position: "absolute",
            transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`
        }}>{this.text}</p>
    }
}