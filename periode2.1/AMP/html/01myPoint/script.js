const Canvas = document.getElementById("canvas");
const context = Canvas.getContext("2d");

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

function animate()
{
  requestAnimationFrame(animate);
  let myPoint = new Point(randomNumber(Canvas.width), randomNumber(Canvas.height), 10, "#" + "white");
  myPoint.draw(context);
}

animate();

function randomNumber(max)
{
  return Math.random()*max;
}
