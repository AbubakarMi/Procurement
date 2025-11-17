import { Pool } from 'pg';

// Create a PostgreSQL connection pool with connection limits
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // Set to true if using SSL
  max: 5, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 10000, // How long to wait when connecting a new client
});

// Test the connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export default pool;

/**
 * Initialize database tables
 */
export async function initializeDatabase() {
  const client = await pool.connect();

  try {
    // Create complaints table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS complaints (
        id SERIAL PRIMARY KEY,
        tracking_id VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        complaint_location TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        summary TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create index on tracking_id for faster lookups
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_tracking_id ON complaints(tracking_id);
    `);

    // Create index on status for filtering
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_status ON complaints(status);
    `);

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
  }
}
