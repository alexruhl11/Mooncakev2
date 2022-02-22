import React from 'react';
import './App.css';
import Questions from './Questions';
import quiz from './quiz.json';

function App() {
  return (
    <div>
      <Questions questionList={quiz} />
    </div>
  );
}

export default App;
