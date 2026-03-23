const express = require("express");
const app = express();
app.use(express.json())
const users = ["1"];
const passs = ["1"];
const usernames = [];
const passwords = [];
const accounts = [];

app.get("/", (req, res) => {
    res.sendFile("/Users/mukundmadhav/Desktop/chat/index.html");
})

app.post("/submit", (req, res) => {
    const account = req.body.account.toLowerCase();
    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    accounts.push(account);
    usernames.push(username);
    passwords.push(password)
    res.json({
        Message: "User Registered Successfully"
    })
})
app.get("/show", (req, res) => {
    res.json({
        accounts, usernames, passwords: passwords
    })
})


// signin
app.get("/api/signin", (req, res) => {
    res.json({ users, passs });
})

app.get("/signin", (req, res) => {
    res.sendFile("/Users/mukundmadhav/Desktop/chat/signin.html");
})

//signup
app.post("/api/signup", (req, res) => {
    const user = req.body.user.toLowerCase().trim();
    const pass = req.body.pass.trim();
    const userExist = users.find((u) => u === user);
    if (userExist) {
        return res.status(400).json({ //we used return to exit!
            "message": "User already exists"
        })
    }

    users.push(user);
    passs.push(pass);

    res.json({
        "message": "Signup successful"
    })
})

app.get("/signup", (req, res) => {
    res.sendFile("/Users/mukundmadhav/Desktop/chat/signup.html");
})


app.listen(3000, () => {
    console.log("server is running on port 3000");
})