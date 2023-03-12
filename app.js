require("dotenv").config()
const express = require("express");
const { PORT, HOST } = require("./constants/index");
const { getUsers, getUser, getUserPosts } = require("./controllers/UserController");
const { getPosts, getPost, getPostComments } = require("./controllers/PostController");
const { getComments, getComment } = require("./controllers/CommentsController")

const app = express();


app.get("/users", getUsers);
app.get("/users/:id", getUser);
app.get("/users/:id/posts", getUserPosts)
app.get("/posts", getPosts)
app.get("/posts/:id", getPost)
app.get("/posts/:id/comments", getPostComments)
app.get("/comments", getComments)
app.get("/comments/:id", getComment)


app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`)
})