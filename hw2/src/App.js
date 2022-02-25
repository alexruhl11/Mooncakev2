import React from 'react';
import './App.css';
import quiz from './quiz.json';
import Quiz from './Quiz';
// import Login from './Login';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <div>
      <Quiz questionList={quiz} />
    </div>
  );
}

//Leaderboard leadersList

export default App;
