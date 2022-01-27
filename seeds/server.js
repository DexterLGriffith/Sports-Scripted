const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = require('./controllers');
const expresshbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret:'super secret',
  cookie:{},
  resave:false,
  saveUninitialized:true,
  store:new SequelizeStore ({
    db:sequelize
  })

};
// we do not need uuid here but keeping it here in case we need it
// const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();
const hbs = expresshbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');





app.use(express.json());
app.use(express.urlencoded({ extended: true })); // what is extended: true just cannot recall it


app.use(express.static('public'));
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
