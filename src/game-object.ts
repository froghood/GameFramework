abstract class GameObject {
    abstract update(time: number, delta: number): void;
    abstract render(time: number, delta: number): void;
}