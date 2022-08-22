import Game from "../../../game/game";
import { InputData, InputType } from "../../../game/input";
import { InputObject } from "../../objects/common/input-object";
import { RenderObject } from "../../objects/common/render-object";
import { PongScene } from "../pong-scene/pong-scene";
import { Scene } from "../../scene";

export class PongMenuScene extends Scene {
    constructor() {
        super();

        this.addObject(new RenderObject((time: number, delta: number) => {
            Game.renderer.context.font = '48px serif';
            Game.renderer.context.fillStyle = "rgb(255, 255, 255)";
            Game.renderer.context.textAlign = "center";
            Game.renderer.context.fillText("Pong", Game.renderer.canvasWidth / 2, Game.renderer.canvasHeight / 2);

            Game.renderer.context.font = '24px serif';
            Game.renderer.context.fillText("press enter to play!!", Game.renderer.canvasWidth / 2, Game.renderer.canvasHeight / 2 + 40);
        }));

        this.addObject(new InputObject((inputData: InputData) => {
            if (inputData.inputType == InputType.KeyPressed && inputData.keyCode == "Enter") {
                Game.pushScene(new PongScene());
            }
        }));
    }
}