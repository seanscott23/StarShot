// const Game = require("./game");
// const GameView = require("./game_view");

// document.addEventListener("DOMContentLoaded", function () {
  // let rectangle, controller;
  let canvas = document.querySelector("canvas");


  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");


   const rectangle = {
    height: 30,
    jumping: true,
    width: 30,
    x: 100,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
  };

  const controller = {
    left: false,
    right: false,
    up: false,
    keyListener:function(event){

      let key_state = (event.type == "keydown") ? true : false;
      switch(event.keyCode){
          case 37:
            controller.left = key_state;
          break;
          case 38:
            controller.up = key_state;
          break;
          case 39:
            controller.right = key_state;
          break;
      }
    }
  };
  


  const loop = function () {
    if (controller.up && rectangle.jumping == false) {
      rectangle.y_velocity -= 20;
      rectangle.jumping = true;
    }

    if (controller.left) {
      rectangle.x_velocity -= 0.5;
    }

    if (controller.right) {
      rectangle.x_velocity += 0.5;
    }

    rectangle.y_velocity += 1.5;
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9;
    rectangle.y_velocity *= 0.9;

    if (rectangle.y > 180 - 16 - 30) {
      rectangle.jumping = false;
      rectangle.y = 180 - 16 - 30;
      rectangle.y_velocity = 0;
    }

    if(rectangle.x < 30){
      rectangle.x_velocity = -rectangle.x_velocity;
    }else if(rectangle.x > 320){
      rectangle.x_velocity = -rectangle.x_velocity;
    }
    // if (rectangle.x  > 320 || rectangle.x < -30) {
    //   recatangle.x_velocity = -rectangle.x_velocity;
    // }

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 160)
    ctx.lineTo(window.innerWidth, 160)
    ctx.stroke();

    window.requestAnimationFrame(loop)
  };

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);




















//   let x = 100;
//   let y = 660;
//   let dx = (Math.random - 0.5) * 8;
//   let dy = (Math.random - 0.5) * 8;
//   let radius = 30;

//   function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, innerWidth, innerHeight)
//     ctx.lineWidth = 5;
//      ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false)
//     ctx.fill();
//     ctx.fillStyle ='green';
//     ctx.strokeStyle = "green";
//     ctx.stroke();
 
//     if(x + radius > innerWidth || x - radius < 0){
//       dx = -dx
//     }

//     if( y + radius > innerHeight || y - radius < 0){
//       dy = -dy
//     }
//     x += dx;

//   }

//   animate();
 
//   // const game = new Game();
//   // new GameView(game, ctx).start();
// // });
