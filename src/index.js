import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SongList from './components/SongList';
import AddSongForm from './components/AddSongForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('songs.json')
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <div>
      <h1>Canción Aleatoria</h1>
      <AddSongForm setSongs={setSongs} />
      <SongList songs={songs} />
    </div>
  );
}

root.render(<App />);