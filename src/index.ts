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

let leftPaddleYPos = window.innerHeight / 2.5;
let rightPaddleYPos = window.innerHeight / 2.5;

const moveRightPaddle = (e: any) => {
  if (e.keyCode === 40) {
    rightPaddleYPos += 50;

    ctx.clearRect(canvas.width - 76, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(
      window.innerWidth - 76,
      rightPaddleYPos,
      innerWidth / 60,
      innerHeight / 7
    );
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  } else if (e.keyCode === 38) {
    rightPaddleYPos -= 50;

    ctx.clearRect(canvas.width - 76, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(
      window.innerWidth - 76,
      rightPaddleYPos,
      innerWidth / 60,
      innerHeight / 7
    );
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
};

const moveLeftPaddle = (e: any) => {
  if (e.keyCode === 83) {
    ctx.clearRect(0, 0, 79, canvas.height);

    leftPaddleYPos += 50;

    ctx.beginPath();
    ctx.rect(50, leftPaddleYPos, innerWidth / 60, innerHeight / 7);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  } else if (e.keyCode === 87) {
    leftPaddleYPos -= 50;

    ctx.clearRect(0, 0, 79, canvas.height);
    ctx.beginPath();
    ctx.rect(50, leftPaddleYPos, innerWidth / 60, innerHeight / 7);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 39 || 40) {
    moveRightPaddle(e);
  }
  if (e.keyCode === 83 || 87) {
    moveLeftPaddle(e);
  }
});

// Left paddle
ctx.font;
ctx.beginPath();
ctx.rect(50, window.innerHeight / 2.5, innerWidth / 60, innerHeight / 7);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

// Right paddle
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

// Ball
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
