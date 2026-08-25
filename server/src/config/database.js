require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const fs = require('fs');

const dbUrl = process.env.DATABASE_URL || 'file:./dev.db';
let prisma;

if (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) {
  const { PrismaPg } = require('@prisma/adapter-pg');
  const { Pool } = require('pg');
  const pool = new Pool({ connectionString: dbUrl });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
} else {
  const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
  const rawPath = dbUrl.replace(/^file:/, '');
  
  // Try root dev.db first, then prisma/dev.db
  const rootDbPath = path.resolve(__dirname, '../../', rawPath);
  const prismaDbPath = path.resolve(__dirname, '../../prisma', rawPath);
  const finalPath = fs.existsSync(rootDbPath) ? rootDbPath : prismaDbPath;

  const adapter = new PrismaBetterSqlite3({ url: finalPath });
  prisma = new PrismaClient({ adapter });
}

module.exports = prisma;