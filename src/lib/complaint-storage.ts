// PostgreSQL-based storage for complaints
import pool, { initializeDatabase } from './db';

export interface Complaint {
  id: number;
  trackingId: string;
  name: string;
  email: string;
  complaintLocation: string;
  category: string;
  description: string;
  summary: string;
  status: 'pending' | 'in-progress' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}

// Initialize database on module load
let dbInitialized = false;

async function ensureDbInitialized() {
  if (!dbInitialized) {
    await initializeDatabase();
    dbInitialized = true;
  }
}

/**
 * Generate a unique tracking ID
 * Format: KSMPPPME-YYYYMMDD-XXXX
 * KSMPPPME = Kano State Ministry for Public Procurement, Project Monitoring and Evaluation
 * YYYYMMDD = Date
 * XXXX = Unique 4-digit sequential/random number
 */
export function generateTrackingId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  // Generate a unique 4-digit number combining timestamp and random
  const timestamp = now.getTime();
  const random = Math.floor(Math.random() * 10000);
  const unique = ((timestamp % 10000) + random) % 10000;
  const uniqueStr = String(unique).padStart(4, '0');

  return `KSMPPPME-${year}${month}${day}-${uniqueStr}`;
}

/**
 * Save a new complaint to PostgreSQL
 */
export async function saveComplaint(
  complaintData: Omit<Complaint, 'id' | 'trackingId' | 'status' | 'createdAt' | 'updatedAt'>
): Promise<Complaint> {
  await ensureDbInitialized();

  const trackingId = generateTrackingId();

  const query = `
    INSERT INTO complaints (tracking_id, name, email, complaint_location, category, description, summary, status)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id, tracking_id, name, email, complaint_location, category, description, summary, status, created_at, updated_at
  `;

  const values = [
    trackingId,
    complaintData.name,
    complaintData.email,
    complaintData.complaintLocation,
    complaintData.category,
    complaintData.description,
    complaintData.summary,
    'pending'
  ];

  try {
    const result = await pool.query(query, values);
    const row = result.rows[0];

    return {
      id: row.id,
      trackingId: row.tracking_id,
      name: row.name,
      email: row.email,
      complaintLocation: row.complaint_location,
      category: row.category,
      description: row.description,
      summary: row.summary,
      status: row.status,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    };
  } catch (error) {
    console.error('Error saving complaint to database:', error);
    throw new Error('Failed to save complaint to database');
  }
}

/**
 * Get a complaint by tracking ID from PostgreSQL
 */
export async function getComplaintByTrackingId(trackingId: string): Promise<Complaint | null> {
  await ensureDbInitialized();

  const query = `
    SELECT id, tracking_id, name, email, complaint_location, category, description, summary, status, created_at, updated_at
    FROM complaints
    WHERE tracking_id = $1
  `;

  try {
    const result = await pool.query(query, [trackingId]);

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];

    return {
      id: row.id,
      trackingId: row.tracking_id,
      name: row.name,
      email: row.email,
      complaintLocation: row.complaint_location,
      category: row.category,
      description: row.description,
      summary: row.summary,
      status: row.status,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    };
  } catch (error) {
    console.error('Error fetching complaint from database:', error);
    return null;
  }
}

/**
 * Get all complaints from PostgreSQL
 */
export async function getAllComplaints(): Promise<Complaint[]> {
  await ensureDbInitialized();

  const query = `
    SELECT id, tracking_id, name, email, complaint_location, category, description, summary, status, created_at, updated_at
    FROM complaints
    ORDER BY created_at DESC
  `;

  try {
    const result = await pool.query(query);

    return result.rows.map(row => ({
      id: row.id,
      trackingId: row.tracking_id,
      name: row.name,
      email: row.email,
      complaintLocation: row.complaint_location,
      category: row.category,
      description: row.description,
      summary: row.summary,
      status: row.status,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    }));
  } catch (error) {
    console.error('Error fetching all complaints from database:', error);
    return [];
  }
}

/**
 * Update complaint status in PostgreSQL
 */
export async function updateComplaintStatus(
  trackingId: string,
  status: Complaint['status']
): Promise<Complaint | null> {
  await ensureDbInitialized();

  const query = `
    UPDATE complaints
    SET status = $1, updated_at = CURRENT_TIMESTAMP
    WHERE tracking_id = $2
    RETURNING id, tracking_id, name, email, complaint_location, category, description, summary, status, created_at, updated_at
  `;

  try {
    const result = await pool.query(query, [status, trackingId]);

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];

    return {
      id: row.id,
      trackingId: row.tracking_id,
      name: row.name,
      email: row.email,
      complaintLocation: row.complaint_location,
      category: row.category,
      description: row.description,
      summary: row.summary,
      status: row.status,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    };
  } catch (error) {
    console.error('Error updating complaint status:', error);
    return null;
  }
}

/**
 * Get complaint statistics from PostgreSQL
 */
export async function getComplaintStats() {
  await ensureDbInitialized();

  const query = `
    SELECT
      COUNT(*) as total,
      COUNT(*) FILTER (WHERE status = 'pending') as pending,
      COUNT(*) FILTER (WHERE status = 'in-progress') as in_progress,
      COUNT(*) FILTER (WHERE status = 'resolved') as resolved
    FROM complaints
  `;

  try {
    const result = await pool.query(query);
    const row = result.rows[0];

    return {
      total: parseInt(row.total) || 0,
      pending: parseInt(row.pending) || 0,
      inProgress: parseInt(row.in_progress) || 0,
      resolved: parseInt(row.resolved) || 0,
    };
  } catch (error) {
    console.error('Error fetching complaint stats:', error);
    return {
      total: 0,
      pending: 0,
      inProgress: 0,
      resolved: 0,
    };
  }
}
