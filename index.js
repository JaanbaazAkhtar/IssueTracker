require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8000;

const uri = process.env.DB_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => {
    console.log('error in connecting to db');
})
db.once('open', () => {
    console.log('Connected to db');
})


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false
}));
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.set('view engine', 'ejs');


app.use('/api', require('./routes'));

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server listening to PORT: ${PORT}`);
})

