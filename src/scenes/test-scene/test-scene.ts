import { Scene } from "../scene";
import { TestObject } from "./objects/test-object";

export class TestScene extends Scene {
    constructor() {
        super();
        this.addObject(new TestObject());
    }
}