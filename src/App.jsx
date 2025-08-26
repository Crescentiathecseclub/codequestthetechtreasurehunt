import React, { useState, useEffect } from 'react';
import './App2.css';

const tasks = [
  {
    id: 1,
    description:(
      <>
      <a href="https://worddoc.tiiny.site/" target="_blank" rel="noopener noreferrer">Click Here</a>
      </>
    ),
    answer: 'hello world',
    clue: 'Output starts with "Hello" and is a classic first program phrase.',
    gameType: 'mathQuiz',
  },
  {
    id: 2,
    description:
      'Unscramble the following words: mplierocr, ryaar, itrcuci, paeh, elentem.',
    scrambledWords: ['mplieroc', 'ryaar', 'itrcuci', 'paeh', 'elentem','The word for this level is : first letter of all the words'],
    unscrambledWords: ['compiler', 'array', 'circuit', 'heap', 'element','cache'],
    answer: 'compilerarraycircuitheapelement',
    clue: 'The scrambled words are "compiler","array","circuit","heap","element".',
    gameType: 'airplane',
  },{
  id: 3,
  description: (
    <>
      Crossword Puzzle <a href="https://crosswordcres.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a>
    </>
  ),
  puzzleLink: 'https://crosswordcres.netlify.app/',
  answer: 'fragment',
  clue: '6. Encrypt , 8. Network , 4. Firewall .',
  gameType: 'pinpong',
},
{
  id: 4,
  description: (
    <>
      Fix the following C program for summing two numbers:<br />
      <pre style={{ background: '#eee', padding: '10px', borderRadius: '6px' }}>
        {`#include <stdioh>

int main() {
    int a, b, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, b)
    sum = a + b;
    printf("Sum is d", sums);
    return 0;
}`}
      </pre>
      <p>Enter the corrected C code below:</p>
    </>
  ),
  answer: `#include <stdio.h>

int main() {
    int a, b, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    sum = a + b;
    printf("Sum is %d", sum);
    return 0;
}`,
  clue: 'Remember to add the missing semicolon after scanf and check syntax carefully.',
  gameType: 'mathQuiz2',
},
{
  id: 5,
  description: 'Convert the following binary number to decimal: 101101',
  binaryCode: '101101',
  answer: '45',  // decimal equivalent of binary 101101
  clue: 'Ex: If 10 is a binary number then its decimal is (0*2^0)+(1*2^1)=2',
  gameType: 'reactionTest',
},
{
  id: 6,
  description: 'Riddle: I live in a world of twos, No maybes, just yes or no clues. I decide with logic, simple and lean,Ones and zeros are all I’ve seen.If true I stand, if false I fall,Who am I, ruling them all?',
  answer: 'Boolean',
  clue: 'I’m the foundation of conditions in coding. Without me, computers wouldn’t know how to choose between two paths.',
  gameType: 'jigsawPuzzle',
},
{
  id: 7,
  description: (
    <>
      <p>What will be the output of the following C program?</p>
      <pre style={{ backgroundColor: '#eee', padding: '10px', borderRadius: '6px' }}>
{`#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 3; i++) {
        printf("%d ", i);
    }
    return 0;
}`}
      </pre>
    </>
  ),
  answer: '1 2 3 ',
  clue: 'First three natural numbers.',
  gameType: 'airplane2',
},
{
  id: 8,
  description: (
    <>
      Decode this Morse code to find the phrase:<br />
      <code>
        .- .-. - .. ..-. .. -.-. .. .- .-.. / .. -. - . .-.. .-.. .. --. . -. -.-. .
      </code>
    </>
  ),
  answer: 'artificialintelligence',
  clue: 'You can directly use Google.(hahaha)',
  gameType: 'jigsawPuzzle2',
},

{
  id: 9,
  description: (
    <>
      <p>
        Please open the Word document linked below and answer the question inside:
      </p>
      <a
        href="https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1756217071918-hsa4zosqt6-1756217101967_r0i2nl_photo_2025-08-26_19-.jpg" // Replace with your actual Word doc URL
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Click Me!
      </a>
    </>
  ),
  answer: '7', // Put the expected answer users should input after reading the doc
  clue: 'Check the document carefully for the answer.',
  gameType: 'textInput',
}

  // Add more tasks here if needed, including levels 4-7, etc.
];


function MathQuizGame({ onWin, onLose, attemptsLeft, setAttemptsLeft }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (answer.trim() === '50') {
      setMessage('Correct! You won this game.');
      setTimeout(() => onWin(), 1000);
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      setMessage(`Incorrect answer. Attempts left: ${attemptsLeft - 1}`);
      setAnswer('');
    }
  };

  return (
    <div className="game-container">
      <h3>Game: Simple Math Quiz</h3>
      <p>If 2+2=8, 3+3=18, 4+4=32, 5+5=??</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter answer"
      />
      <button onClick={handleSubmit} disabled={attemptsLeft <= 0}>
        Submit Answer
      </button>
      {message && <p>{message}</p>}
      <button className="game-quit-btn" onClick={onLose}>
        Quit Game
      </button>
    </div>
  );
}
function MathQuizGame2({ onWin, onLose, attemptsLeft, setAttemptsLeft }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (answer.trim() === '70') {
      setMessage('Correct! You won this game.');
      setTimeout(() => onWin(), 1000);
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      setMessage(`Incorrect answer. Attempts left: ${attemptsLeft - 1}`);
      setAnswer('');
    }
  };

  return (
    <div className="game-container">
      <h3>Game: Simple Math Quiz</h3>
      <p>Divide 30 by 1/2 and add 10. What do you get?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter answer"
      />
      <button onClick={handleSubmit} disabled={attemptsLeft <= 0}>
        Submit Answer
      </button>
      {message && <p>{message}</p>}
      <button className="game-quit-btn" onClick={onLose}>
        Quit Game
      </button>
    </div>
  );
}
function JigsawPuzzleGame({ onWin, onLose }) {
  const canvasRef = React.useRef(null);
  const [pieces, setPieces] = React.useState([]);
  const [draggingPiece, setDraggingPiece] = React.useState(null);
  const rows = 3, cols = 3;
  const pieceSize = 400 / cols;
  const puzzleImage = new Image();
  puzzleImage.src = "https://i.pinimg.com/474x/0c/49/e4/0c49e4a3de2066a9fdf1f28d039e2006.jpg";

  React.useEffect(() => {
    puzzleImage.onload = () => {
      initPuzzle();
    };
    // eslint-disable-next-line
  }, []);

  class Piece {
    constructor(img, row, col, x, y) {
      this.img = img;
      this.row = row;
      this.col = col;
      this.x = x;
      this.y = y;
      this.correctX = col * pieceSize;
      this.correctY = row * pieceSize;
      this.isCorrect = false;
    }
    draw(ctx) {
      ctx.drawImage(
        this.img,
        this.col * (this.img.width / cols), this.row * (this.img.height / rows),
        this.img.width / cols, this.img.height / rows,
        this.x, this.y, pieceSize, pieceSize
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, pieceSize, pieceSize);
    }
    contains(x, y) {
      return (x > this.x && x < this.x + pieceSize &&
              y > this.y && y < this.y + pieceSize);
    }
    snap() {
      const dx = Math.abs(this.x - this.correctX);
      const dy = Math.abs(this.y - this.correctY);
      if (dx < 15 && dy < 15) {
        this.x = this.correctX;
        this.y = this.correctY;
        this.isCorrect = true;
        return true;
      }
      return false;
    }
  }

  function initPuzzle() {
    let newPieces = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let x = Math.random() * (400 - pieceSize);
        let y = Math.random() * (400 - pieceSize);
        newPieces.push(new Piece(puzzleImage, r, c, x, y));
      }
    }
    setPieces(newPieces);
    drawPuzzle(newPieces);
  }

  function drawPuzzle(piecesToDraw) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
    piecesToDraw.forEach(p => p.draw(ctx));
  }

  function handleMouseDown(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (let i = pieces.length - 1; i >= 0; i--) {
      if (pieces[i].contains(mouseX, mouseY) && !pieces[i].isCorrect) {
        setDraggingPiece(pieces[i]);
        break;
      }
    }
  }

  function handleMouseMove(e) {
    if (!draggingPiece) return;
    const rect = canvasRef.current.getBoundingClientRect();
    draggingPiece.x = e.clientX - rect.left - pieceSize / 2;
    draggingPiece.y = e.clientY - rect.top - pieceSize / 2;
    drawPuzzle(pieces);
  }

  function handleMouseUp() {
    if (!draggingPiece) return;
    draggingPiece.snap();
    setDraggingPiece(null);
    drawPuzzle(pieces);
    checkWin();
  }

  function checkWin() {
    if (pieces.every(p => p.isCorrect)) {
      onWin(); // clue will show
    }
  }

  return (
    <div className="game-container" style={{ textAlign: "center" }}>
      <h3>🧩 Jigsaw Puzzle</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: "2px solid #333f63", background: "#fffff0", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <button className="game-quit-btn" onClick={onLose}>Quit Game</button>
    </div>
  );
}
function JigsawPuzzleGame2({ onWin, onLose }) {
  const canvasRef = React.useRef(null);
  const [pieces, setPieces] = React.useState([]);
  const [draggingPiece, setDraggingPiece] = React.useState(null);
  const rows = 3, cols = 3;
  const pieceSize = 400 / cols;
  const puzzleImage = new Image();
  puzzleImage.src ="https://5.imimg.com/data5/SELLER/Default/2023/9/344212842/VM/DV/FQ/158315707/1-500x500.jpg";

  React.useEffect(() => {
    puzzleImage.onload = () => {
      initPuzzle();
    };
    // eslint-disable-next-line
  }, []);

  class Piece {
    constructor(img, row, col, x, y) {
      this.img = img;
      this.row = row;
      this.col = col;
      this.x = x;
      this.y = y;
      this.correctX = col * pieceSize;
      this.correctY = row * pieceSize;
      this.isCorrect = false;
    }
    draw(ctx) {
      ctx.drawImage(
        this.img,
        this.col * (this.img.width / cols), this.row * (this.img.height / rows),
        this.img.width / cols, this.img.height / rows,
        this.x, this.y, pieceSize, pieceSize
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, pieceSize, pieceSize);
    }
    contains(x, y) {
      return (x > this.x && x < this.x + pieceSize &&
              y > this.y && y < this.y + pieceSize);
    }
    snap() {
      const dx = Math.abs(this.x - this.correctX);
      const dy = Math.abs(this.y - this.correctY);
      if (dx < 15 && dy < 15) {
        this.x = this.correctX;
        this.y = this.correctY;
        this.isCorrect = true;
        return true;
      }
      return false;
    }
  }

  function initPuzzle() {
    let newPieces = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let x = Math.random() * (400 - pieceSize);
        let y = Math.random() * (400 - pieceSize);
        newPieces.push(new Piece(puzzleImage, r, c, x, y));
      }
    }
    setPieces(newPieces);
    drawPuzzle(newPieces);
  }

  function drawPuzzle(piecesToDraw) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
    piecesToDraw.forEach(p => p.draw(ctx));
  }

  function handleMouseDown(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (let i = pieces.length - 1; i >= 0; i--) {
      if (pieces[i].contains(mouseX, mouseY) && !pieces[i].isCorrect) {
        setDraggingPiece(pieces[i]);
        break;
      }
    }
  }

  function handleMouseMove(e) {
    if (!draggingPiece) return;
    const rect = canvasRef.current.getBoundingClientRect();
    draggingPiece.x = e.clientX - rect.left - pieceSize / 2;
    draggingPiece.y = e.clientY - rect.top - pieceSize / 2;
    drawPuzzle(pieces);
  }

  function handleMouseUp() {
    if (!draggingPiece) return;
    draggingPiece.snap();
    setDraggingPiece(null);
    drawPuzzle(pieces);
    checkWin();
  }

  function checkWin() {
    if (pieces.every(p => p.isCorrect)) {
      onWin(); // clue will show
    }
  }

  return (
    <div className="game-container" style={{ textAlign: "center" }}>
      <h3>🧩 Jigsaw Puzzle</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: "2px solid #333f63", background: "#fffff0", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <button className="game-quit-btn" onClick={onLose}>Quit Game</button>
    </div>
  );
}
function AirplaneGame({ onWin, onLose }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let plane = { x: 180, y: 500, width: 40, height: 40, speed: 5 };
    let bullets = [];
    let enemies = [];
    let packs = [];
    let score = 0;
    let gameOver = false;
    let keys = {};
    let bulletCount = 20;

    function drawPlane() {
      ctx.fillStyle = "red";
      ctx.fillRect(plane.x, plane.y, plane.width, plane.height);
    }

    function drawBullets() {
      ctx.fillStyle = "yellow";
      bullets.forEach((b) => ctx.fillRect(b.x, b.y, 5, 10));
    }

    function drawEnemies() {
      ctx.fillStyle = "black";
      enemies.forEach((e) => ctx.fillRect(e.x, e.y, e.width, e.height));
    }

    function drawPacks() {
      ctx.fillStyle = "green";
      packs.forEach((p) => ctx.fillRect(p.x, p.y, p.width, p.height));
    }

    function drawScore() {
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText("Score: " + score, 10, 20);
      ctx.fillText("Bullets: " + bulletCount, 300, 20);
    }

    function update() {
      if (gameOver) return;

      if (keys["ArrowLeft"] && plane.x > 0) plane.x -= plane.speed;
      if (keys["ArrowRight"] && plane.x < canvas.width - plane.width)
        plane.x += plane.speed;
      if (keys["ArrowUp"] && plane.y > 0) plane.y -= plane.speed;
      if (keys["ArrowDown"] && plane.y < canvas.height - plane.height)
        plane.y += plane.speed;

      bullets.forEach((b, i) => {
        b.y -= 7;
        if (b.y < 0) bullets.splice(i, 1);
      });

      enemies.forEach((e, i) => {
        e.y += 3;
        if (e.y > canvas.height) {
          enemies.splice(i, 1);
          score += 5;
        }
      });

      packs.forEach((p, i) => {
        p.y += 2;
        if (p.y > canvas.height) packs.splice(i, 1);
      });

      enemies.forEach((e, ei) => {
        bullets.forEach((b, bi) => {
          if (
            b.x < e.x + e.width &&
            b.x + 5 > e.x &&
            b.y < e.y + e.height &&
            b.y + 10 > e.y
          ) {
            enemies.splice(ei, 1);
            bullets.splice(bi, 1);
          }
        });

        if (
          plane.x < e.x + e.width &&
          plane.x + plane.width > e.x &&
          plane.y < e.y + e.height &&
          plane.height + plane.y > e.y
        ) {
          gameOver = true;
          alert("💥 Game Over!");
          onLose();
        }
      });

      packs.forEach((p, pi) => {
        if (
          plane.x < p.x + p.width &&
          plane.x + plane.width > p.x &&
          plane.y < p.y + p.height &&
          plane.height + plane.y > p.y
        ) {
          bulletCount += 10;
          packs.splice(pi, 1);
        }
      });

      if (score >= 200) {
        gameOver = true;
        alert("🎉 You Win!");
        onWin();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlane();
      drawBullets();
      drawEnemies();
      drawPacks();
      drawScore();
    }

    function loop() {
      if (!gameOver) {
        update();
        draw();
        requestAnimationFrame(loop);
      }
    }

    window.addEventListener("keydown", (e) => {
      keys[e.key] = true;
      if (e.key === " " && bulletCount > 0) {
        bullets.push({ x: plane.x + 18, y: plane.y });
        bulletCount--;
      }
    });
    window.addEventListener("keyup", (e) => (keys[e.key] = false));

    const enemyInterval = setInterval(() => {
      if (!gameOver) {
        enemies.push({
          x: Math.random() * 360,
          y: -20,
          width: 40,
          height: 40,
        });
      }
    }, 1500);

    const packInterval = setInterval(() => {
      if (!gameOver) {
        packs.push({ x: Math.random() * 360, y: -20, width: 20, height: 20 });
      }
    }, 5000);

    loop();

    return () => {
      clearInterval(enemyInterval);
      clearInterval(packInterval);
    };
  }, [onWin, onLose]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>✈️ Airplane Game</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={600}
        style={{ border: "2px solid black", background: "skyblue" }}
      />
      <p>➡️ Arrow Keys to Move | ␣ Spacebar to Shoot</p>
    </div>
  );
}

function AirplaneGame2({ onWin, onLose }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let plane = { x: 180, y: 500, width: 40, height: 40, speed: 5 };
    let bullets = [];
    let enemies = [];
    let packs = [];
    let score = 0;
    let gameOver = false;
    let keys = {};
    let bulletCount = 20;

    function drawPlane() {
      ctx.fillStyle = "red";
      ctx.fillRect(plane.x, plane.y, plane.width, plane.height);
    }

    function drawBullets() {
      ctx.fillStyle = "yellow";
      bullets.forEach((b) => ctx.fillRect(b.x, b.y, 5, 10));
    }

    function drawEnemies() {
      ctx.fillStyle = "black";
      enemies.forEach((e) => ctx.fillRect(e.x, e.y, e.width, e.height));
    }

    function drawPacks() {
      ctx.fillStyle = "green";
      packs.forEach((p) => ctx.fillRect(p.x, p.y, p.width, p.height));
    }

    function drawScore() {
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText("Score: " + score, 10, 20);
      ctx.fillText("Bullets: " + bulletCount, 300, 20);
    }

    function update() {
      if (gameOver) return;

      if (keys["ArrowLeft"] && plane.x > 0) plane.x -= plane.speed;
      if (keys["ArrowRight"] && plane.x < canvas.width - plane.width)
        plane.x += plane.speed;
      if (keys["ArrowUp"] && plane.y > 0) plane.y -= plane.speed;
      if (keys["ArrowDown"] && plane.y < canvas.height - plane.height)
        plane.y += plane.speed;

      bullets.forEach((b, i) => {
        b.y -= 7;
        if (b.y < 0) bullets.splice(i, 1);
      });

      enemies.forEach((e, i) => {
        e.y += 3;
        if (e.y > canvas.height) {
          enemies.splice(i, 1);
          score += 5;
        }
      });

      packs.forEach((p, i) => {
        p.y += 2;
        if (p.y > canvas.height) packs.splice(i, 1);
      });

      enemies.forEach((e, ei) => {
        bullets.forEach((b, bi) => {
          if (
            b.x < e.x + e.width &&
            b.x + 5 > e.x &&
            b.y < e.y + e.height &&
            b.y + 10 > e.y
          ) {
            enemies.splice(ei, 1);
            bullets.splice(bi, 1);
          }
        });

        if (
          plane.x < e.x + e.width &&
          plane.x + plane.width > e.x &&
          plane.y < e.y + e.height &&
          plane.height + plane.y > e.y
        ) {
          gameOver = true;
          alert("💥 Game Over!");
          onLose();
        }
      });

      packs.forEach((p, pi) => {
        if (
          plane.x < p.x + p.width &&
          plane.x + plane.width > p.x &&
          plane.y < p.y + p.height &&
          plane.height + plane.y > p.y
        ) {
          bulletCount += 10;
          packs.splice(pi, 1);
        }
      });

      if (score >= 300) {
        gameOver = true;
        alert("🎉 You Win!");
        onWin();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlane();
      drawBullets();
      drawEnemies();
      drawPacks();
      drawScore();
    }

    function loop() {
      if (!gameOver) {
        update();
        draw();
        requestAnimationFrame(loop);
      }
    }

    window.addEventListener("keydown", (e) => {
      keys[e.key] = true;
      if (e.key === " " && bulletCount > 0) {
        bullets.push({ x: plane.x + 18, y: plane.y });
        bulletCount--;
      }
    });
    window.addEventListener("keyup", (e) => (keys[e.key] = false));

    const enemyInterval = setInterval(() => {
      if (!gameOver) {
        enemies.push({
          x: Math.random() * 360,
          y: -20,
          width: 40,
          height: 40,
        });
      }
    }, 1500);

    const packInterval = setInterval(() => {
      if (!gameOver) {
        packs.push({ x: Math.random() * 360, y: -20, width: 20, height: 20 });
      }
    }, 5000);

    loop();

    return () => {
      clearInterval(enemyInterval);
      clearInterval(packInterval);
    };
  }, [onWin, onLose]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>✈️ Airplane Game</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={600}
        style={{ border: "2px solid black", background: "skyblue" }}
      />
      <p>➡️ Arrow Keys to Move | ␣ Spacebar to Shoot</p>
    </div>
  );
}



function PinpongGame({ onWin, onLose }) {
  const canvasRef = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  const paddleWidth = 100;
  const paddleHeight = 16;
  const canvasWidth = 600;
  const canvasHeight = 400;
  const [paddleX, setPaddleX] = React.useState((canvasWidth - paddleWidth) / 2);

  // Use refs for ball position & velocity to avoid excessive re-renders
  const ballX = React.useRef(canvasWidth / 2);
  const ballY = React.useRef(canvasHeight - 30);
  const ballSpeedX = React.useRef(5);
  const ballSpeedY = React.useRef(-7);

  const ballEmoji = '😊';

  // Calculate how far from paddle center the ball hit (-1 to 1)
  function hitFactor(ballXVal, paddleXVal, paddleW) {
    return (ballXVal - (paddleXVal + paddleW / 2)) / (paddleW / 2);
  }

  React.useEffect(() => {
    if (!started || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafId;

    function draw() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw paddle at bottom
      ctx.fillStyle = "#222";
      ctx.fillRect(paddleX, canvasHeight - paddleHeight, paddleWidth, paddleHeight);

      // Draw emoji ball
      ctx.font = "32px Arial";
      ctx.fillText(ballEmoji, ballX.current, ballY.current);

      // Draw score
      ctx.fillStyle = "#222";
      ctx.font = "18px Arial";
      ctx.fillText("Score: " + score, 10, 30);
    }

    function gameLoop() {
      ballX.current += ballSpeedX.current;
      ballY.current += ballSpeedY.current;

      // Bounce off left and right walls
      if (ballX.current <= 0 || ballX.current >= canvasWidth - 32) ballSpeedX.current *= -1;
      // Bounce off top wall
      if (ballY.current <= 0) ballSpeedY.current *= -1;

      // Paddle collision with dynamic angle and speed increase on score
      if (
        ballY.current >= canvasHeight - paddleHeight - 8 &&
        ballX.current >= paddleX &&
        ballX.current <= paddleX + paddleWidth
      ) {
        const factor = hitFactor(ballX.current, paddleX, paddleWidth);
        const speedIncreaseFactor = 1.05; // 5% speed increase per hit

        ballSpeedX.current = factor * 7 * Math.pow(speedIncreaseFactor, score + 1);
        ballSpeedY.current = -Math.abs(ballSpeedY.current) * Math.pow(speedIncreaseFactor, score + 1);

        setScore((s) => {
          if (s + 1 === 10) {
            setGameOver(true);
            setTimeout(() => onWin(), 300);
          }
          return s + 1;
        });
      }

      // Missed paddle: game over
      if (ballY.current > canvasHeight && !gameOver) {
        setGameOver(true);
        setTimeout(() => onLose(), 300);
      }

      draw();
      if (!gameOver) rafId = requestAnimationFrame(gameLoop);
    }

    draw();
    rafId = requestAnimationFrame(gameLoop);

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      let mouseX = e.clientX - rect.left - paddleWidth / 2;
      if (mouseX < 0) mouseX = 0;
      if (mouseX > canvasWidth - paddleWidth) mouseX = canvasWidth - paddleWidth;
      setPaddleX(mouseX);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [started, paddleX, score, onWin, onLose, gameOver]);

  // Reset states on start/stop
  React.useEffect(() => {
    if (!started) {
      setScore(0);
      setGameOver(false);
      setPaddleX((canvasWidth - paddleWidth) / 2);
      ballX.current = canvasWidth / 2;
      ballY.current = canvasHeight - 30;
      ballSpeedX.current = 5;
      ballSpeedY.current = -7;
    }
  }, [started]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>🏓 Pinpong Emoji Game</h3>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid #ddd", background: "#fafafa" }}
      />
      {!started && (
        <button
          className="game-start-btn"
          style={{ marginTop: "16px", padding: "10px 22px", fontSize: "18px" }}
          onClick={() => setStarted(true)}
        >
          Start
        </button>
      )}
      <p>Move your mouse to control the paddle at the bottom! Score 10 to win.</p>
      <button
        className="game-quit-btn"
        onClick={() => {
          setStarted(false);
          onLose();
        }}
        style={{ marginTop: 8 }}
      >
        Quit Game
      </button>
    </div>
  );
}








function ReactionTestGame({ onWin, onLose, attemptsLeft, setAttemptsLeft }) {
  const [timeLeft, setTimeLeft] = useState(3);
  const [message, setMessage] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) return;

    if (timeLeft === 0) {
      setMessage('Time is up! You lost this round.');
      setTimeout(() => {
        setAttemptsLeft(attemptsLeft - 1);
      }, 1500);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, clicked, attemptsLeft, setAttemptsLeft]);

  const handleClick = () => {
    if (!clicked && timeLeft > 0) {
      setClicked(true);
      setMessage('Great! You clicked in time. You won this game.');
      setTimeout(() => onWin(), 1500);
    }
  };

  return (
    <div className="game-container">
      <h3>Game: Reaction Test</h3>
      <p>Click the button before time runs out! Time left: {timeLeft} seconds</p>
      <button onClick={handleClick} disabled={clicked}>
        Click Me!
      </button>
      {message && <p>{message}</p>}
      <button className="game-quit-btn" onClick={onLose}>
        Quit Game
      </button>
      <p>Attempts left: {attemptsLeft}</p>
    </div>
  );
}

export default function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [unscrambleInputs, setUnscrambleInputs] = useState({});
  const [completed, setCompleted] = useState([]);
  const [allDone, setAllDone] = useState(false);
  const [totalStuckUses, setTotalStuckUses] = useState(0);

  const [showClue, setShowClue] = useState(false);
  const [playingGame, setPlayingGame] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  const [clueUsedLevels, setClueUsedLevels] = useState([]); // Track for disabling stuck btn after clue shown

  const currentTask = tasks[currentLevelIndex];

  useEffect(() => {
    setUserAnswer('');
    setUnscrambleInputs({});
    setShowClue(false);
    setPlayingGame(false);
    setAttemptsLeft(3);
  }, [currentLevelIndex]);

  useEffect(() => {
    if (attemptsLeft <= 0) {
      alert('You have lost all attempts in the game. Returning to the question.');
      setPlayingGame(false);
      setAttemptsLeft(3);
    }
  }, [attemptsLeft]);

  const handleCheck = () => {
    let isCorrect = false;
    const correctAnswer = currentTask.answer.toLowerCase().replace(/\s+/g, '');

    if (currentTask.scrambledWords) {
      // For level 2 (id: 2), skip combined answer check (only check individual words)
      if (currentTask.id === 2) {
        let allWordsCorrect = true;
        for (let i = 0; i < currentTask.scrambledWords.length; i++) {
          const scrambled = currentTask.scrambledWords[i];
          const correctWord = currentTask.unscrambledWords[i];
          const userInput = (unscrambleInputs[scrambled] || '').trim().toLowerCase();
          if (
            userInput.split('').sort().join('') !==
            correctWord.split('').sort().join('')
          ) {
            allWordsCorrect = false;
            break;
          }
        }
        isCorrect = allWordsCorrect;
      } else {
        // Original logic for other scrambled word tasks
        let allWordsCorrect = true;
        for (let i = 0; i < currentTask.scrambledWords.length; i++) {
          const scrambled = currentTask.scrambledWords[i];
          const correctWord = currentTask.unscrambledWords[i];
          const userInput = (unscrambleInputs[scrambled] || '').trim().toLowerCase();
          if (
            userInput.split('').sort().join('') !==
            correctWord.split('').sort().join('')
          ) {
            allWordsCorrect = false;
            break;
          }
        }
        const combinedAnswer = Object.values(unscrambleInputs)
          .map((w) => w.toLowerCase())
          .join('');
        isCorrect = allWordsCorrect && combinedAnswer === correctAnswer;
      }
    } else {
      const userAnsProcessed = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
      isCorrect = userAnsProcessed === correctAnswer;
    }

    if (isCorrect) {
      setCompleted([...completed, currentTask.id]);
      if (currentLevelIndex < tasks.length - 1) {
        setCurrentLevelIndex(currentLevelIndex + 1);
      } else {
        setAllDone(true);
      }
    } else {
      alert('❌ Incorrect answer. Try again.');
    }
  };

  const handleUnscrambleChange = (scrambledWord, val) => {
    setUnscrambleInputs({ ...unscrambleInputs, [scrambledWord]: val });
  };

const handleGameWin = () => {
  setPlayingGame(false);
  setShowClue(true);
  setClueUsedLevels((prev) => [...prev, currentTask.id]);
  setTotalStuckUses((count) => count + 1);  // Increase total usage count here
};



  const handleGameLose = () => {
    alert('You quit the game. Returning to the question.');
    setPlayingGame(false);
    setAttemptsLeft(3);
  };

  const startGame = () => {
    setPlayingGame(true);
    setShowClue(false);
    setAttemptsLeft(3);
  };

  const renderGame = () => {
    switch (currentTask.gameType) {
      case 'guessNumber':
        return (
          <GuessNumberGame
            onWin={handleGameWin}
            onLose={handleGameLose}
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
          />
        );
      case 'mathQuiz':
        return (
          <MathQuizGame
            onWin={handleGameWin}
            onLose={handleGameLose}
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
          />
        );
        case 'mathQuiz2':
        return (
          <MathQuizGame2
            onWin={handleGameWin}
            onLose={handleGameLose}
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
          />
        );
      case 'reactionTest':
        return (
          <ReactionTestGame
            onWin={handleGameWin}
            onLose={handleGameLose}
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
          />
        );
         case 'jigsawPuzzle':   // NEW
      return (
        <JigsawPuzzleGame
          onWin={handleGameWin}
          onLose={handleGameLose}
        />
      );
       case 'jigsawPuzzle2':   // NEW
      return (
        <JigsawPuzzleGame2
          onWin={handleGameWin}
          onLose={handleGameLose}
        />
      );
      case 'airplane':
  return (
    <AirplaneGame
      onWin={handleGameWin}
      onLose={handleGameLose}
    />
  );
  case 'airplane2':
  return (
    <AirplaneGame2
      onWin={handleGameWin}
      onLose={handleGameLose}
    />
  );
  
  case 'pinpong':
        return (
          <PinpongGame
            onWin={handleGameWin}
            onLose={handleGameLose}
          />
        );
        case 'starDodger':
  return <StarDodgerGame onWin={handleGameWin} onLose={handleGameLose} />;




      


      default:
        return null;
    }
  };

  return (
    <div className="app">
      <h1>Code Quest - The Tech Treasure Hunt</h1>

      {!allDone && (
        <div className="tasks-container">
          <div className="task-card main-task">
            <h2>Level {currentTask.id}</h2>
            <p className="task-description">{currentTask.description}</p>

            {currentTask.scrambledWords && (
              <>
                <p style={{ fontWeight: '700', marginBottom: '8px' }}>
                  Unscramble each word:
                </p>
                {currentTask.scrambledWords.map((word) => (
                  <div key={word} style={{ marginBottom: '10px' }}>
                    <label htmlFor={word} style={{ marginRight: '12px' }}>
                      {word}:
                    </label>
                    <input
                      id={word}
                      type="text"
                      placeholder="Unscrambled word"
                      value={unscrambleInputs[word] || ''}
                      onChange={(e) => handleUnscrambleChange(word, e.target.value)}
                      style={{
                        padding: '8px 12px',
                        fontSize: '16px',
                        borderRadius: '6px',
                        border: '1px solid #bbb',
                      }}
                    />
                  </div>
                ))}

                {/* Remove combined answer input and instruction for Level 2 */}
                {currentTask.id !== 2 && (
                  <>
                    <p style={{ fontWeight: '700', marginTop: '18px' }}>
                      After unscrambling all words, enter the combined final answer here:
                    </p>
                    <input
                      type="text"
                      placeholder="Combined final answer"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      style={{
                        padding: '10px 14px',
                        fontSize: '16px',
                        borderRadius: '8px',
                        border: '2px solid #bbb',
                        width: '100%',
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                    />
                  </>
                )}
              </>
            )}

            {!currentTask.scrambledWords && (
              <input
                type="text"
                placeholder="Enter your answer..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                style={{
                  padding: '14px 16px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #bbb',
                  width: '100%',
                }}
              />
            )}

            <div
              style={{
                marginTop: '15px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button onClick={handleCheck} style={{ minWidth: '120px' }} aria-label="Check your answer">
                Check
              </button>
              
              {!clueUsedLevels.includes(currentTask.id) && !playingGame && totalStuckUses < 3 && (
                <button
                  onClick={startGame}
                  className="stuck-btn"
                  aria-label="Are you stuck? Play a clue game"
                >
                  Are you stuck? ({3 - totalStuckUses} left)
                </button>
              )}

              {totalStuckUses >= 3 && (
                <span style={{ color: '#cc0000', fontWeight: '600' }}>All clues used (3/3)</span>
              )}
              
              {clueUsedLevels.includes(currentTask.id) && totalStuckUses < 3 && (
                <span style={{ color: '#cc6600', fontWeight: '600' }}>Clue already used for this level</span>
              )}
            </div>

            {playingGame && renderGame()}

            {showClue && !playingGame && (
              <div
                className="clue-text"
                role="alert"
                aria-live="polite"
                style={{ marginTop: '15px' }}
              >
                <strong>Clue:</strong> {currentTask.clue}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="completed-tasks">
        {completed.map((id) => (
          <div key={id} className="completed-tag main-completed">
            ✅ Level {id} - Completed
          </div>
        ))}
      </div>

      {allDone && (
        <div className="final-container">
          <h2>You are at the end of the Treasure Hunt. Now enter the password (Hint:Read the document in the level-9 carefully!!).</h2>
        
        </div>
      )}

      {/* Show clue usage counter */}
      {totalStuckUses > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
          <small>Clues used: {totalStuckUses}/3</small>
        </div>
      )}

      {/* Show the footer message ONLY after Level 7 is completed but before finishing all levels */}
      {!allDone && completed.includes(7) && (
        <div className="footer-message" style={{ marginTop: '40px' }}>
          <p>
            You almost came to the end of the treasure hunt!{' '}
            <a href="https://example.com/nextpage" target="_blank" rel="noreferrer">
              Move to the next page
            </a>
          </p>
        </div>
      )}
    </div>
  );

}
