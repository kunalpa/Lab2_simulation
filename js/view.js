class View {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    render(model) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        model.squid.draw(this.context);
        
        // draw spongebobs and patricks
        for (let i=0; i<model.enemies.length; i++) {
            model.enemies[i].draw(this.context);
        }

        // Draw Hearts
        for (let i=0; i<model.hearts; i++) {
            const heartSize = {x: 40, y: 50};
            this.context.drawImage(model.heartImg, this.canvas.width - (1+i) * heartSize.x, 10, heartSize.x, heartSize.y);
        }
    }
}
