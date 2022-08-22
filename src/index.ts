import Game from "./game/game";
import { PongMenuScene } from "./scenes/examples/pong-menu-scene/pong-menu-scene";
import { PongScene } from "./scenes/examples/pong-scene/pong-scene";
import { SpriteRenderingScene } from "./scenes/examples/sprite-rendering/sprite-rendering-scene";
import { TestScene } from "./scenes/examples/test-scene/test-scene";

Game.create(854, 480);
Game.renderer.loadSpriteSheetAsync("texture", "assets/sprites/texture").then(() => {
    Game.pushScene(new SpriteRenderingScene());
    Game.start();
});
