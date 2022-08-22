import { InputData } from "../../../game/input";
import { ObjectBase } from "../object-base";

/** Encapsulates a render call */
export class RenderObject extends ObjectBase {

    callback: (time: number, delta: number) => void;

    /** render callback */
    constructor(callback: (time: number, delta: number) => void) {
        super();
        this.callback = callback;
    }

    override render(time: number, delta: number): void {
        this.callback(time, delta);
    }
}