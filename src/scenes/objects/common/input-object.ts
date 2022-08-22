import { InputData } from "../../../game/input";
import { ObjectBase } from "../object-base";

/** Encapsulates an input call */
export class InputObject extends ObjectBase {

    callback: (inputData: InputData) => void;

    /** input callback */
    constructor(callback: (inputData: InputData) => void) {
        super();
        this.callback = callback;
    }

    override input(inputData: InputData): void {
        this.callback(inputData);
    }
}