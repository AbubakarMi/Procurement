/**
 * Direct database initialization script (no connection pooling)
 * Use this if the main init-db.ts fails due to connection limit issues
 *
 * Usage: node scripts/direct-init-db.js
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function main() {
  console.log('🚀 Starting direct database initialization...');

  const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:root@localhost:5432/Procurement_Db',
  });

  try {
    // Connect to database
    console.log('Connecting to PostgreSQL...');
    await client.connect();
    console.log('✅ Connected successfully!');

    // Create complaints table
    console.log('Creating complaints table...');
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
    console.log('✅ Complaints table created!');

    // Create index on tracking_id
    console.log('Creating index on tracking_id...');
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_tracking_id ON complaints(tracking_id);
    `);
    console.log('✅ Index on tracking_id created!');

    // Create index on status
    console.log('Creating index on status...');
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_status ON complaints(status);
    `);
    console.log('✅ Index on status created!');

    console.log('\n✅ Database initialized successfully!');
    console.log('\nThe following table was created:');
    console.log('  - complaints (with indexes on tracking_id and status)');
    console.log('\nYou can now submit complaints through the application.');

    // Verify table creation
    const result = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'complaints';
    `);

    if (result.rows.length > 0) {
      console.log('\n✅ Verified: complaints table exists in database');
    }

  } catch (error) {
    console.error('\n❌ Error initializing database:', error.message);
    console.error('\nPlease try the following:');
    console.error('1. Restart PostgreSQL service (requires admin privileges)');
    console.error('2. Use pgAdmin to execute scripts/create-database.sql');
    console.error('3. Check DATABASE_SETUP.md for detailed instructions');
    process.exit(1);
  } finally {
    // Close the connection
    await client.end();
    console.log('\nConnection closed.');
  }
}

main();
