const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ashish:Ashish123@cluster0.gqpkv.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() =>console.log('DB connected')).catch(err =>console.error(err));

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(5000)


//mongodb+srv://ashish:Ashish123@cluster0.gqpkv.mongodb.net/<dbname>?retryWrites=true&w=majority'