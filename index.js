//server setup

const express = require('express');

const postDB = require('./data/helpers/postDb');
const userDB = require('./data/helpers/userDb');

const server = express();
const PORT = 4000;

//middleware

server.use(express.json());

//custom middleware

server.use((req, res, next) => {
    const name = req.body.name;
    if(name) {
        req.body.name = name.toUpperCase();
    } 
    next();
})

//endpoints

server.get('/api/posts', (req, res) => {
    postDB.get()
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            res
                .status(500)
                .json({ error: "Posts could not be retreived." })
        })
})

server.get('/api/users', (req, res) => {
    userDB.get()
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            res
                .status(500)
                .json({ error: "Users could not be retreived." })
        })
})

server.get('/api/posts/:id', (req, res) => {
    postDB.getPostTags(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            res
                .status(500)
                .json({ error: "The specified post could not be retreived." })
        })
})

server.get('/api/users/:id', (req, res) => {
    userDB.getUserPosts(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            res
                .status(500)
                .json({ error: "The specified users information could not be retreived." })
        })
})


//listen

server.listen(PORT, err => {
    console.log(`listening on port ${PORT}`)
})