import { GameObject } from "../game-object";
import { InputData } from "../input";

export class Scene {

    private objects: GameObject[] = [];

    addObject(object: GameObject): GameObject {
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