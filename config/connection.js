const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'mysql://Victor:Subaru123!!!@localhost:3306/techblog';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'mysql',
});

module.exports = sequelize;
