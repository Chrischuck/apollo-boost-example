const Sequelize = require('sequelize');

const sequelize = require('../io/postgres');

const Todo = sequelize.define('todo', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  textData: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
})

module.exports = Todo;