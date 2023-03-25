const express = require('express')
const app = express();
const PORT = 4000;


// Begin Middleware
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));

app.use(methodOverride('_method'))
// End Middleware

app.get('/', (req, res) => {
    res.send('This is working')
})




app.listen(PORT, () => {
    console.log(`$ 💲 ＄ Server is listening to PORT ${PORT} 🤑 💵 💰`)
})