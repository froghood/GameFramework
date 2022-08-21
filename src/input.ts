import Game from "./game";

export class InputHandler {

    private keyFlags = new Set<string>();

    constructor() {
        window.onkeydown = event => {
            let code = event.code;
            if (this.keyFlags.has(code)) return;
            this.keyFlags.add(code);
            let inputData: InputData = { inputType: InputType.KeyPressed, keyCode: code };
            Game.currentScene.input(inputData);
        }

        window.onkeyup = event => {
            let code = event.code;
            this.keyFlags.delete(code);
            let inputData: InputData = { inputType: InputType.KeyReleased, keyCode: code };
            Game.currentScene.input(inputData);
        }

        window.onblur = _ => {
            for (let code of this.keyFlags.values()) {
                this.keyFlags.delete(code);
                let inputData: InputData = { inputType: InputType.KeyReleased, keyCode: code };
                Game.currentScene.input(inputData);
            }
        }
    }
}

export enum InputType {
    KeyPressed,
    KeyReleased,
    MousePressed,
    MouseReleased,
    MouseMoved
}

export interface InputData {
    readonly inputType: InputType;
    readonly keyCode?: string;
    readonly mouseButton?: number;
    readonly mousePositionX?: number;
    readonly mousePositionY?: number;
}