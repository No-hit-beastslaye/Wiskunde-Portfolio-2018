const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gear = new Image();
gear.src = "gear.png";
gear.rot = 0.01;
//gear.width = 0;
//gear.height = 0;

let gear2 = new Image();
gear2.src = "gear.png";
gear2.rot = 1.49;
//gear.width = 0;
//gear.height = 0;

gear.addEventListener("load", ()=>
{
  animate();
});

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.save();
  context.translate(250, 250);
  context.rotate(gear.rot);
  context.drawImage(gear, -gear.width/2, -gear.height/2);
  context.restore();

  context.save();
  context.translate(575, 250);
  context.rotate(gear2.rot)
  context.drawImage(gear2, -gear2.width/2, -gear.height/2);
  context.restore();

  gear.rot += 0.01;
  gear2.rot += -0.01;
}
