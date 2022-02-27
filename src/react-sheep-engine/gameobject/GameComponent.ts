import {GameObject} from "./GameObject";
import {Transform} from "./transform";
import {ReactNode} from "react";
import {Vector2} from "../core/maths";

export type GameComponentInstanceDefinition<TComponent extends GameComponent> = { new(enabled: boolean, gameObject: GameObject, transform: Transform): TComponent; };

export class GameComponent {

    public constructor(
        private _enabled: boolean,
        public gameObject: Readonly<GameObject>,
        public transform: Transform
    ) {
    }

    public get enabled(): boolean {
        return this._enabled;
    }

    public set enabled(value: boolean) {
        this._enabled = value;
    }

    public Start() {
    }

    public Update(dt: number) {
    }

    public Render(position: Vector2, rotation: number): ReactNode {
        return null;
    }
}