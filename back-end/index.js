const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');

const users = [
    {id: 1, username: 'hien', password: 'hien1'},
    {id: 2, username: 'hoang', password: 'hoang1'},
    {id: 3, username: 'tcdb', password: 'tcdb1'}
]

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use(express.json())

app.get('/hello', (req, res) => {
    res.send("world!");
});

app.post("/login", (req, res) => {
    // console.log("Received login request:", req.body);

    const username = req.body.username;
    const password = req.body.password;


    const user = users.find((u) => u.username === username && u.password === password)

    if (!user) {
        res.status(401).send("Wrong username or password")
        return;
    }

    const token = jwt.sign(
        {
            username: user.username,
        },
        "MY_SECRET_KEY",
        {
            expiresIn: 3600,
        }
    )
    res.json ({
        user: {username: user.username},
        token: token,
    }
    )
})


app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).send("jwt missing");
      return;
    }
    const jwtString = token.split(" ")[1];
    jwt.verify(jwtString, "MY_SECRET_KEY", (err, decoded) => {
      if (err) {
        res.status(401).send("invalid jwt");
      } else {
        const username = decoded.username;
        const user = users.find((u) => u.username === username);
        if (user) {
          res.json({ username: user.username, photoUrl: user.photoUrl });
        } else {
          res.status(401).send("User not found");
        }
      }
    });
  });

app.listen(5001, () => {
    console.log("App listening on port 5001");
})