import { InputData } from "./input";

export abstract class GameObject {
    abstract update(time: number, delta: number): void;
    abstract render(time: number, delta: number): void;
    abstract input(inputData: InputData): void;
}