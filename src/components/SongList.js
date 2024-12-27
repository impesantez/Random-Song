import React, { useState } from 'react';

function SongList({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setSelectedSong(songs[randomIndex]);
  };

  return (
    <div>
      <button onClick={handleRandomSong}>Obtener Canción Aleatoria</button>
      {selectedSong && (
        <div>
          <h2>{selectedSong.title}</h2>
          <p>Artista: {selectedSong.artist}</p>
          <a href={selectedSong.youtubeUrl} target="_blank" rel="noopener noreferrer">Ver en YouTube</a>
        </div>
      )}
    </div>
  );
}

export default SongList;