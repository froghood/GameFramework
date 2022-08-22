import { Sprite } from "./sprite";
import { SubTexture } from "./sub-texture";

export class Texture {

    name: string;
    subTextureAtlas: { [name: string]: SubTexture } = {}
    image: HTMLImageElement;

    constructor(name: string) {
        this.name = name;
        this.image = new Image();
    }

    async loadAsync(path: string) {
        await Promise.all([
            fetch(path + ".json")
                .then(response => response.json())
                .then(data => {
                    this.subTextureAtlas = data;
                }),
            new Promise<void>(resolve => {
                this.image.onload = () => resolve();
                this.image.src = path + ".png"
            })
        ]);
    }

}