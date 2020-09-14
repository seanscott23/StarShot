import Obstacle from './obstacles';

export default class Level1 {
  constructor(ctx) {
    this.ctx = ctx;
    this.obstacle1 =  new Obstacle(ctx, {
    height: 60,
    width: 50,
    x: 500,
    y: 100,
  });
   this.obstacle2 = new Obstacle(ctx, {
    height: 60,
    width: 50,
    x: 600,
    y: 100,
  });
   this.obstacle3 = new Obstacle(ctx, {
    height: 60,
    width: 50,
    x: 700,
    y: 100,
  });
    this.obstacles = [this.obstacle1, this.obstacle2, this.obstacle3];
  }

  draw(){
     this.obstacle1.draw();
     this.obstacle2.draw();
     this.obstacle3.draw();
  }


  

}