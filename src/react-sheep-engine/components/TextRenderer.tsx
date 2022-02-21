import { ReactNode } from "react";
import { GameComponent } from "../gameobject/GameComponent";

export class TextRenderer extends GameComponent {

    public text: string = "Hello World";

    public Render(): ReactNode {

        const pos = this.transform.position;
        console.log("Hello World", pos);

        return <p style={{
            position: "absolute",
            transform: `translate(${pos.x}, ${pos.y})`
        }}>{this.text}</p>
    }
}