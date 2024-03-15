const { Pool } = require('pg');

// Configure the PostgreSQL connection
const pool = new Pool({
  user: 'postgres', // Change this if you have a different username
  host: 'db', // Use the service name defined in docker-compose.yaml
  database: 'example', // Change this to your database name
  password: 'MyFirstDataBasePassword',
  port: 5432, // Default PostgreSQL port
});

// Insert mock data into the database
async function insertMockData() {
    try {
      const client = await pool.connect();
      await client.query('BEGIN');
  
      for (const row of mockData) {
        const { id, username, email } = row;
        await client.query('INSERT INTO users (id, username, email) VALUES ($1, $2, $3)', [id, username, email]);
      }
  
      await client.query('COMMIT');
      console.log('Mock data inserted successfully');
    } catch (err) {
      console.error('Error inserting mock data:', err);
    } finally {
      pool.end();
    }
  }