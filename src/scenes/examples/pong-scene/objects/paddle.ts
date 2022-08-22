import Game from "../../../../game/game";
import { ObjectBase } from "../../../objects/object-base";
import { InputData, InputType } from "../../../../game/input";

export class Paddle extends ObjectBase {


    isPlayer: boolean;
    yPos = 0;
    xPos;
    inputDir = 0;
    speed = 0.5;

    width = 20;
    height = 80;


    constructor(isPlayer: boolean) {
        super();
        this.isPlayer = isPlayer;
        this.xPos = this.isPlayer ? 20 : Game.renderer.canvasWidth - 20
    }

    override update(time: number, delta: number): void {
        this.yPos += this.inputDir * this.speed * delta
    }

    override render(time: number, delta: number): void {
        Game.renderer.context.save();

        Game.renderer.context.translate(this.xPos, this.yPos);
        Game.renderer.context.translate(-this.width / 2, -this.height / 2);
        Game.renderer.context.fillStyle = "rgb(255, 255, 255)";
        Game.renderer.context.fillRect(0, 0, this.width, this.height);

        Game.renderer.context.restore();
    }

    override input(inputData: InputData): void {
        if (!this.isPlayer) return;

        if (inputData.inputType == InputType.KeyPressed) {
            this.inputDir += (inputData.keyCode == "ArrowDown" ? 1 : 0) - (inputData.keyCode == "ArrowUp" ? 1 : 0);
        }

        if (inputData.inputType == InputType.KeyReleased) {
            this.inputDir -= (inputData.keyCode == "ArrowDown" ? 1 : 0) - (inputData.keyCode == "ArrowUp" ? 1 : 0);
        }

    }

}