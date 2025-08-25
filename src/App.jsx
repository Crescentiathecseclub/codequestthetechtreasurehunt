// // import React, { useState } from 'react';
// // import tasks from './Tasks.jsx';
// // import './App2.css';

// // function App() {
// //   const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
// //   const [stage, setStage] = useState('main');
// //   const [userAnswer, setUserAnswer] = useState('');
// //   const [completed, setCompleted] = useState([]);
// //   const [allDone, setAllDone] = useState(false);

// //   const mainAnswers = {
// //     1: 'Paris',
// //     2: '4',
// //     3: 'Blue',
// //     4: '100',
// //     5: 'Shakespeare',
// //     6: 'Jupiter',
// //     7: '7',
// //     8: 'Carbon dioxide'
// //   };

// //   const subTasks = {
// //     1: {
// //       question: "What continent is France located in?",
// //       answer: "Europe",
// //     },
// //     2: {
// //       question: "What is 5 times 3?",
// //       answer: "15",
// //     },
// //     3: {
// //       question: "What color do you get by mixing blue and yellow?",
// //       answer: "Green",
// //     },
// //     4: {
// //       question: "Is water freezing point above or below 0°C?",
// //       answer: "Below",
// //     },
// //     5: {
// //       question: "Name a famous play by Shakespeare besides Romeo and Juliet.",
// //       answer: "Hamlet",
// //     },
// //     6: {
// //       question: "Is Saturn bigger than Jupiter? (yes/no)",
// //       answer: "No",
// //     },
// //     7: {
// //       question: "Is Africa a continent? (yes/no)",
// //       answer: "Yes",
// //     },
// //     8: {
// //       question: "Do plants produce oxygen? (yes/no)",
// //       answer: "Yes",
// //     }
// //   };

// //   const currentTaskId = tasks[currentTaskIndex].id;

// //   const handleCheck = () => {
// //     let correctAnswer;

// //     if (stage === 'main') {
// //       correctAnswer = mainAnswers[currentTaskId].toLowerCase();
// //     } else {
// //       correctAnswer = subTasks[currentTaskId].answer.toLowerCase();
// //     }

// //     const userInput = userAnswer.trim().toLowerCase();

// //     if (userInput === correctAnswer) {
// //       setCompleted([...completed, { id: currentTaskId, stage }]);
// //       setUserAnswer('');

// //       if (stage === 'main') {
// //         setStage('sub'); // Show sub-task container beside main
// //       } else {
// //         if (currentTaskIndex < tasks.length - 1) {
// //           setCurrentTaskIndex(currentTaskIndex + 1);
// //           setStage('main');
// //         } else {
// //           setAllDone(true);
// //         }
// //       }
// //     } else {
// //       alert('❌ Incorrect answer. Try again.');
// //     }
// //   };

// //   return (
// //     <div className="app">
// //       <h1>Crescentia</h1>

// //       {!allDone && (
// //         <div className="tasks-container">
// //           {/* Main Task Container */}
// //           <div className="task-card main-task">
// //             <h2>Task {tasks[currentTaskIndex].id} - Main Task</h2>
// //             <p className="task-description">{tasks[currentTaskIndex].description}</p>
// //             <input
// //               type="text"
// //               placeholder="Enter your answer..."
// //               value={userAnswer}
// //               onChange={e => setUserAnswer(e.target.value)}
// //               onKeyDown={e => e.key === 'Enter' && handleCheck()}
// //               disabled={stage !== 'main'} // Disable input if sub-task active
// //             />
// //             <button onClick={handleCheck} disabled={stage !== 'main'}>
// //               Check
// //             </button>
// //           </div>

// //           {/* Sub-task Container shown only if stage === 'sub' */}
// //           {stage === 'sub' && (
// //             <div className="task-card sub-task">
// //               <h2>Task {tasks[currentTaskIndex].id} - Logical Sub-task</h2>
// //               <p className="task-description">{subTasks[currentTaskId].question}</p>
// //               <input
// //                 type="text"
// //                 placeholder="Enter your answer..."
// //                 value={userAnswer}
// //                 onChange={e => setUserAnswer(e.target.value)}
// //                 onKeyDown={e => e.key === 'Enter' && handleCheck()}
// //                 autoFocus
// //               />
// //               <button onClick={handleCheck}>Check</button>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       <div className="completed-tasks">
// //         {completed.map(({ id, stage }, idx) => (
// //           <div
// //             key={idx}
// //             className={`completed-tag ${stage === 'main' ? 'main-completed' : 'sub-completed'}`}
// //           >
// //             ✅ Task {id} - {stage === 'main' ? 'Main Task Completed' : 'Logical Sub-task Completed'}
// //           </div>
// //         ))}
// //       </div>

// //       {allDone && (
// //         <div className="final-container">
// //           <h2>🎉 Congratulations! You completed all tasks and sub-tasks.</h2>
// //           <p>Thank you for your efforts. Your Password is first letter of all answers!</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState, useEffect } from 'react';
// import tasks from './Tasks.jsx';
// import './App2.css';

// function App() {
//   const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
//   const [stage, setStage] = useState('main'); // 'main' or 'game'
//   const [userAnswer, setUserAnswer] = useState('');
//   const [completed, setCompleted] = useState([]);
//   const [allDone, setAllDone] = useState(false);

//   // All games and used games state
//   const allGames = ['guessnumber', 'wordreverse', 'mathquiz'];
//   const [usedGames, setUsedGames] = useState([]);

//   // Clues used count globally max 3 (since 3 games max)
//   const maxClues = 3;

//   // Game states
//   const [game, setGame] = useState(null);
//   const [guessNumber, setGuessNumber] = useState(null);
//   const [gameMessage, setGameMessage] = useState('');
//   const [gameGuess, setGameGuess] = useState('');
//   const [gameChances, setGameChances] = useState(0);
//   const [wordToReverse, setWordToReverse] = useState('');
//   const [mathQuestion, setMathQuestion] = useState('');
//   const [mathAnswer, setMathAnswer] = useState(null);
//   const [clueAvailable, setClueAvailable] = useState(false);

//   // Clues per level
//   const clues = {
//     1: "It's the city of the Eiffel Tower.",
//     2: "It's the number of wheels on a car.",
//     3: "It's the color of the sky on a clear day.",
//     4: "A century has this many years.",
//     5: "He wrote 'Hamlet'.",
//     6: "It's the largest planet in the solar system.",
//     7: "It's a lucky number often associated with days in a week.",
//     8: "Plants absorb this gas and release oxygen.",
//   };

//   const mainAnswers = {
//     1: 'Paris',
//     2: '4',
//     3: 'Blue',
//     4: '100',
//     5: 'Shakespeare',
//     6: 'Jupiter',
//     7: '7',
//     8: 'Carbon dioxide'
//   };

//   const currentLevelId = tasks[currentLevelIndex].id;

//   // Setup game on entering game stage
//   useEffect(() => {
//     if (stage === 'game') {
//       // Pick a game not used yet
//       const availableGames = allGames.filter(g => !usedGames.includes(g));

//       if (availableGames.length === 0) {
//         // No games left
//         alert("Your clues are over.");
//         setStage('main');
//         setClueAvailable(false);
//         return;
//       }

//       const selectedGame = availableGames[Math.floor(Math.random() * availableGames.length)];
//       setGame(selectedGame);
//       setUsedGames(prev => [...prev, selectedGame]);
//       setGameChances(0);
//       setGameGuess('');
//       setClueAvailable(false);

//       if (selectedGame === 'guessnumber') {
//         const num = Math.floor(Math.random() * 5) + 1; // 1 to 5
//         setGuessNumber(num);
//         setGameMessage('Guess a number between 1 and 5');
//       } else if (selectedGame === 'wordreverse') {
//         const word = mainAnswers[currentLevelId].toLowerCase();
//         setWordToReverse(word);
//         setGameMessage(`Type the reverse of the word: ${word}`);
//       } else if (selectedGame === 'mathquiz') {
//         const a = Math.floor(Math.random() * 10) + 1;
//         const b = Math.floor(Math.random() * 10) + 1;
//         setMathQuestion(`What is ${a} + ${b}?`);
//         setMathAnswer(a + b);
//         setGameMessage(`Answer the math question: ${a} + ${b} = ?`);
//       }
//     }
//   }, [stage, currentLevelId]);

//   // Handle main answer checking
//   const handleCheck = () => {
//     const correctAnswer = mainAnswers[currentLevelId].toLowerCase();
//     if (userAnswer.trim().toLowerCase() === correctAnswer) {
//       setCompleted([...completed, currentLevelId]);
//       setUserAnswer('');
//       setClueAvailable(false);

//       if (currentLevelIndex < tasks.length - 1) {
//         setCurrentLevelIndex(currentLevelIndex + 1);
//         setStage('main');
//       } else {
//         setAllDone(true);
//       }
//     } else {
//       alert('❌ Incorrect answer. Try again.');
//     }
//   };

//   // Handle game guess submission
//   const handleGameGuess = () => {
//     let isCorrect = false;
//     const input = gameGuess.trim().toLowerCase();

//     if (game === 'guessnumber') {
//       const guessNum = Number(input);
//       if (isNaN(guessNum) || guessNum < 1 || guessNum > 5) {
//         setGameMessage('Please enter a number between 1 and 5');
//         return;
//       }
//       if (guessNum === guessNumber) {
//         isCorrect = true;
//       } else if (guessNum < guessNumber) {
//         setGameMessage('Too low, try again.');
//       } else {
//         setGameMessage('Too high, try again.');
//       }
//     } else if (game === 'wordreverse') {
//       if (input === wordToReverse.split('').reverse().join('')) {
//         isCorrect = true;
//       } else {
//         setGameMessage(`Incorrect! Try again.`);
//       }
//     } else if (game === 'mathquiz') {
//       const guessNum = Number(input);
//       if (guessNum === mathAnswer) {
//         isCorrect = true;
//       } else {
//         setGameMessage(`Wrong answer! Try again.`);
//       }
//     }

//     if (isCorrect) {
//       setGameMessage('🎉 Correct! Here is your clue:');
//       setClueAvailable(true);
//     } else {
//       setGameChances(prev => {
//         const next = prev + 1;
//         if (next >= 3) {
//           alert('Sorry, you used all 3 chances. Redirecting back to level.');
//           setStage('main');
//           setClueAvailable(false);
//           return 0;
//         }
//         return next;
//       });
//     }
//     setGameGuess('');
//   };

//   // Exit game and go back to main input
//   const exitGame = () => {
//     setStage('main');
//     setClueAvailable(false);
//     setGameMessage('');
//     setGameGuess('');
//   };

//   return (
//     <div className="app">
//       <h1>Crescentia</h1>

//       {!allDone && stage !== 'game' && (
//         <div className="tasks-container">
//           <div className="task-card main-task">
//             <h2>Level {tasks[currentLevelIndex].id} - Main Level</h2>
//             <p className="task-description">{tasks[currentLevelIndex].description}</p>
//             <input
//               type="text"
//               placeholder="Enter your answer..."
//               value={userAnswer}
//               onChange={e => setUserAnswer(e.target.value)}
//               onKeyDown={e => e.key === 'Enter' && handleCheck()}
//               disabled={stage !== 'main'}
//             />
//             <button onClick={handleCheck} disabled={stage !== 'main'}>
//               Check
//             </button>

//             {/* Show 'Stuck' button only if clues are still available */}
//             {usedGames.length < maxClues && (
//               <button
//                 onClick={() => setStage('game')}
//                 style={{ marginLeft: '10px', backgroundColor: '#ff6600' }}
//               >
//                 Stuck
//               </button>
//             )}

//             {/* Message if no clues left */}
//             {usedGames.length >= maxClues && (
//               <div style={{ marginTop: '15px', fontWeight: '600', color: 'red' }}>
//                 ❗ Your clues are over.
//               </div>
//             )}

//             {/* Show clue if available */}
//             {clueAvailable && (
//               <div style={{ marginTop: '15px', fontWeight: '600', color: '#cc6600' }}>
//                 💡 Clue: {clues[currentLevelId]}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {stage === 'game' && (
//         <div className="task-card game-task" style={{ maxWidth: '400px', margin: 'auto' }}>
//           <h2>Mini Game: {game === 'guessnumber' ? 'Guess the Number' : game === 'wordreverse' ? 'Word Reverse' : 'Math Quiz'}</h2>
//           <p>{gameMessage}</p>
//           {!clueAvailable ? (
//             <>
//               <input
//                 type={game === 'guessnumber' ? 'number' : 'text'}
//                 min={game === 'guessnumber' ? 1 : undefined}
//                 max={game === 'guessnumber' ? 5 : undefined}
//                 placeholder={game === 'guessnumber' ? 'Your guess (1-5)' : 'Your answer'}
//                 value={gameGuess}
//                 onChange={e => setGameGuess(e.target.value)}
//                 onKeyDown={e => e.key === 'Enter' && handleGameGuess()}
//               />
//               <button onClick={handleGameGuess}>Submit</button>
//               <p>Chances used: {gameChances} / 3</p>
//             </>
//           ) : (
//             <>
//               <div style={{ marginTop: '20px', fontWeight: '700' }}>
//                 💡 Clue: {clues[currentLevelId]}
//               </div>
//               <button onClick={exitGame} style={{ marginTop: '20px', backgroundColor: '#28a745' }}>
//                 Back to Level
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       {/* Completed levels */}
//       <div className="completed-tasks">
//         {completed.map((id, idx) => (
//           <div key={idx} className="completed-tag main-completed">
//             ✅ Level {id} - Completed
//           </div>
//         ))}
//       </div>

//       {/* All done */}
//       {allDone && (
//         <div className="final-container">
//           <h2>🎉 Congratulations! You completed all levels.</h2>
//           <p>Thank you for your efforts. Your Password is first letter of all answers!</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App2.css';

const tasks = [
  {
    id: 1,
    description: 'Open the folder named CRESCENTIA on the desktop',
    answer: 'hello world',
    clue: 'Output starts with "Hello" and is a classic first program phrase.',
    gameType: 'guessNumber',
  },
  {
    id: 2,
    description:
      'Unscramble the following words: mplierocr, ryaar, itrcuci, paeh, elentem.',
    scrambledWords: ['mplierocr', 'ryaar', 'itrcuci', 'paeh', 'elentem','The word for this level is : first letter of all the words'],
    unscrambledWords: ['compiler', 'array', 'circuit', 'heap', 'element','cache'],
    answer: 'compilerarraycircuitheapelement',
    clue: 'The first scrambled word is "compiler".',
    gameType: 'mathQuiz',
  },{
  id: 3,
  description: (
    <>
      Crossword Puzzle <a href="https://crosswordcres.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a>
    </>
  ),
  puzzleLink: 'https://crosswordcres.netlify.app/',
  answer: 'fragment',
  clue: 'The answer relates to writing code and starts with "p".',
  gameType: 'reactionTest',
},
{
  id: 4,
  description: (
    <>
      Fix the following C program for summing two numbers:<br />
      <pre style={{ background: '#eee', padding: '10px', borderRadius: '6px' }}>
        {`#include <stdio.h>

int main() {
    int a, b, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b)
    sum = a + b;
    printf("Sum is %d", sum);
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
  gameType: 'codeFix',
},
{
  id: 5,
  description: 'Convert the following binary number to decimal: 101101',
  binaryCode: '101101',
  answer: '45',  // decimal equivalent of binary 101101
  clue: 'Remember, binary 101101 is equal to decimal 45.',
  gameType: 'binaryToDecimal',
},
{
  id: 6,
  description: 'Riddle: I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?',
  answer: 'echo',
  clue: 'It is a phenomenon involving sound reflection.',
  gameType: 'riddle',
},
{
  id: 7,
  description: (
    <>
      Decode this Morse code to find the phrase:<br />
      <code>
        .- .-. - .. ..-. .. -.-. .. .- .-.. / .. -. - . .-.. .-.. .. --. . -. -.-. .
      </code>
    </>
  ),
  answer: 'artificialintelligence',
  clue: 'It\'s a term related to computers and machines mimicking human thinking.',
  gameType: 'morseCode',
},
{
  id: 8,
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
  clue: 'The program prints numbers from 1 to 3 separated by spaces.',
  gameType: 'textInput',
},
{
  id: 9,
  description: (
    <>
      <p>
        Please open the Word document linked below and answer the question inside:
      </p>
      <a
        href="https://example.com/your-document.docx" // Replace with your actual Word doc URL
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Open Word Document
      </a>
    </>
  ),
  answer: '7', // Put the expected answer users should input after reading the doc
  clue: 'Check the document carefully for the answer.',
  gameType: 'textInput',
}









  // Add more tasks here if needed, including levels 4-7, etc.
];

// Game components with 3 attempts logic built-in

function GuessNumberGame({ onWin, onLose, attemptsLeft, setAttemptsLeft }) {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const numberToGuess = 3;

  const handleSubmit = () => {
    if (parseInt(guess) === numberToGuess) {
      setMessage('Correct! You won this game.');
      setTimeout(() => onWin(), 1000);
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      setMessage(`Wrong guess. Attempts left: ${attemptsLeft - 1}`);
      setGuess('');
    }
  };

  return (
    <div className="game-container">
      <h3>Game: Guess the Number (1 to 5)</h3>
      <input
        type="number"
        min="1"
        max="5"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleSubmit} disabled={attemptsLeft <= 0}>
        Submit Guess
      </button>
      {message && <p>{message}</p>}
      <button className="game-quit-btn" onClick={onLose}>
        Quit Game
      </button>
    </div>
  );
}

function MathQuizGame({ onWin, onLose, attemptsLeft, setAttemptsLeft }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (answer.trim() === '5') {
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
      <p>What is 2 + 3 ?</p>
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
      case 'reactionTest':
        return (
          <ReactionTestGame
            onWin={handleGameWin}
            onLose={handleGameLose}
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <h1>Crescentia Treasure Hunt</h1>

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
