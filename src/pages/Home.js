import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Welcome to MoodLog</h2>
      <p>Start your emotional journaling journey today.</p>
      <Link to="/new">
        <button>Start Writing</button>
      </Link>
    </div>
  );
}

export default Home;
