const Todo = require('../../models/todo');

const resolver = {
  async todo(_, { title, textData }) {

    const todo = await Todo.create({ title, textData })

    return todo
  }
}

module.exports = resolver