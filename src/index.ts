const canvas = document.getElementById("myCanvas") as HTMLCanvasElement | null;

if (!canvas) {
  throw new Error("Canvas not found");
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("Canvas ctx not found");
}

// Left
ctx.font;
ctx.beginPath();
ctx.rect(50, window.innerHeight / 2.5, innerWidth / 60, innerHeight / 7);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(
  window.innerWidth - 76,
  window.innerHeight / 2.5,
  innerWidth / 60,
  innerHeight / 7
);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / 100,
  0,
  Math.PI * 2
);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
