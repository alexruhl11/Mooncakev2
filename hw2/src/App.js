import React from 'react';
import './App.css';
import quiz from './quiz.json';
import Quiz from './Quiz';
// import Login from './Login';

function App() {
  return (
    <div>
      <Quiz questionList={quiz} />
    </div>
  );
}

export default App;
