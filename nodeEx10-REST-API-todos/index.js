const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 3000;

const app = express();

// to set configurations for future template
const hbs = exphbs.create({ 
  defaultLayout: 'main',
  extname: 'hbs'
});

// create engine for rendering the pages with the key 'hbs'
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views'); // all pages goes from the folder 'views'

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(todoRoutes);

async function start() {
  try {
    await mongoose.connect('mongodb+srv://Volodymyr:7675502@cluster0.wayd2.mongodb.net/todos', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log('Server has been started...');
    })
  } catch(e) {
    console.log(e);
  }
}

start();