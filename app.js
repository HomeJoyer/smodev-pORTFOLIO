const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout.js');
const models = require('./models');
const wikiRouter = require('./routes/wiki.js');
const userRouter = require('./routes/user.js');
const mainPage = require('./views/main.js');
const pages = require('./views/index.js');

app.use(morgan('dev'));
app.use(express.static('./static')); //reads css and html files -- or any static files

app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res, next) => {
  res.send(layout(mainPage(pages)));
});

models.db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 1337;

const init = async () => {
  await models.db.sync({ force: true });

  app.listen