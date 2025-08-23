// import React, { useState } from 'react';
// import tasks from './Tasks.jsx';
// import './App2.css';

// function App() {
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
//   const [stage, setStage] = useState('main');
//   const [userAnswer, setUserAnswer] = useState('');
//   const [completed, setCompleted] = useState([]);
//   const [allDone, setAllDone] = useState(false);

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

//   const subTasks = {
//     1: {
//       question: "What continent is France located in?",
//       answer: "Europe",
//     },
//     2: {
//       question: "What is 5 times 3?",
//       answer: "15",
//     },
//     3: {
//       question: "What color do you get by mixing blue and yellow?",
//       answer: "Green",
//     },
//     4: {
//       question: "Is water freezing point above or below 0°C?",
//       answer: "Below",
//     },
//     5: {
//       question: "Name a famous play by Shakespeare besides Romeo and Juliet.",
//       answer: "Hamlet",
//     },
//     6: {
//       question: "Is Saturn bigger than Jupiter? (yes/no)",
//       answer: "No",
//     },
//     7: {
//       question: "Is Africa a continent? (yes/no)",
//       answer: "Yes",
//     },
//     8: {
//       question: "Do plants produce oxygen? (yes/no)",
//       answer: "Yes",
//     }
//   };

//   const currentTaskId = tasks[currentTaskIndex].id;

//   const handleCheck = () => {
//     let correctAnswer;

//     if (stage === 'main') {
//       correctAnswer = mainAnswers[currentTaskId].toLowerCase();
//     } else {
//       correctAnswer = subTasks[currentTaskId].answer.toLowerCase();
//     }

//     const userInput = userAnswer.trim().toLowerCase();

//     if (userInput === correctAnswer) {
//       setCompleted([...completed, { id: currentTaskId, stage }]);
//       setUserAnswer('');

//       if (stage === 'main') {
//         setStage('sub'); // Show sub-task container beside main
//       } else {
//         if (currentTaskIndex < tasks.length - 1) {
//           setCurrentTaskIndex(currentTaskIndex + 1);
//           setStage('main');
//         } else {
//           setAllDone(true);
//         }
//       }
//     } else {
//       alert('❌ Incorrect answer. Try again.');
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Crescentia</h1>

//       {!allDone && (
//         <div className="tasks-container">
//           {/* Main Task Container */}
//           <div className="task-card main-task">
//             <h2>Task {tasks[currentTaskIndex].id} - Main Task</h2>
//             <p className="task-description">{tasks[currentTaskIndex].description}</p>
//             <input
//               type="text"
//               placeholder="Enter your answer..."
//               value={userAnswer}
//               onChange={e => setUserAnswer(e.target.value)}
//               onKeyDown={e => e.key === 'Enter' && handleCheck()}
//               disabled={stage !== 'main'} // Disable input if sub-task active
//             />
//             <button onClick={handleCheck} disabled={stage !== 'main'}>
//               Check
//             </button>
//           </div>

//           {/* Sub-task Container shown only if stage === 'sub' */}
//           {stage === 'sub' && (
//             <div className="task-card sub-task">
//               <h2>Task {tasks[currentTaskIndex].id} - Logical Sub-task</h2>
//               <p className="task-description">{subTasks[currentTaskId].question}</p>
//               <input
//                 type="text"
//                 placeholder="Enter your answer..."
//                 value={userAnswer}
//                 onChange={e => setUserAnswer(e.target.value)}
//                 onKeyDown={e => e.key === 'Enter' && handleCheck()}
//                 autoFocus
//               />
//               <button onClick={handleCheck}>Check</button>
//             </div>
//           )}
//         </div>
//       )}

//       <div className="completed-tasks">
//         {completed.map(({ id, stage }, idx) => (
//           <div
//             key={idx}
//             className={`completed-tag ${stage === 'main' ? 'main-completed' : 'sub-completed'}`}
//           >
//             ✅ Task {id} - {stage === 'main' ? 'Main Task Completed' : 'Logical Sub-task Completed'}
//           </div>
//         ))}
//       </div>

//       {allDone && (
//         <div className="final-container">
//           <h2>🎉 Congratulations! You completed all tasks and sub-tasks.</h2>
//           <p>Thank you for your efforts. Your Password is first letter of all answers!</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import tasks from './Tasks.jsx';
import './App2.css';

function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [stage, setStage] = useState('main'); // 'main' or 'game'
  const [userAnswer, setUserAnswer] = useState('');
  const [completed, setCompleted] = useState([]);
  const [allDone, setAllDone] = useState(false);

  // All games and used games state
  const allGames = ['guessnumber', 'wordreverse', 'mathquiz'];
  const [usedGames, setUsedGames] = useState([]);

  // Clues used count globally max 3 (since 3 games max)
  const maxClues = 3;

  // Game states
  const [game, setGame] = useState(null);
  const [guessNumber, setGuessNumber] = useState(null);
  const [gameMessage, setGameMessage] = useState('');
  const [gameGuess, setGameGuess] = useState('');
  const [gameChances, setGameChances] = useState(0);
  const [wordToReverse, setWordToReverse] = useState('');
  const [mathQuestion, setMathQuestion] = useState('');
  const [mathAnswer, setMathAnswer] = useState(null);
  const [clueAvailable, setClueAvailable] = useState(false);

  // Clues per level
  const clues = {
    1: "It's the city of the Eiffel Tower.",
    2: "It's the number of wheels on a car.",
    3: "It's the color of the sky on a clear day.",
    4: "A century has this many years.",
    5: "He wrote 'Hamlet'.",
    6: "It's the largest planet in the solar system.",
    7: "It's a lucky number often associated with days in a week.",
    8: "Plants absorb this gas and release oxygen.",
  };

  const mainAnswers = {
    1: 'Paris',
    2: '4',
    3: 'Blue',
    4: '100',
    5: 'Shakespeare',
    6: 'Jupiter',
    7: '7',
    8: 'Carbon dioxide'
  };

  const currentLevelId = tasks[currentLevelIndex].id;

  // Setup game on entering game stage
  useEffect(() => {
    if (stage === 'game') {
      // Pick a game not used yet
      const availableGames = allGames.filter(g => !usedGames.includes(g));

      if (availableGames.length === 0) {
        // No games left
        alert("Your clues are over.");
        setStage('main');
        setClueAvailable(false);
        return;
      }

      const selectedGame = availableGames[Math.floor(Math.random() * availableGames.length)];
      setGame(selectedGame);
      setUsedGames(prev => [...prev, selectedGame]);
      setGameChances(0);
      setGameGuess('');
      setClueAvailable(false);

      if (selectedGame === 'guessnumber') {
        const num = Math.floor(Math.random() * 5) + 1; // 1 to 5
        setGuessNumber(num);
        setGameMessage('Guess a number between 1 and 5');
      } else if (selectedGame === 'wordreverse') {
        const word = mainAnswers[currentLevelId].toLowerCase();
        setWordToReverse(word);
        setGameMessage(`Type the reverse of the word: ${word}`);
      } else if (selectedGame === 'mathquiz') {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setMathQuestion(`What is ${a} + ${b}?`);
        setMathAnswer(a + b);
        setGameMessage(`Answer the math question: ${a} + ${b} = ?`);
      }
    }
  }, [stage, currentLevelId]);

  // Handle main answer checking
  const handleCheck = () => {
    const correctAnswer = mainAnswers[currentLevelId].toLowerCase();
    if (userAnswer.trim().toLowerCase() === correctAnswer) {
      setCompleted([...completed, currentLevelId]);
      setUserAnswer('');
      setClueAvailable(false);

      if (currentLevelIndex < tasks.length - 1) {
        setCurrentLevelIndex(currentLevelIndex + 1);
        setStage('main');
      } else {
        setAllDone(true);
      }
    } else {
      alert('❌ Incorrect answer. Try again.');
    }
  };

  // Handle game guess submission
  const handleGameGuess = () => {
    let isCorrect = false;
    const input = gameGuess.trim().toLowerCase();

    if (game === 'guessnumber') {
      const guessNum = Number(input);
      if (isNaN(guessNum) || guessNum < 1 || guessNum > 5) {
        setGameMessage('Please enter a number between 1 and 5');
        return;
      }
      if (guessNum === guessNumber) {
        isCorrect = true;
      } else if (guessNum < guessNumber) {
        setGameMessage('Too low, try again.');
      } else {
        setGameMessage('Too high, try again.');
      }
    } else if (game === 'wordreverse') {
      if (input === wordToReverse.split('').reverse().join('')) {
        isCorrect = true;
      } else {
        setGameMessage(`Incorrect! Try again.`);
      }
    } else if (game === 'mathquiz') {
      const guessNum = Number(input);
      if (guessNum === mathAnswer) {
        isCorrect = true;
      } else {
        setGameMessage(`Wrong answer! Try again.`);
      }
    }

    if (isCorrect) {
      setGameMessage('🎉 Correct! Here is your clue:');
      setClueAvailable(true);
    } else {
      setGameChances(prev => {
        const next = prev + 1;
        if (next >= 3) {
          alert('Sorry, you used all 3 chances. Redirecting back to level.');
          setStage('main');
          setClueAvailable(false);
          return 0;
        }
        return next;
      });
    }
    setGameGuess('');
  };

  // Exit game and go back to main input
  const exitGame = () => {
    setStage('main');
    setClueAvailable(false);
    setGameMessage('');
    setGameGuess('');
  };

  return (
    <div className="app">
      <h1>Crescentia</h1>

      {!allDone && stage !== 'game' && (
        <div className="tasks-container">
          <div className="task-card main-task">
            <h2>Level {tasks[currentLevelIndex].id} - Main Level</h2>
            <p className="task-description">{tasks[currentLevelIndex].description}</p>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCheck()}
              disabled={stage !== 'main'}
            />
            <button onClick={handleCheck} disabled={stage !== 'main'}>
              Check
            </button>

            {/* Show 'Stuck' button only if clues are still available */}
            {usedGames.length < maxClues && (
              <button
                onClick={() => setStage('game')}
                style={{ marginLeft: '10px', backgroundColor: '#ff6600' }}
              >
                Stuck
              </button>
            )}

            {/* Message if no clues left */}
            {usedGames.length >= maxClues && (
              <div style={{ marginTop: '15px', fontWeight: '600', color: 'red' }}>
                ❗ Your clues are over.
              </div>
            )}

            {/* Show clue if available */}
            {clueAvailable && (
              <div style={{ marginTop: '15px', fontWeight: '600', color: '#cc6600' }}>
                💡 Clue: {clues[currentLevelId]}
              </div>
            )}
          </div>
        </div>
      )}

      {stage === 'game' && (
        <div className="task-card game-task" style={{ maxWidth: '400px', margin: 'auto' }}>
          <h2>Mini Game: {game === 'guessnumber' ? 'Guess the Number' : game === 'wordreverse' ? 'Word Reverse' : 'Math Quiz'}</h2>
          <p>{gameMessage}</p>
          {!clueAvailable ? (
            <>
              <input
                type={game === 'guessnumber' ? 'number' : 'text'}
                min={game === 'guessnumber' ? 1 : undefined}
                max={game === 'guessnumber' ? 5 : undefined}
                placeholder={game === 'guessnumber' ? 'Your guess (1-5)' : 'Your answer'}
                value={gameGuess}
                onChange={e => setGameGuess(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleGameGuess()}
              />
              <button onClick={handleGameGuess}>Submit</button>
              <p>Chances used: {gameChances} / 3</p>
            </>
          ) : (
            <>
              <div style={{ marginTop: '20px', fontWeight: '700' }}>
                💡 Clue: {clues[currentLevelId]}
              </div>
              <button onClick={exitGame} style={{ marginTop: '20px', backgroundColor: '#28a745' }}>
                Back to Level
              </button>
            </>
          )}
        </div>
      )}

      {/* Completed levels */}
      <div className="completed-tasks">
        {completed.map((id, idx) => (
          <div key={idx} className="completed-tag main-completed">
            ✅ Level {id} - Completed
          </div>
        ))}
      </div>

      {/* All done */}
      {allDone && (
        <div className="final-container">
          <h2>🎉 Congratulations! You completed all levels.</h2>
          <p>Thank you for your efforts. Your Password is first letter of all answers!</p>
        </div>
      )}
    </div>
  );
}

export default App;
