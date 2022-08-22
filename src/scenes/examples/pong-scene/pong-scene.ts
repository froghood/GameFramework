import Game from "../../../game/game";
import { Scene } from "../../scene";
import { Ball } from "./objects/ball";
import { Paddle } from "./objects/paddle";
import { Pong } from "./objects/pong";

export class PongScene extends Scene {
    constructor() {
        super();
        let pong = new Pong();
        this.addObject(pong);
        pong.reset();
    }
}