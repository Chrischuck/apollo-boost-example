const Todo = require('../../models/todo');

const resolver = {
  async todo(_, { id, limit, offset }) {
    const options = {};
    console.log(limit)
    if (limit) {
      options.limit = limit;
    }

    if (offset) {
      options.offset = offset;
    }

    if (id) {
      options.where = { id };
    }

    const res = await Todo.findAll(options);
    const todos = res.map(t => t.dataValues);
    return todos;
  }
}

module.exports = resolver