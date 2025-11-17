/**
 * Test the complaint statistics function
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function testStats() {
  console.log('📊 Testing complaint statistics...\n');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database\n');

    const query = `
      SELECT
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'pending') as pending,
        COUNT(*) FILTER (WHERE status = 'in-progress') as in_progress,
        COUNT(*) FILTER (WHERE status = 'resolved') as resolved
      FROM complaints
    `;

    const result = await client.query(query);
    const stats = result.rows[0];

    console.log('============================================================');
    console.log('📊 COMPLAINT STATISTICS');
    console.log('============================================================');
    console.log(`Total Submitted: ${stats.total}`);
    console.log(`Pending: ${stats.pending}`);
    console.log(`In Progress: ${stats.in_progress}`);
    console.log(`Resolved: ${stats.resolved}`);
    console.log('============================================================\n');

    // Also show the breakdown by category
    const categoryQuery = `
      SELECT category, COUNT(*) as count
      FROM complaints
      GROUP BY category
      ORDER BY count DESC
    `;

    const categoryResult = await client.query(categoryQuery);

    if (categoryResult.rows.length > 0) {
      console.log('📂 BREAKDOWN BY CATEGORY');
      console.log('============================================================');
      categoryResult.rows.forEach(row => {
        console.log(`${row.category}: ${row.count}`);
      });
      console.log('============================================================\n');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.end();
    console.log('Connection closed.');
  }
}

testStats();
