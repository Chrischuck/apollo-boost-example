const pgPool = require('../../io/postgres');

const resolver = {
  async todo(_, { title, textData }) {
    
    const client = await pgPool.connect();
    const query = 'INSERT INTO todo(title, textData, createdAt) VALUES($1, $2, $3) RETURNING *';
    const values = [title, textData || '', new Date()];

    const res = await client.query(query, values);
    return res.rows[0];
  }
}

module.exports = resolver