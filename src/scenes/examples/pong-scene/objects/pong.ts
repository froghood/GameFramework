import Game from "../../../../game/game";
import { ObjectBase } from "../../../objects/object-base";
import { InputData } from "../../../../game/input";
import { Ball } from "./ball";
import { Paddle } from "./paddle";

export class Pong extends ObjectBase {


    playerPaddle: Paddle;
    opponentPaddle: Paddle;
    ball: Ball;

    constructor() {
        super();
        this.playerPaddle = new Paddle(true);
        this.opponentPaddle = new Paddle(false);
        this.ball = new Ball();
    }

    reset() {
        this.playerPaddle.yPos = Game.renderer.canvasHeight / 2;
        this.opponentPaddle.yPos = Game.renderer.canvasHeight / 2;
        this.ball.xPos = Game.renderer.canvasWidth / 2;
        this.ball.yPos = Game.renderer.canvasHeight / 2;
    }

    override update(time: number, delta: number): void {
        this.playerPaddle.update(time, delta);
        this.opponentPaddle.update(time, delta);
        this.ball.update(time, delta);

        this.ball.checkPaddleCollision(this.playerPaddle, this.opponentPaddle);
    }

    override render(time: number, delta: number): void {
        this.playerPaddle.render(time, delta);
        this.opponentPaddle.render(time, delta);
        this.ball.render(time, delta);
    }

    override input(inputData: InputData): void {
        this.playerPaddle.input(inputData);
    }
}