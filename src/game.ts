import { InputHandler } from "./input";
import { Scene } from "./scenes/scene";

export class Game {

    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;

    private static tickBind: any; //dont like this
    private static previousTime: number;
    private static scenes: Scene[] = [];

    private static inputHandler: InputHandler;

    static {
        this.tickBind = this.tick.bind(this)
        this.previousTime = 0;
        this.inputHandler = new InputHandler();
    }

    public static create(width: number, height: number) {
        let body = document.body;
        body.style.margin = "0";
        body.style.backgroundColor = `rgb(30, 30, 30)`

        this.canvas = body.appendChild(document.createElement("canvas"));
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.position = "absolute";
        this.canvas.style.backgroundColor = "rgb(0, 0, 0)";

        this.context = this.canvas.getContext("2d")!;

        window.onresize = _ => this.recenter();
        this.recenter();
    }

    public static start() { window.requestAnimationFrame(this.tickBind); }


    public static pushScene(scene: Scene) {
        this.scenes.push(scene);
    }

    public static popScene() {
        this.scenes.pop();
    }

    public static get draw(): CanvasRenderingContext2D { return this.context; }
    public static get width(): number { return this.canvas.width; }
    public static get height(): number { return this.canvas.height; }
    public static get currentScene(): Scene { return this.scenes[this.scenes.length - 1]; }

    private static tick(time: number) {
        let delta = time - this.previousTime;
        this.previousTime = time;

        this.currentScene.update(time, delta);

        this.draw.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.currentScene.render(time, delta);

        window.requestAnimationFrame(this.tickBind);
    }

    private static recenter() {
        this.canvas.style.left = `${(window.innerWidth - this.canvas.width) / 2}px`;
        this.canvas.style.top = `${(window.innerHeight - this.canvas.height) / 2}px`;
    }

    private static initInput() {
        window.onkeydown = event => {

        }

        window.onkeyup = event => {

        }
    }
}