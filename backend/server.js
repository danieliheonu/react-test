const express = require('express');
const dotenv = require('dotenv');
const { mongoose } = require('mongoose');
const cors = require('cors');
const path = require('path')

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

mongoose.connect('mongodb+srv://dbuser:fdSh7E3dlyow43e0@react-tutorial.ucrco.mongodb.net/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use('/api/v1/transactions', require('./routes/transactions'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../frontend/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html')))
}

PORT='5000'

app.listen(PORT, () => {
    try {
        console.log(`Server listening on port ${PORT}`)
    } catch (err) {
        console.log(err);
    }
})