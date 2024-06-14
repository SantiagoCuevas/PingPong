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

const paddleHeight = innerWidth / 60;
const paddleWidth = innerHeight / 7;

let leftPaddleYPos = window.innerHeight / 2.5;
let rightPaddleYPos = window.innerHeight / 2.5;

// Create function to draw/ create paddles and clean up code below DRY
// const drawPaddle = (xPos, yPos) => {};

const moveRightPaddle = (e: any) => {
  if (e.keyCode === 40) {
    rightPaddleYPos += 50;

    ctx.clearRect(canvas.width - 76, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(
      window.innerWidth - 76,
      rightPaddleYPos,
      paddleHeight,
      paddleWidth
    );
    ctx.fillStyle = "#36d800";
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
    ctx.fillStyle = "#36d800";
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
    ctx.fillStyle = "#36d800";
    ctx.fill();
    ctx.closePath();
  } else if (e.keyCode === 87) {
    leftPaddleYPos -= 50;

    ctx.clearRect(0, 0, 79, canvas.height);
    ctx.beginPath();
    ctx.rect(50, leftPaddleYPos, innerWidth / 60, innerHeight / 7);
    ctx.fillStyle = "#36d800";
    ctx.fill();
    ctx.closePath();
  }
};

// Add key down true and key up false logic to allow paddles to move at the same time
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
ctx.rect(50, leftPaddleYPos, innerWidth / 60, innerHeight / 7);
ctx.fillStyle = "#36d800";
ctx.fill();
ctx.closePath();

// Right paddle
ctx.beginPath();
ctx.rect(
  window.innerWidth - 76,
  rightPaddleYPos,
  innerWidth / 60,
  innerHeight / 7
);
ctx.fillStyle = "#36d800";
ctx.fill();
ctx.closePath();

const ballRadius = window.innerHeight / 50;
let ballXPos = window.innerWidth / 2;
const dx = 6;
let ballYPos = window.innerHeight / 2;
const dy = -3;

// Ball
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ballXPos, ballYPos, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#36d800";
  ctx.fill();
  ctx.closePath();
};

const moveBall = () => {
  ctx.clearRect(
    ballXPos - ballRadius - 3,
    ballYPos - ballRadius + 1,
    ballRadius * 2 + 2,
    ballRadius * 2 + 2
  );
  ballXPos += dx;
  ballYPos += dy;
  drawBall();
};

const startGame = () => {
  const interval = setInterval(moveBall, 10);
};

startGame();
