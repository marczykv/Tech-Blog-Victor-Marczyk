require('dotenv').config(); 

const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionStore = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'BOGUS_SECRET_CHANGEME',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { maxAge: 3600000 } // 1 hour
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
