import { ObjectBase } from "./objects/object-base";
import { InputData } from "../game/input";

export class Scene {

    private objects: ObjectBase[] = [];

    init() { }

    addObject(object: ObjectBase): ObjectBase {
        this.objects.push(object);
        return object;
    }

    update(time: number, delta: number) {
        for (let object of this.objects) object.update(time, delta);
    }

    render(time: number, delta: number) {
        for (let object of this.objects) object.render(time, delta);
    }

    input(inputData: InputData) {
        for (let object of this.objects) object.input(inputData);
    }
}