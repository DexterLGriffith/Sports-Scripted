const express = require('express');
const path = require('path');
const session = require('express-session');
const fs = require('fs');
const routes = require('./controllers');
const expresshbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/utils/helpers');
const exphbs = require('express-handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// we do not need uuid here but keeping it here in case we need it
// const uuid = require('./helpers/uuid');
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');





app.use(express.json());
app.use(express.urlencoded({ extended: true })); // what is extended: true just cannot recall it
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
