class Squidward extends GameObject {
    constructor(canvas) {
        super('../assets/images/squid.png', canvas);
    }

    setGame() {
        this.x = Math.floor(this.canvas.width / 2);
        this.y = Math.floor(this.canvas.height / 2);
        this.x_next = 0;
        this.y_next = 0
    }
}