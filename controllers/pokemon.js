const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokemon');

router.get('', (req, res) => {
    res.render('pokemon/index.ejs', {pokemon})
})

router.get('/new', (req, res) => {
    res.render('pokemon/new.ejs')
})

router.get('/:id', (req, res) => {    
    const individualPokemon = pokemon[req.params.id];
    res.render('pokemon/show.ejs', {individualPokemon})
})

router.post('', (req, res) => {
    let newPokemon = req.body;
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

// router.get('/pokemon/:id/edit', (req, res) => {
// })

// router.put('/pokemon/:id', (req, res) => {
// })

// router.get('/pokemon/:id/delete', (req, res) => {
// })

// router.delete('/pokemon/:id', (req, res) => {

// })

module.exports = router;