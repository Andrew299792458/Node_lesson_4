require("dotenv").config()
const express = require("express");
const { PORT, HOST } = require("./constants/index");
const { getUsers,getUser } = require("./controllers/UserController");
const app = express();


app.get("/users", getUsers);
app.get("/users/:id", getUser);


app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`)
})