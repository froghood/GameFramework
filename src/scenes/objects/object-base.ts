import { InputData } from "../../game/input";

export class ObjectBase {
    update(time: number, delta: number) { }
    render(time: number, delta: number) { }
    input(inputData: InputData) { }
}