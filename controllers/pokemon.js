const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    res.render('pokemon/index.ejs', {pokemon})
})

// router.get('pokemon/new', (req, res) => {
// })

router.get('/:id', (req, res) => {    
    const individualPokemon = pokemon[req.params.id];
    res.render('pokemon/show.ejs', {individualPokemon})
})

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