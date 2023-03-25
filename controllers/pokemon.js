const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    console.log(pokemon);
    res.render('pokemon/index.ejs' {pokemon})
})

router.get('pokemon/new', (req, res) => {
    
})


router.get('pokemon/:id', (req, res) => {
    
})




module.exports = router;