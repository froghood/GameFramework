import { InputData } from "../../../game/input";
import { ObjectBase } from "../object-base";

/** Encapsulates an update call */
export class UpdateObject extends ObjectBase {

    callback: (time: number, delta: number) => void;

    /** update callback */
    constructor(callback: (time: number, delta: number) => void) {
        super();
        this.callback = callback;
    }

    override update(time: number, delta: number): void {
        this.callback(time, delta);
    }
}