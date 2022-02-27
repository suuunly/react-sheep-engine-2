import {useEffect} from "react";
import {TextRenderer} from "./react-sheep-engine/components/TextRenderer";
import {Vector2} from "./react-sheep-engine/core/maths";
import {GameComponent} from "./react-sheep-engine/gameobject/GameComponent";
import {ReactGameObject} from "./react-sheep-engine/gameobject/ReactGameObject";
import {useGameLoop} from "./react-sheep-engine/loop";
import {InputSystem} from "./react-sheep-engine/input";

export function Test() {

    const loop = useGameLoop();

    // Start the game
    useEffect(() => {
        loop.start();
    }, []);

    return (
        <ReactGameObject transform={{position: Vector2.right.multiply(20)}} active
                         components={[PlayerController, TextRenderer]}>
        </ReactGameObject>
    );
}

export class PlayerController extends GameComponent {

    public Start(): void {
        InputSystem.addButtonDownListener("left", this.onGoLeft.bind(this));
        InputSystem.addButtonDownListener("right", this.onGoRight.bind(this));
        InputSystem.addButtonDownListener("rotate-cw", this.onRotateCw.bind(this));
        InputSystem.addButtonDownListener("rotate-ccw", this.onRotateCcw.bind(this));
    }

    private onGoLeft() {
        this.transform.translate(Vector2.left.multiply(8));
    }

    private onGoRight() {
        this.transform.translate(Vector2.right.multiply(8));
    }

    private onRotateCw() {
        this.transform.rotate(8);
    }

    private onRotateCcw() {
        console.log("hello");
        this.transform.rotate(-8);
    }
}

export class Enemy extends GameComponent {

    public kill() {
        console.log("Enemy Killed!");
    }
}

