import { Sprite } from "./sprite";
import { Texture } from "./texture";

export class Renderer {


    private canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    private textures: { [name: string]: Texture } = {};
    private spriteQueue: Sprite[] = [];

    constructor(canvasWidth: number, canvasHeight: number) {
        let body = document.body;
        body.style.margin = "0";
        body.style.backgroundColor = `rgb(30, 30, 30)`

        this.canvas = body.appendChild(document.createElement("canvas"));
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.position = "absolute";
        this.canvas.style.backgroundColor = "rgb(0, 0, 0)";

        this._context = this.canvas.getContext("2d")!;
    }

    public createSprite(textureName: string, subTextureName: string): Sprite {
        let subTexture = this.textures[textureName].subTextureAtlas[subTextureName];
        return { textureName: textureName, subTexture: subTexture, xPos: 0, yPos: 0, rotation: 0, xScale: 1, yScale: 1, xOrigin: 0, yOrigin: 0 }
    }

    public drawSprite(sprite: Sprite) {
        this.spriteQueue.push(sprite);
    }


    public async loadSpriteSheetAsync(sheetName: string, path: string) {
        let spriteSheet = new Texture(sheetName);
        await spriteSheet.loadAsync(path);
        this.textures[sheetName] = spriteSheet;
    }

    /** idk if this actually frees memory lol! */
    public unloadTexture(name: string) {
        delete this.textures[name];
    }

    public centerCanvas() {
        this.canvas.style.left = `${(window.innerWidth - this.canvas.width) / 2}px`;
        this.canvas.style.top = `${(window.innerHeight - this.canvas.height) / 2}px`;
    }

    public renderSprites() {
        while (this.spriteQueue.length > 0) {
            let sprite = this.spriteQueue.shift()!;
            this.context.save();

            this.context.translate(sprite.xPos, sprite.yPos);
            this.context.rotate(sprite.rotation);
            this.context.scale(sprite.xScale, sprite.yScale);
            this.context.translate(-sprite.xOrigin, -sprite.yOrigin);

            this.context.drawImage(
                this.textures[sprite.textureName].image,
                sprite.subTexture.xPos,
                sprite.subTexture.yPos,
                sprite.subTexture.width,
                sprite.subTexture.height,
                -sprite.subTexture.xOrigin,
                -sprite.subTexture.yOrigin,
                sprite.subTexture.width,
                sprite.subTexture.height
            )


            this.context.restore();
        }
    }

    public clear() { this._context.clearRect(0, 0, this.canvas.width, this.canvas.height); }

    public get context() { return this._context; }
    public get canvasWidth(): number { return this.canvas.width; }
    public get canvasHeight(): number { return this.canvas.height; }
}