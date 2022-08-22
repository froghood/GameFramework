import Game from "../../../game/game";
import { Renderer } from "../../../game/graphics/renderer";
import { Sprite } from "../../../game/graphics/sprite";
import { RenderObject } from "../../objects/common/render-object";
import { Scene } from "../../scene";

export class SpriteRenderingScene extends Scene {

    sprites: Sprite[] = []

    constructor() {
        super();

        for (let i = 0; i < 1000; i++) {
            let sprite = Game.renderer.createSprite("texture", "kunai");
            sprite.xPos = Game.renderer.canvasWidth * Math.random();
            sprite.yPos = Game.renderer.canvasHeight * Math.random();
            let scale = 0.25 + 0.25 * Math.random();
            sprite.xScale = scale;
            sprite.yScale = scale;
            this.sprites.push(sprite);
        }
    }

    override init() {
        this.addObject(new RenderObject((time: number, delta: number) => {
            for (let sprite of this.sprites) {
                sprite.rotation += delta / 1000;
                Game.renderer.drawSprite(sprite);
            }
        }));
    }
}