class Model {
    constructor(canvas) {
        this.canvas = canvas;
        this.squid;
        this.sponge;
        this.star;
        this.loadObjects();
        this.restartGame();
        this.loadImages();
    }

    loadObjects() {
        this.squid = new Squidward(canvas);
        this.sponge = new Spongebob(canvas, this.squid);
        this.star = new Patrick(canvas, this.squid);
    }

    loadImages() {
        // will add to this next assignment
        this.heartImg = new Image();
        this.heartImg.src = '../assets/images/heart.png';
    }

    updatePositions() {
        this.sponge.updatePosition();
        this.star.updatePosition();
        this.squid.updatePosition();

        // Check for collisions
        if (this.star.checkCollision(this.squid) || this.sponge.checkCollision(this.squid)) {
            this.hearts--;
            if (this.hearts <= 0) {
                // Will change this in the future
                // For now, just resets the hearts
                this.restartGame();
            }
            this.resetGame();
        }
    }

    resetGame() {
        this.squid.setGame();
        this.sponge.setGame();
        while (this.sponge.checkCollision(this.squid) || this.sponge.x >= this.canvas.width - 90 || this.sponge.y >= this.canvas.height - 90) {
            this.sponge.setGame();
        }
        this.star.setGame();
        while (this.star.checkCollision(this.squid) || this.star.x >= this.canvas.width - 90 || this.star.y >= this.canvas.height - 90) {
            this.star.setGame();
        }
    }

    restartGame() {
        this.resetGame();
        this.hearts = 3;
    }

}