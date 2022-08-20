class TestObject extends GameObject {

    angle: number = 0;
    xPos: number;
    yPos: number;
    width: number = 40;
    height: number = 40;

    constructor() {
        super();
        this.xPos = Game.width / 2;
        this.yPos = Game.height / 2;
    }

    update(time: number, delta: number): void {
        this.angle += delta / 1000;
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

}