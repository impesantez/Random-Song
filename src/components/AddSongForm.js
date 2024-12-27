import React, { useState } from 'react';

function AddSongForm({ setSongs }) {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    youtubeUrl: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/add-song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSong)
      });
      const updatedSongs = await response.json();
      setSongs(updatedSongs);
      setNewSong({ title: '', artist: '', youtubeUrl: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Título:</label>
      <input type="text" value={newSong.title} onChange={e => setNewSong({ ...newSong, title: e.target.value })} />
      <button type="submit">Agregar Canción</button>
    </form>
  );
}

export default AddSongForm;