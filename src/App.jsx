import React, { useState } from 'react';
import tasks from './Tasks.jsx';
import './App2.css';

function App() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [stage, setStage] = useState('main');
  const [userAnswer, setUserAnswer] = useState('');
  const [completed, setCompleted] = useState([]);
  const [allDone, setAllDone] = useState(false);

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

  const subTasks = {
    1: {
      question: "What continent is France located in?",
      answer: "Europe",
    },
    2: {
      question: "What is 5 times 3?",
      answer: "15",
    },
    3: {
      question: "What color do you get by mixing blue and yellow?",
      answer: "Green",
    },
    4: {
      question: "Is water freezing point above or below 0°C?",
      answer: "Below",
    },
    5: {
      question: "Name a famous play by Shakespeare besides Romeo and Juliet.",
      answer: "Hamlet",
    },
    6: {
      question: "Is Saturn bigger than Jupiter? (yes/no)",
      answer: "No",
    },
    7: {
      question: "Is Africa a continent? (yes/no)",
      answer: "Yes",
    },
    8: {
      question: "Do plants produce oxygen? (yes/no)",
      answer: "Yes",
    }
  };

  const currentTaskId = tasks[currentTaskIndex].id;

  const handleCheck = () => {
    let correctAnswer;

    if (stage === 'main') {
      correctAnswer = mainAnswers[currentTaskId].toLowerCase();
    } else {
      correctAnswer = subTasks[currentTaskId].answer.toLowerCase();
    }

    const userInput = userAnswer.trim().toLowerCase();

    if (userInput === correctAnswer) {
      setCompleted([...completed, { id: currentTaskId, stage }]);
      setUserAnswer('');

      if (stage === 'main') {
        setStage('sub'); // Show sub-task container beside main
      } else {
        if (currentTaskIndex < tasks.length - 1) {
          setCurrentTaskIndex(currentTaskIndex + 1);
          setStage('main');
        } else {
          setAllDone(true);
        }
      }
    } else {
      alert('❌ Incorrect answer. Try again.');
    }
  };

  return (
    <div className="app">
      <h1>🧩 Multi-Stage Task Solver</h1>

      {!allDone && (
        <div className="tasks-container">
          {/* Main Task Container */}
          <div className="task-card main-task">
            <h2>Task {tasks[currentTaskIndex].id} - Main Task</h2>
            <p className="task-description">{tasks[currentTaskIndex].description}</p>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCheck()}
              disabled={stage !== 'main'} // Disable input if sub-task active
            />
            <button onClick={handleCheck} disabled={stage !== 'main'}>
              Check
            </button>
          </div>

          {/* Sub-task Container shown only if stage === 'sub' */}
          {stage === 'sub' && (
            <div className="task-card sub-task">
              <h2>Task {tasks[currentTaskIndex].id} - Logical Sub-task</h2>
              <p className="task-description">{subTasks[currentTaskId].question}</p>
              <input
                type="text"
                placeholder="Enter your answer..."
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCheck()}
                autoFocus
              />
              <button onClick={handleCheck}>Check</button>
            </div>
          )}
        </div>
      )}

      <div className="completed-tasks">
        {completed.map(({ id, stage }, idx) => (
          <div
            key={idx}
            className={`completed-tag ${stage === 'main' ? 'main-completed' : 'sub-completed'}`}
          >
            ✅ Task {id} - {stage === 'main' ? 'Main Task Completed' : 'Logical Sub-task Completed'}
          </div>
        ))}
      </div>

      {allDone && (
        <div className="final-container">
          <h2>🎉 Congratulations! You completed all tasks and sub-tasks.</h2>
          <p>Thank you for your efforts. Your Password is first letter of all answers!</p>
        </div>
      )}
    </div>
  );
}

export default App;