abstract class Scene {

    private objects: GameObject[] = [];

    addObject(object: GameObject) {
        this.objects.push(object);
    }

    update(time: number, delta: number) {
        for (let object of this.objects) object.update(time, delta);
    }

    render(time: number, delta: number) {
        for (let object of this.objects) object.render(time, delta);
    }
}