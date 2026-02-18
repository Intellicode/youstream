import { DB } from "sqlite";

export interface DatabaseConfig {
  filename?: string;
}

let db: DB | null = null;

export function getDb(config: DatabaseConfig = {}): DB {
  if (!db) {
    const filename = config.filename || "./youstream.db";
    db = new DB(filename);
    db.execute("PRAGMA journal_mode = WAL");
    db.execute("PRAGMA foreign_keys = ON");
  }
  return db;
}

export function closeDb(): void {
  if (db) {
    db.close();
    db = null;
  }
}
