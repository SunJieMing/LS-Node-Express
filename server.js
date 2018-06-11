const posts = require('./data/helpers/postDb.js');
const users = require('./data/helpers/userDb.js');
const tags = require('./data/helpers/tagDb.js');
const express = require('express');
const cors = require('cors');
const server = require('express');
const port = 5000;

server.use(express.json());
server.use(cors({orgin: 'http://localhost:3000'}));

server.get('/api/users')
server.get('/api/users/:id', (req, res) => {

})

server.post('/api/users', (req, res) => {

})

server.delete('/api/users/:id', (req, res) => {

})

server.get('/api/posts', (req, res) => {

})

server.get('/api/posts/:id', (req, res) => {

})

server.post('/api/posts', (req, res) => {

})

server.put('/api/posts/:id', (req, res) => {

})

server.delete('/api/posts/:id', (req, res) => {

})

server.get('/api/tags', (req, res) => {

})

server.get('/api/tags/:id', (req, res) => {

})

server.post('/api/tags', (req, res) => {

})

server.put('/api/tags/:id', (req, res) => {

})

server.delete('/api/tags/:id', (req, res) => {

})

server.listen(port, () => console.log (`Server running on port ${port}`));