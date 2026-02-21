import { getDb } from "../src/db/client.ts";

interface Migration {
  name: string;
}

function getMigrationsTable(): void {
  const db = getDb();
  db.execute(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

function getExecutedMigrations(): Migration[] {
  const db = getDb();
  const migrations: Migration[] = [];
  for (const [name] of db.query("SELECT name FROM migrations ORDER BY id")) {
    migrations.push({ name: name as string });
  }
  return migrations;
}

function recordMigration(name: string): void {
  const db = getDb();
  db.query("INSERT INTO migrations (name) VALUES (?)", [name]);
}

export async function runMigrations(): Promise<void> {
  getMigrationsTable();
  const executed = getExecutedMigrations();
  const executedNames = new Set(executed.map((m) => m.name));

  const files = Deno.readDirSync("./scripts/migrations");
  const migrations: { name: string; file: string }[] = [];

  for (const file of files) {
    if (file.isFile && file.name.endsWith(".sql")) {
      migrations.push({
        name: file.name.replace(".sql", ""),
        file: file.name,
      });
    }
  }

  migrations.sort((a, b) => a.name.localeCompare(b.name));

  for (const { name, file } of migrations) {
    if (!executedNames.has(name)) {
      console.log(`Running migration: ${name}`);
      const sql = await Deno.readTextFile(`./scripts/migrations/${file}`);
      db.execute(sql);
      recordMigration(name);
      console.log(`Migration ${name} completed`);
    }
  }

  console.log("All migrations completed");
}

const db = getDb();
await runMigrations();
