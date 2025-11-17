/**
 * Clear all complaints from the database (use with caution!)
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function clearAllComplaints() {
  console.log('⚠️  WARNING: This will delete ALL complaints from the database!\n');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database\n');

    // Count complaints first
    const countQuery = 'SELECT COUNT(*) as total FROM complaints';
    const countResult = await client.query(countQuery);
    const total = countResult.rows[0].total;

    if (total === '0') {
      console.log('No complaints to delete.');
      return;
    }

    console.log(`Found ${total} complaint(s) to delete.\n`);

    // Delete all complaints
    const deleteQuery = 'DELETE FROM complaints';
    await client.query(deleteQuery);

    console.log('✅ All complaints deleted successfully!\n');
    console.log('============================================================');
    console.log(`Deleted ${total} complaint(s) from the database.`);
    console.log('============================================================');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.end();
    console.log('\nConnection closed.');
  }
}

clearAllComplaints();
