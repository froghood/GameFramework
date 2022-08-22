import Game from "../../../../game/game";
import { ObjectBase } from "../../../objects/object-base"
import { InputData } from "../../../../game/input";
import { Paddle } from "./paddle";

export class Ball extends ObjectBase {


    width = 20;
    height = 20;
    xPos = 0;
    yPos = 0;
    xVel = -1;
    yVel = -2;
    angle = 2;
    speed = 1;

    constructor() {
        super()
    }

    checkPaddleCollision(playerPaddle: Paddle, opponentPaddle: Paddle) {
        if (this.xPos + this.width > playerPaddle.xPos &&
            this.xPos < playerPaddle.xPos + playerPaddle.width &&
            this.yPos + this.height > playerPaddle.yPos &&
            this.yPos < playerPaddle.yPos + playerPaddle.height) {
            this.xVel = -this.xVel;
            this.xPos = playerPaddle.xPos + playerPaddle.width;
        }

        if (this.xPos + this.width > opponentPaddle.xPos &&
            this.xPos < opponentPaddle.xPos + opponentPaddle.width &&
            this.yPos + this.height > opponentPaddle.yPos &&
            this.yPos < opponentPaddle.yPos + opponentPaddle.height) {
            this.xVel = -this.xVel;
            this.xPos = opponentPaddle.xPos - this.width;
        }
    }

    override update(time: number, delta: number): void {
        this.xPos += this.xVel;
        this.yPos += this.yVel;

        if (this.yPos < this.height / 2) {
            this.yVel = -this.yVel;
            this.yPos = this.height / 2;
        }

        if (this.yPos > Game.renderer.canvasHeight - this.height / 2) {
            this.yVel = -this.yVel;
            this.yPos = Game.renderer.canvasHeight - this.height / 2;
        }
    }

    override render(time: number, delta: number): void {
        Game.renderer.context.save();
        Game.renderer.context.translate(this.xPos, this.yPos);
        Game.renderer.context.translate(-this.width / 2, -this.height / 2);
        Game.renderer.context.fillStyle = "rgb(255, 255, 255)";
        Game.renderer.context.fillRect(0, 0, this.width, this.height);
        Game.renderer.context.restore();
    }

    override input(inputData: InputData): void { }

}