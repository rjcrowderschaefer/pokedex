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
    res.render('pokemon/show.ejs', {individualPokemon: individualPokemon})
})

router.post('', (req, res) => {
    let newPokemon = req.body;
    console.log(pokemon)
    console.log(newPokemon);
    let finalPokemon = {
        name: newPokemon.name,
        misc: {
            height: newPokemon.height,
            weight: newPokemon.weight,
            abilities: {
                normal: newPokemon.normal,
                hidden: newPokemon.hidden,
            }
        },
        stats: {
            hp: newPokemon.hp,
            attack: newPokemon.attack,
            defense: newPokemon.defense,
            spattack: newPokemon.spattack,
            spdefense: newPokemon.spdefense,
            speed: newPokemon.speed,
        },
        img: newPokemon.img,
    }
    pokemon.push(finalPokemon);
    res.redirect('/pokemon');
    pokemon.forEach(pokemon1 => {
        console.log(pokemon1)    
    })
})

router.get(':/id/edit', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('pokemon/edit.ejs', {pokemonToBeEdited, idx: req.params.id});
})

router.put('/:id/edit', (req, res) => {
    let updatedPokemon = req.body;
    pokemon[req.params.id] = updatedPokemon;
    res.redirect(`/pokemon/${req.params.id}`);
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