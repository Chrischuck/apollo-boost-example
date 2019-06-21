const { Pool } = require('pg');

const connectionString = process.env.POSTGRES_CONNECTION_URI;

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;