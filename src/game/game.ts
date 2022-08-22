import { InputHandler } from "./input";
import { Scene } from "../scenes/scene";
import { Renderer } from "./graphics/renderer";

export default class Game {


    public static renderer: Renderer;

    private static tickBind: any; //dont like this
    private static previousTime: number;
    private static scenes: Scene[] = [];

    private static inputHandler: InputHandler;

    static {

        this.tickBind = this.tick.bind(this)
        this.previousTime = 0;
        this.inputHandler = new InputHandler();
    }

    public static create(canvasWidth: number, canvasHeight: number) {
        this.renderer = new Renderer(canvasWidth, canvasHeight);

        window.onresize = _ => this.renderer.centerCanvas();
        this.renderer.centerCanvas();
    }

    public static start() { window.requestAnimationFrame(this.tickBind); }


    public static pushScene(scene: Scene) {
        this.scenes.push(scene);
        scene.init();
    }

    public static popScene() {
        this.scenes.pop();
    }

    public static get currentScene(): Scene { return this.scenes[this.scenes.length - 1]; }

    private static tick(time: number) {
        let delta = time - this.previousTime;
        this.previousTime = time;

        this.currentScene.update(time, delta);

        this.renderer.clear();
        this.currentScene.render(time, delta);
        this.renderer.renderSprites();

        window.requestAnimationFrame(this.tickBind);
    }
}
