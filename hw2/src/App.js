import React from 'react';
import './App.css';
// import { useNavigate } from 'react-router-dom';
import quiz from './quiz.json';

function App() {
  // const navigate = useNavigate();
  return (
    <div>
      <Login questionList={quiz} />
    </div>
  );
}

//Leaderboard leadersList

export default App;
