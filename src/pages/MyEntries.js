import React, { useEffect, useState } from 'react';

function MyEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('moodEntries') || '[]');
    setEntries(saved.reverse());
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map(entry => (
          <div key={entry.id} style={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <strong>{entry.mood}</strong> - <em>{entry.date}</em>
            <p style={{ marginTop: '0.5rem' }}>{entry.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyEntries;
