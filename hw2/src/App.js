import React from 'react';
import './App.css';
// import { useNavigate } from 'react-router-dom';
import quiz from './quiz.json';
import Quiz from './Quiz';
// import Login from './Login';

function App() {
  // const navigate = useNavigate();
  return (
    <Quiz questionList={quiz} />
    /* <div>
      <Login navigation={navigate} questionList={quiz} />
    </div> */
  );
}

export default App;
