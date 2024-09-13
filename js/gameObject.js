class GameObject {
    constructor(imageSrc, canvas, squid_ref=NaN) {
        this.x;
        this.y;
        this.image = new Image();
        this.image.src = imageSrc;
        this.canvas = canvas;
        this.squid_ref = squid_ref;
        this.speed = 2;

        this.width = 100;
        this.height = 100;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updatePosition() {
        // this is a non-squidward game object
        var dx = this.squid_ref.x - this.x;
        var dy = this.squid_ref.y - this.y;
        var angle = Math.atan2(dy, dx);
        var next_x = this.x + Math.cos(angle) * this.speed;
        var next_y = this.y + Math.sin(angle) * this.speed;

        // bounce logic
        if (next_x <= 0) {
            this.x = 0;
            this.speed = -this.speed;
        } else if (next_x + this.width >= this.canvas.width) {
            this.x = this.canvas.width - this.width;
            this.speed = -this.speed;
        } else {
            this.x = next_x;
        }
        if (next_y <= 0) {
            this.y = 0;
            this.speed = -this.speed;
        } else if (next_y + this.height >= this.canvas.height) {
            this.y = this.canvas.height - this.height;
            this.speed = -this.speed;
        } else {
            this.y = next_y;
        }
    }

    checkCollision(otherObject, threshold=60) {
        const distance = Math.sqrt(
            Math.pow(this.x - otherObject.x, 2) +
            Math.pow(this.y - otherObject.y, 2)
        );
        return distance < threshold;
    }

    setGame(){
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
    }
}