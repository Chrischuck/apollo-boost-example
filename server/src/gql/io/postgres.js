const Sequelize = require('sequelize');

const connectionString = process.env.POSTGRES_CONNECTION_URI;

const sequelize = new Sequelize(connectionString, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true
  }
});

module.exports = sequelize;