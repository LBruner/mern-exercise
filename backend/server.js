const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// mongoose.connect(process.env.ATLAS_URI)
mongoose.connect('mongodb://localhost:27017/mern-test')
    .catch((e) => console.log(e))
    .then(() => console.log('Success connecting to db!'));

const exerciseRouter = require('./routes/exercisesRoutes');
const usersRouter = require('./routes/userRoutes');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
    res.send('OIOI')
})

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Serving on port ${port}`)
})