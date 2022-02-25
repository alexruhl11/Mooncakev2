/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './App.css';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const archive = [];
    const keys = Object.keys(localStorage);
    let i = 0;

    while (i < keys.length) {
      const key = keys[i];
      archive.push(`${localStorage.getItem(key)} | ${key}`);
      i += 1;
    }

    archive.sort();
    setLeaders(archive.slice(0, 10));

    console.log(leaders);
  });

  return (
    <ol>
      {leaders.map((leader) => (
        <li>{leader}</li>
      ))}
    </ol>
  );
}

export default Leaderboard;
