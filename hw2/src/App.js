import React from 'react';
import './App.css';
// import Questions from './Questions';
import quiz from './quiz.json';
import Quiz from './Quiz';

function App() {
  return (
    <div>
      <Quiz questionList={quiz} />
    </div>
  );
}

export default App;
