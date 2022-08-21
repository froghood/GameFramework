import Game from "../../../game";
import { GameObject } from "../../../game-object";
import { InputData, InputType } from "../../../input";

export class TestObject extends GameObject {


    angle: number = 0;
    xPos: number;
    yPos: number;
    width: number = 40;
    height: number = 40;

    inputDir = 0;

    constructor() {
        super();
        this.xPos = Game.width / 2;
        this.yPos = Game.height / 2;
    }

    update(time: number, delta: number): void {
        this.angle += delta / 200 * this.inputDir;
    }
    render(time: number, delta: number): void {
        Game.draw.save();
        Game.draw.translate(this.xPos, this.yPos);
        Game.draw.rotate(this.angle);
        Game.draw.translate(-this.width / 2, -this.height / 2);
        Game.draw.fillStyle = "rgb(255, 0, 100)";
        Game.draw.fillRect(0, 0, this.width, this.height);
        Game.draw.restore();
    }

    input(inputData: InputData): void {
        if (inputData.inputType == InputType.KeyPressed) {
            this.inputDir += ((inputData.keyCode! == "ArrowRight") ? 1 : 0) - ((inputData.keyCode! == "ArrowLeft") ? 1 : 0)
        }

        if (inputData.inputType == InputType.KeyReleased) {
            this.inputDir -= ((inputData.keyCode! == "ArrowRight") ? 1 : 0) - ((inputData.keyCode! == "ArrowLeft") ? 1 : 0)
        }
    }

}