import { DATABASE_PATH } from '$env/static/private';

import { drizzle } from 'drizzle-orm/better-sqlite3';
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

if (!DATABASE_PATH) {
  throw new Error('Missing environment variable: DATABASE_PATH');
}

export const db: BetterSQLite3Database = drizzle(new Database(DATABASE_PATH));

void migrate(db, {
  migrationsFolder: '.drizzle/migrations'
});
