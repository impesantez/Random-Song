const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/add-song', (req, res) => {
  const newSong = req.body;
  const songs = JSON.parse(fs.readFileSync('public/songs.json'));
  songs.push(newSong);
  fs.writeFileSync('public/songs.json', JSON.stringify(songs));
  res.json(songs);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});