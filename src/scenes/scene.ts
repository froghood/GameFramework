abstract class Scene {

    objects: object[] = [];

    addObject(object: object) { }
    abstract update(time: number, delta: number): void;
    abstract render(time: number, delta: number): void;
}