/**
 * Test database connection
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  console.log('🧪 Testing database connection...');
  console.log('Connection String:', process.env.DATABASE_URL ? 'Found' : 'NOT FOUND');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Database connection successful!');

    // Test query
    const result = await client.query('SELECT NOW()');
    console.log('✅ Query test successful:', result.rows[0].now);

    // Check if complaints table exists
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'complaints'
      );
    `);
    console.log('✅ Complaints table exists:', tableCheck.rows[0].exists);

    // Count complaints
    const countResult = await client.query('SELECT COUNT(*) FROM complaints');
    console.log('✅ Total complaints in database:', countResult.rows[0].count);

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('Full error:', error);
  } finally {
    await client.end();
    console.log('\nConnection closed.');
  }
}

testConnection();
