
import Level1 from "./Level1";

document.addEventListener("DOMContentLoaded", function () {

  let canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const level1 = new Level1(ctx);

  canvas.width = window.innerWidth - 350;
  canvas.height = window.innerHeight;

  const rectangle = {
    height: 30,
    jumping: true,
    width: 30,
    x: 350,
    x_velocity: 0,
    y: 0,
    y_velocity: 0,
  };


  const controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (event) {
      let key_state = event.type == "keydown" ? true : false;
      switch (event.keyCode) {
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
    },
  };

  const loop = () => {
    // Level1;

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

    if (rectangle.y > 180 - 16 - 32) {
      rectangle.jumping = false;
      rectangle.y = 180 - 16 - 32;
      rectangle.y_velocity = 0;
    }

    if (rectangle.x < 300) {
      rectangle.x_velocity = -rectangle.x_velocity * 2;
    } else if (rectangle.x > window.innerWidth - 400) {
      rectangle.x_velocity = -rectangle.x_velocity * 2;
    }

    const getDistance = (x, y, x2, y2) => {
      
       let x_distance = x2 - x;
       let y_distance = y2 - y;
       return Math.sqrt(Math.pow(x_distance, 2) + Math.pow(y_distance, 2));
     };


    const distance =  getDistance(
      rectangle.x, rectangle.y,
       level1.obstacle1.rectangle2.x, level1.obstacle1.rectangle2.y);

    if(distance <= 1){
      console.log(distance)
      rectangle.x_velocity = -rectangle.x_velocity * 2;
      console.log("Game Over");
    }


    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 160);
    ctx.lineTo(window.innerWidth, 160);
    ctx.stroke();
    level1.draw();
    window.requestAnimationFrame(loop);
  };

  window.addEventListener("keydown", controller.keyListener);
  window.addEventListener("keyup", controller.keyListener);
  window.requestAnimationFrame(loop);
});




















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
