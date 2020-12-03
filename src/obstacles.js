
export default class Obstacle {
  constructor(ctx, options){
    this.ctx = ctx;
    this.rectangle2 = {
       height: options.height,
       width: options.width,
       x: options.x,
       y: options.y,
     };
  }

  draw() {
      this.ctx.rect(this.rectangle2.x, this.rectangle2.y, this.rectangle2.width, this.rectangle2.height);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
   }
}



