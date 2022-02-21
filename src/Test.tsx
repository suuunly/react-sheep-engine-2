import { useEffect } from "react";
import { TextRenderer } from "./react-sheep-engine/components/TextRenderer";
import { Vector2 } from "./react-sheep-engine/core/maths/Vector2";
import { GameComponent } from "./react-sheep-engine/gameobject/GameComponent";
import { ReactGameObject } from "./react-sheep-engine/gameobject/ReactGameObject";
import { useGameLoop } from "./react-sheep-engine/loop";

export function Test() {

    const loop = useGameLoop();

    // Start the game
    useEffect(() => {
        loop.start();
    }, []);

    return (
        <ReactGameObject active components={[PlayerController, TextRenderer]}>
        </ReactGameObject>
    );
}

export class PlayerController extends GameComponent {

    public Start(): void {
        this.transform.setPosition(new Vector2(5, 0));
        document.addEventListener("keyup", this.onPress.bind(this));
    }

    private onPress(e: any) {
        if (e.code === "ArrowRight") {
            this.transform.translate(new Vector2(1, 0));
        }
    }

    public Update(dt: number): void {
    }
}

export class Enemy extends GameComponent {

    public kill() {
        console.log("Enemy Killed!");
    }
}

