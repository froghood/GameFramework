class Game {

    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;

    private static tickBind: any; //dont like this
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

        this.context = this.canvas.getContext("2d")!;

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

    public static get draw(): CanvasRenderingContext2D { return this.context; }
    public static get width(): number { return this.canvas.width; }
    public static get height(): number { return this.canvas.height; }

    private static tick(time: number) {
        let delta = time - this.previousTime;
        this.previousTime = time;

        let currentScene = this.scenes[this.scenes.length - 1];

        currentScene.update(time, delta);


        this.draw.clearRect(0, 0, this.canvas.width, this.canvas.height)
        currentScene.render(time, delta);

        window.requestAnimationFrame(this.tickBind);
    }

    private static recenter() {
        this.canvas.style.left = `${(innerWidth - this.canvas.width) / 2}px`;
        this.canvas.style.top = `${(innerHeight - this.canvas.height) / 2}px`;
    }
}