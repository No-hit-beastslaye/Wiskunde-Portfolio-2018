canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let kineticObjects = [];

function animate()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  if(Math.random()<0.1)
  {
    let kineticObject = {};
    kineticObject.ball = new Point(1000, 100, 10, "red");
    kineticObject.pos = new Vector2d(RNG(canvas.width), -20);
    kineticObject.vel = new Vector2d(0, 0.5);
    kineticObject.acc = new Vector2d(0,0.2)
    kineticObjects.push(kineticObject);
  }

  for (var i = 0; i < kineticObjects.length; i++)
  {
    kineticObjects[i].vel.add(kineticObjects[i].acc);
    kineticObjects[i].pos.add(kineticObjects[i].vel);
    kineticObjects[i].ball.position(kineticObjects[i].pos);
    kineticObjects[i].ball.draw(context);
  }

  for (var i = 0; i < kineticObjects.length; i++)
  {
    if (kineticObjects[i].pos.dy > canvas.height - 10)
    {
      kineticObjects.splice(i, 1);
    }
  }
}

document.addEventListener('mousedown',(evt)=>
{
  let mousePos = {};
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY
  console.log(mousePos);
});

animate();

function RNG(max)
{
  return Math.floor(Math.random()*max);
}
