class Game {

    private static canvas: HTMLCanvasElement;
    private static tickBind: any;
    private static previousTime: number;
    private static scenes: Scene[] = [];

    static {
        this.tickBind = this.tick.bind(this)
        this.previousTime = 0;
    }

    public static init() {
        let body = document.body;
        body.style.margin = "0";
        body.style.backgroundColor = `rgb(${30}, ${30}, ${30})`

        this.canvas = body.appendChild(document.createElement("canvas"));
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.style.position = "absolute";
        this.canvas.style.backgroundColor = `rgb(${0}, ${0}, ${0})`;

        addEventListener("resize", _ => this.recenter())
        this.recenter();

    }

    public static start() {
        window.requestAnimationFrame(this.tickBind);
    }


    public static pushScene(scene: Scene) {
        this.scenes.push(scene);
    }

    public static popScene() {
        this.scenes.pop();
    }

    private static tick(time: number) {
        let delta = time - this.previousTime;
        this.previousTime = time;
        let currentScene = this.scenes[this.scenes.length - 1];
        currentScene.update(time, delta);
        currentScene.render(time, delta);
        window.requestAnimationFrame(this.tickBind);
    }

    private static recenter() {
        this.canvas.style.left = `${(innerWidth - this.canvas.width) / 2}px`;
        this.canvas.style.top = `${(innerHeight - this.canvas.height) / 2}px`;
    }
}