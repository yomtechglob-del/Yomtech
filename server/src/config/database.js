require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const path = require('path');

const dbUrl = process.env.DATABASE_URL || '';
let prisma;

if (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) {
  const { PrismaPg } = require('@prisma/adapter-pg');
  const { Pool } = require('pg');
  const pool = new Pool({ connectionString: dbUrl });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
} else {
  const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
  const dbPath = dbUrl.replace(/^file:/, '');
  const resolvedPath = path.isAbsolute(dbPath) ? dbPath : path.resolve(__dirname, '../../prisma', dbPath);
  const adapter = new PrismaBetterSqlite3({ url: resolvedPath });
  prisma = new PrismaClient({ adapter });
}

module.exports = prisma;