class Particle {
    constructor(ctx, w, h, grid, d){
        this.ctx = ctx;
        this.detail = d;
        this.w = w;
        this.h = h;
        this.grid = grid;
        this.x = Math.random() * this.w;
        this.y =  0;
        this.speed = 0;
        this.velocity = Math.random() * 0.7;
        this.size = Math.random() * 2 + .1;
    }
    update () {
        this.speed = this.grid[Math.floor(this.y / this.detail)][Math.floor(this.x / this.detail)];
        let movement = (2.5 - this.speed) + this.velocity;
        this.y += movement;
        if (this.y >= this.h) {
            this.y = 0;
            this.x = Math.random() * this.w;
        }
        //console.log(this.x += movement)
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export default Particle;