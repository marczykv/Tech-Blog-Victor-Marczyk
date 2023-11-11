const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./config/connection');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

const sessionStore = new SequelizeStore({ db: sequelize });

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { maxAge: 3600000 } // Session expires after 1 hour of inactivity
  })
);

// Defines user routes and controllers

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
