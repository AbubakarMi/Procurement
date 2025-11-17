/**
 * Add a test complaint to the database for testing tracking functionality
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

function generateTrackingId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `GOV-${timestamp.toString().slice(-6)}${random}`;
}

async function addTestComplaint() {
  console.log('📝 Adding test complaint to database...');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database');

    const trackingId = generateTrackingId();

    const query = `
      INSERT INTO complaints (
        tracking_id,
        name,
        email,
        complaint_location,
        category,
        description,
        summary,
        status
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;

    const values = [
      trackingId,
      'Test User',
      'test@example.com',
      '123 Test Street, Kano',
      'procurement',
      'This is a test complaint to verify the tracking functionality is working correctly. The complaint describes an issue with a procurement process that needs to be addressed.',
      'Test complaint for tracking functionality verification',
      'pending'
    ];

    const result = await client.query(query, values);
    const complaint = result.rows[0];

    console.log('\n✅ Test complaint added successfully!');
    console.log('\n' + '='.repeat(60));
    console.log('📋 COMPLAINT DETAILS');
    console.log('='.repeat(60));
    console.log(`Tracking ID: ${complaint.tracking_id}`);
    console.log(`Name: ${complaint.name}`);
    console.log(`Email: ${complaint.email}`);
    console.log(`Location: ${complaint.complaint_location}`);
    console.log(`Category: ${complaint.category}`);
    console.log(`Status: ${complaint.status}`);
    console.log(`Created: ${complaint.created_at}`);
    console.log('='.repeat(60));
    console.log('\n✨ You can now use this tracking ID to test the tracking feature:');
    console.log(`\n   ${complaint.tracking_id}\n`);
    console.log('Go to http://localhost:9002/complaints and enter this ID in the Track Complaint section.');

  } catch (error) {
    console.error('\n❌ Error adding test complaint:', error.message);
  } finally {
    await client.end();
    console.log('\nConnection closed.');
  }
}

addTestComplaint();
