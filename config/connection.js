const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'mysql://localhost/techblog';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'mysql',
});

module.exports = { sequelize };
