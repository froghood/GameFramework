import Game from "../../../../game/game";
import { ObjectBase } from "../../../objects/object-base";
import { InputData, InputType } from "../../../../game/input";

export class TestObject extends ObjectBase {


    angle: number = 0;
    xPos: number;
    yPos: number;
    width: number = 40;
    height: number = 40;

    inputDir = 0;

    constructor() {
        super();
        this.xPos = Game.renderer.canvasWidth / 2;
        this.yPos = Game.renderer.canvasHeight / 2;
    }

    override update(time: number, delta: number): void {
        this.angle += delta / 200 * this.inputDir;
    }

    override render(time: number, delta: number): void {
        Game.renderer.context.save();
        Game.renderer.context.translate(this.xPos, this.yPos);
        Game.renderer.context.rotate(this.angle);
        Game.renderer.context.translate(-this.width / 2, -this.height / 2);
        Game.renderer.context.fillStyle = "rgb(255, 0, 100)";
        Game.renderer.context.fillRect(0, 0, this.width, this.height);
        Game.renderer.context.restore();
    }

    override input(inputData: InputData): void {
        if (inputData.inputType == InputType.KeyPressed) {
            this.inputDir += ((inputData.keyCode! == "ArrowRight") ? 1 : 0) - ((inputData.keyCode! == "ArrowLeft") ? 1 : 0)
        }

        if (inputData.inputType == InputType.KeyReleased) {
            this.inputDir -= ((inputData.keyCode! == "ArrowRight") ? 1 : 0) - ((inputData.keyCode! == "ArrowLeft") ? 1 : 0)
        }
    }

}