const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    console.log(pokemon);
    res.render('pokemon/index.ejs', {pokemon})
})

// router.get('pokemon/new', (req, res) => {
// })

// router.get('pokemon/:id', (req, res) => {    
// })

// router.post('/pokemon', (req, res) => {
// })

// router.get('/pokemon/:id/edit', (req, res) => {
// })

// router.put('/pokemon/:id', (req, res) => {
// })

// router.get('/pokemon/:id/delete', (req, res) => {
// })

// router.delete('/pokemon/:id', (req, res) => {

// })

module.exports = router;