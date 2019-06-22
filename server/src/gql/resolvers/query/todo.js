const pgPool = require('../../io/postgres');

const resolver = {
  async todo(_, { id }) {
    const client = await pgPool.connect();
    if (id) {
      const res = await client.query('SELECT * FROM todo WHERE id = $1', [id]);
      return res.rows;
    }
    const res = await client.query('SELECT * FROM todo');
    console.log(res.rows)
    return res.rows;
  }
}

module.exports = resolver