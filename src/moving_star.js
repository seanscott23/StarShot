const Util = require("./util");





function MovingStar(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

const ms = new MovingStar({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00",
});
