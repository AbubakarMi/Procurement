/**
 * Database initialization script
 * Run this script to create the database and tables
 *
 * Usage: npx tsx scripts/init-db.ts
 */

import pool, { initializeDatabase } from '../src/lib/db';

async function main() {
  console.log('🚀 Starting database initialization...');

  try {
    await initializeDatabase();
    console.log('✅ Database initialized successfully!');
    console.log('\nThe following table was created:');
    console.log('  - complaints (with indexes on tracking_id and status)');
    console.log('\nYou can now submit complaints through the application.');

    // Close the pool to allow the script to exit
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    await pool.end();
    process.exit(1);
  }
}

main();
