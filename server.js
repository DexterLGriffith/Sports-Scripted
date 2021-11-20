const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = require('./controllers');
const expresshbs = require('express-handlebars');
const expressSession = require('express-session');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(expressSession.Store);

// we do not need uuid here but keeping it here in case we need it
// const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();
const hbs = expresshbs.create();
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
};
app.use(expressSession(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');





app.use(express.json());
app.use(express.urlencoded({ extended: true })); // what is extended: true just cannot recall it

app.use(express.static('public'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
})

