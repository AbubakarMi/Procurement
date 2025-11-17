/**
 * List all complaints in the database
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function listComplaints() {
  console.log('📋 Listing all complaints...\n');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database\n');

    const query = 'SELECT * FROM complaints ORDER BY created_at DESC';
    const result = await client.query(query);

    if (result.rows.length === 0) {
      console.log('No complaints found in database.');
      return;
    }

    console.log('============================================================');
    console.log(`Found ${result.rows.length} complaint(s):`);
    console.log('============================================================\n');

    result.rows.forEach((complaint, index) => {
      console.log(`${index + 1}. ${complaint.tracking_id}`);
      console.log(`   Name: ${complaint.name}`);
      console.log(`   Email: ${complaint.email}`);
      console.log(`   Status: ${complaint.status}`);
      console.log(`   Category: ${complaint.category}`);
      console.log(`   Created: ${complaint.created_at}`);
      console.log(`   Updated: ${complaint.updated_at}`);
      console.log('');
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.end();
    console.log('Connection closed.');
  }
}

listComplaints();
