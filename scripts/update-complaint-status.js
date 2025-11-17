/**
 * Update complaint status for testing
 * Usage: node scripts/update-complaint-status.js <tracking-id> <status>
 * Example: node scripts/update-complaint-status.js GOV-123456 in-progress
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

const trackingId = process.argv[2];
const newStatus = process.argv[3];

const validStatuses = ['pending', 'in-progress', 'resolved'];

async function updateStatus() {
  if (!trackingId || !newStatus) {
    console.error('❌ Usage: node scripts/update-complaint-status.js <tracking-id> <status>');
    console.log('   Valid statuses: pending, in-progress, resolved');
    console.log('   Example: node scripts/update-complaint-status.js GOV-123456 in-progress');
    process.exit(1);
  }

  if (!validStatuses.includes(newStatus)) {
    console.error(`❌ Invalid status: ${newStatus}`);
    console.log('   Valid statuses: pending, in-progress, resolved');
    process.exit(1);
  }

  console.log(`🔄 Updating complaint ${trackingId} to status: ${newStatus}...`);

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database');

    // Check if complaint exists
    const checkQuery = 'SELECT * FROM complaints WHERE tracking_id = $1';
    const checkResult = await client.query(checkQuery, [trackingId]);

    if (checkResult.rows.length === 0) {
      console.error(`❌ No complaint found with tracking ID: ${trackingId}`);
      process.exit(1);
    }

    const oldStatus = checkResult.rows[0].status;

    // Update status
    const updateQuery = `
      UPDATE complaints
      SET status = $1, updated_at = CURRENT_TIMESTAMP
      WHERE tracking_id = $2
      RETURNING *
    `;

    const result = await client.query(updateQuery, [newStatus, trackingId]);
    const complaint = result.rows[0];

    console.log('\n✅ Complaint status updated successfully!');
    console.log('\n' + '='.repeat(60));
    console.log('📋 UPDATED COMPLAINT');
    console.log('='.repeat(60));
    console.log(`Tracking ID: ${complaint.tracking_id}`);
    console.log(`Name: ${complaint.name}`);
    console.log(`Old Status: ${oldStatus}`);
    console.log(`New Status: ${complaint.status}`);
    console.log(`Updated: ${complaint.updated_at}`);
    console.log('='.repeat(60));

  } catch (error) {
    console.error('\n❌ Error updating status:', error.message);
  } finally {
    await client.end();
    console.log('\nConnection closed.');
  }
}

updateStatus();
