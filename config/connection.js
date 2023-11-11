const Sequelize = require('sequelize');

const sequelize = new Sequelize('techblog', 'Victor', 'Subaru123!!!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
