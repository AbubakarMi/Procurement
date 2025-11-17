# PostgreSQL Database Setup Guide

## Issue: "Too Many Clients" Error

If you encounter the error `error: sorry, too many clients already (code: 53300)`, this means PostgreSQL has reached its maximum connection limit.

## Solution Options

### Option 1: Restart PostgreSQL Service (Recommended)

**For Windows (requires Administrator privileges):**

1. Open Command Prompt as Administrator (Right-click > Run as administrator)
2. Run the following commands:
   ```bash
   net stop postgresql-x64-17
   net start postgresql-x64-17
   ```
3. Then run the initialization script:
   ```bash
   npm run db:init
   ```

### Option 2: Use pgAdmin to Execute SQL Script

1. Open pgAdmin
2. Connect to your PostgreSQL server
3. Right-click on the `Procurement_Db` database and select "Query Tool"
4. Open the file `scripts/create-database.sql`
5. Execute the script (F5 or click the Execute button)

### Option 3: Use psql Command Line

1. Open Command Prompt
2. Navigate to PostgreSQL bin directory (usually `C:\Program Files\PostgreSQL\17\bin`)
3. Run:
   ```bash
   psql -U postgres -d Procurement_Db -f "c:\Users\lenovo\Documents\DevFlux\Procurement\scripts\create-database.sql"
   ```
4. Enter password: `root`

### Option 4: Manually Check and Close Connections

1. Connect to PostgreSQL using pgAdmin or psql
2. Run this query to see active connections:
   ```sql
   SELECT pid, usename, application_name, state
   FROM pg_stat_activity
   WHERE datname = 'Procurement_Db';
   ```
3. Close unnecessary connections (replace `<pid>` with actual process ID):
   ```sql
   SELECT pg_terminate_backend(<pid>);
   ```
4. Try running `npm run db:init` again

## Database Configuration

- **Database Name:** `Procurement_Db`
- **Username:** `postgres`
- **Password:** `root`
- **Host:** `localhost`
- **Port:** `5432`
- **Connection String:** `postgresql://postgres:root@localhost:5432/Procurement_Db`

## Table Structure

The database contains one main table:

### `complaints` Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing ID |
| tracking_id | VARCHAR(50) | UNIQUE NOT NULL | Unique tracking identifier |
| name | VARCHAR(255) | NOT NULL | Complainant's full name |
| email | VARCHAR(255) | NOT NULL | Complainant's email |
| complaint_location | TEXT | NOT NULL | Location where issue occurred |
| category | VARCHAR(100) | NOT NULL | Complaint category |
| description | TEXT | NOT NULL | Detailed complaint description |
| summary | TEXT | | AI-generated summary |
| status | VARCHAR(50) | DEFAULT 'pending' | Current status |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation timestamp |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update timestamp |

**Indexes:**
- `idx_tracking_id` on `tracking_id` (for fast lookups)
- `idx_status` on `status` (for filtering)

## Verify Database Setup

After initializing the database, you can verify it was created correctly:

```sql
-- Check if table exists
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public' AND table_name = 'complaints';

-- Check table structure
\d complaints

-- Check indexes
\di
```

## Testing the Application

1. Ensure PostgreSQL service is running
2. Verify database is initialized (run one of the options above)
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Navigate to the complaints page: http://localhost:9002/complaints
5. Submit a test complaint
6. Check if data was saved:
   ```sql
   SELECT * FROM complaints ORDER BY created_at DESC LIMIT 5;
   ```

## Troubleshooting

### Cannot connect to PostgreSQL
- Verify PostgreSQL service is running
- Check if port 5432 is not blocked by firewall
- Verify credentials in `.env.local` are correct

### Table not found
- Make sure you ran the initialization script successfully
- Verify you're connected to the correct database (`Procurement_Db`)

### Permission denied errors
- Ensure user `postgres` has necessary permissions
- Try connecting as superuser to grant permissions

## Need Help?

If you continue to experience issues:

1. Check PostgreSQL logs (usually in `C:\Program Files\PostgreSQL\17\data\log`)
2. Verify environment variables in `.env.local`
3. Ensure no other applications are using all PostgreSQL connections
4. Consider increasing `max_connections` in `postgresql.conf` if needed
