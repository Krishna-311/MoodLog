import React, { useState } from 'react';

const moods = ['Joy', 'Stress', 'Spiritual', 'Love', 'Hopeful', 'Confused'];

function NewEntry() {
  const [mood, setMood] = useState('');
  const [text, setText] = useState('');

  const handleSave = () => {
    if (!mood || !text) return alert('Please select a mood and write something!');
    const entries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
    const newEntry = {
      id: Date.now(),
      mood,
      text,
      date: new Date().toLocaleString()
    };
    entries.push(newEntry);
    localStorage.setItem('moodEntries', JSON.stringify(entries));
    setMood('');
    setText('');
    alert('Entry saved!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>New Entry</h2>
      <div>
        <label>Select Mood: </label>
        <select value={mood} onChange={e => setMood(e.target.value)}>
          <option value="">--Select--</option>
          {moods.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <textarea
        rows="10"
        cols="60"
        placeholder="Write your thoughts here..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{ marginTop: '1rem', width: '100%' }}
      ></textarea>
      <button onClick={handleSave} style={{ marginTop: '1rem' }}>Save Entry</button>
    </div>
  );
}

export default NewEntry;
