-- Database initialization script for Procurement_Db
-- Run this script manually if npm run db:init fails due to connection issues
--
-- To run this script:
-- 1. Open pgAdmin or psql command line
-- 2. Connect to the Procurement_Db database
-- 3. Execute this script

-- Create complaints table if it doesn't exist
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

-- Create index on tracking_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_tracking_id ON complaints(tracking_id);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_status ON complaints(status);

-- Verify the table was created
SELECT
    table_name,
    column_name,
    data_type,
    is_nullable
FROM
    information_schema.columns
WHERE
    table_name = 'complaints'
ORDER BY
    ordinal_position;

-- Display success message
SELECT 'Database tables initialized successfully!' AS status;
