const express = require('express');
const app = express();
const PORT = 3000;



app.get("/", function(req, res) {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
  });

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Ovo je poruka sa servera!',
    timestamp: new Date(),
    ime: 'Petar',
    prezime: 'Petrovic'
  };

  
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server je pokrenut na portu ${PORT}`);
});
