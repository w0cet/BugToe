const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

// Your secret codes (only stored on the server)
const codes = {
  "4654364331": "https://www.bugtoe.com",
  "459867": "https://www.bugtoe.com",
  "056907": "https://www.bugtoe.com"
};

app.post('/check', (req, res) => {
  const code = (req.body.code || "").trim();
  const destination = codes[code];

  if (!destination) {
    return res.redirect('https://www.bugtoe.com/Code'); // wrong code → send back to main page
  }

  return res.redirect(destination); // correct code → go to mapped page
});

app.listen(3000);
