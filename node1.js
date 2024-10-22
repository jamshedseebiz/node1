const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
const users = [
  { email: "jamshed@example.com", password: "password12" },
  { email: "jami@example.com", password: "password123" },
  { email: "khan@example.com", password: "password1234" },
  { email: "baloch@example.com", password: "password12345" }

];
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      return res.status(200).json({
        message: "Login successful",
        token: "abcccc"
      });
    }
  }
  return res.status(401).json({
    message: "Invalid username or password"
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});