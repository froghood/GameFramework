import { SubTexture } from "./sub-texture";

export interface Sprite {
    textureName: string;
    subTexture: SubTexture;
    xPos: number;
    yPos: number;
    rotation: number;
    xScale: number;
    yScale: number;
    xOrigin: number;
    yOrigin: number;
}