const express = require('express')
const app = express();
const PORT = 4001;
const methodOverride = require('method-override');
const pokemonController = require('./controllers/pokemon')

// Begin Middleware
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));

app.use(methodOverride('_method'))

// End Middleware

app.get('/', (req, res) => {
    res.send('This is working')
})

app.use('/pokemon', pokemonController);


app.listen(PORT, () => {
    console.log(`$ 💲 ＄ Server is listening to PORT ${PORT} 🤑 💵 💰`)
})