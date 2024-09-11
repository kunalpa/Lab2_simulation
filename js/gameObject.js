class GameObject {
    constructor(imageSrc, canvas) {
        this.x;
        this.y;
        this.x_next;
        this.y_next;
        this.image = new Image();
        this.image.src = imageSrc;
        this.canvas = canvas;

        this.width = 100;
        this.height = 100;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updatePosition() {
        if(this.x + this.x_next >= this.canvas.width - 90 || this.x + this.x_next < 0) {
            this.x_next = -this.x_next;
        }
        if(this.y + this.y_next >= this.canvas.height - 90 || this.y + this.y_next < 0) {
            this.y_next = -this.y_next;
        }
        this.x += this.x_next;
        this.y += this.y_next;
    }

    checkCollision(otherObject) {
        const distance = Math.sqrt(
            Math.pow(this.x - otherObject.x, 2) +
            Math.pow(this.y - otherObject.y, 2)
        );
        return distance < 60; // Collision threshold
    }

    setGame(){
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.x_next = (Math.random() - 0.5) * 10;
        this.y_next = (Math.random() - 0.5) * 10;
    }
}