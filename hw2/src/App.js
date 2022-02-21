import React from 'react';
import './App.css';
import Questions from './Questions';
import questionList from './Questions.json';

function App() {
  return (
    <div className="App">
      hello
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg" alt="hi" />
      <Questions questionList={questionList} />
    </div>
  );
}

export default App;
