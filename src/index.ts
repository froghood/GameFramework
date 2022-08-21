import Game from "./game";
import { TestScene } from "./scenes/test-scene/test-scene";

Game.create(854, 480);
Game.pushScene(new TestScene());
Game.start();