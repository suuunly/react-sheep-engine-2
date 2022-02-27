import {InputMap} from "./InputMap";
import {InputTriggerMap} from "./InputTrigger";

export class InputSystem {
    private static instance: InputSystem;

    private _buttonDownTriggers: InputTriggerMap;

    private constructor(private readonly _maps: InputMap) {
        document.addEventListener("keydown", this.onButtonDown.bind(this));
        this._buttonDownTriggers = {};
    }

    public static Initialize(map: InputMap) {
        if (!InputSystem.instance) {
            InputSystem.instance = new InputSystem(map);
        }
    }

    public static addButtonDownListener(key: string, onTriggered: () => void) {
        InputSystem.instance.registerOnButtonDownListener(key, onTriggered);
    }

    private registerOnButtonDownListener(key: string, onTriggered: () => void) {
        const code = this._maps[key];
        if (!code) {
            console.warn(`Failed to find map for key: ${key}`);
            return;
        }

        if (!this._buttonDownTriggers[code]) {
            this._buttonDownTriggers = {...this._buttonDownTriggers, [code]: []}
        }

        let triggers = this._buttonDownTriggers[code];
        triggers.push(onTriggered);
    }

    private onButtonDown(e: any) {
        for (const [code, triggers] of Object.entries(this._buttonDownTriggers)) {
            if (e.code === code || e.keyCode === code) {
                triggers.forEach(trigger => trigger());
                break;
            }
        }
    }
}