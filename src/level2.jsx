import React, { useEffect } from "react";

const Level2 = () => {
  useEffect(() => {
    const player = document.getElementById("player");
    const ball = document.getElementById("ball");
    const scoreDisplay = document.getElementById("score");
    const message = document.getElementById("message");
    const canvas = document.getElementById("gameCanvas");
    const startOverlay = document.getElementById("startOverlay");
    const startButton = document.getElementById("startButton");

    let ballX = 400;
    let ballY = 250;
    const baseSpeedX = 2; // reduced speed
    const baseSpeedY = 3; // reduced speed
    let ballSpeedX = baseSpeedX;
    let ballSpeedY = baseSpeedY;
    let playerX = 360;
    let score = 0;
    let gameRunning = false;

    // Paddle control
    const mouseMoveHandler = (e) => {
      if (!gameRunning) return;
      const rect = canvas.getBoundingClientRect();
      let mouseX = e.clientX - rect.left;
      playerX = mouseX - 40;
      if (playerX < 0) playerX = 0;
      if (playerX > 720) playerX = 720;
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    function update() {
      if (!gameRunning) return;

      ballX += ballSpeedX;
      ballY += ballSpeedY;

      if (ballX <= 0 || ballX >= 768) ballSpeedX *= -1;

      if (
        ballY + 32 >= 475 &&
        ballX + 16 >= playerX &&
        ballX <= playerX + 80
      ) {
        ballSpeedY *= -1;
        ballY = 475 - 32;

        score++;
        scoreDisplay.textContent = "Score: " + score;

        if (score === 25) {
          message.style.display = "block";
          gameRunning = false;
          return;
        }

        if (score % 5 === 0 && score !== 25) {
          const multiplier = Math.floor(score / 5) + 1;
          ballSpeedX = baseSpeedX * multiplier * Math.sign(ballSpeedX);
          ballSpeedY = baseSpeedY * multiplier * Math.sign(ballSpeedY);
        }
      }

      if (ballY > 500) {
        alert("Game Over! Your score: " + score);
        resetGame();
        return;
      }

      if (ballY <= 0) {
        ballSpeedY *= -1;
      }

      player.style.left = playerX + "px";
      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";

      requestAnimationFrame(update);
    }

    function resetGame() {
      score = 0;
      scoreDisplay.textContent = "Score: 0";
      ballX = 400;
      ballY = 250;
      ballSpeedX = baseSpeedX;
      ballSpeedY = baseSpeedY;
      message.style.display = "none";
      gameRunning = false;
      startOverlay.style.display = "flex";
    }

    startButton.addEventListener("click", () => {
      startOverlay.style.display = "none";
      gameRunning = true;
      update();
    });

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      id="gameCanvas"
      style={{
        backgroundColor: "#fff",
        border: "2px solid #ddd",
        position: "relative",
        width: "800px",
        height: "500px",
        margin: "20px auto",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div
        id="score"
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        Score: 0
      </div>
      <div
        id="message"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "32px",
          fontWeight: "bold",
          background: "#dff9fb",
          padding: "20px 40px",
          borderRadius: "12px",
          display: "none",
        }}
      >
        THE CLUE IS : congratulations
      </div>
      <div
        id="player"
        style={{
          width: "80px",
          height: "15px",
          backgroundColor: "#ff4757",
          position: "absolute",
          bottom: "10px",
          left: "360px",
          borderRadius: "7px",
        }}
      ></div>
      <div
        id="ball"
        style={{
          position: "absolute",
          fontSize: "32px",
          left: "400px",
          top: "250px",
        }}
      >
        😊
      </div>
      <div
        id="startOverlay"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "rgba(255, 255, 255, 0.95)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "20",
        }}
      >
        <button
          id="startButton"
          style={{
            padding: "20px 40px",
            fontSize: "28px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#ff4757",
            color: "white",
            cursor: "pointer",
          }}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default Level2;
