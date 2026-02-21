import { getDb } from "../src/db/client.ts";

function seed(): void {
  const db = getDb();

  db.query(`
    INSERT OR IGNORE INTO users (email, username, password_hash, display_name, bio)
    VALUES 
      ('demo@example.com', 'demouser', '$2b$10$demo', 'Demo User', 'This is a demo account'),
      ('alice@example.com', 'alice', '$2b$10$alice', 'Alice Smith', 'Content creator'),
      ('bob@example.com', 'bob', '$2b$10$bob', 'Bob Johnson', 'Video enthusiast')
  `);

  db.query(`
    INSERT OR IGNORE INTO channels (user_id, name, description, subscriber_count, view_count)
    VALUES 
      (1, 'Demo Channel', 'Welcome to my channel', 100, 1000),
      (2, 'Alice Creates', 'Tutorials and vlogs', 500, 5000),
      (3, 'Bob Reviews', 'Product reviews and reactions', 250, 2500)
  `);

  db.query(`
    INSERT OR IGNORE INTO videos (channel_id, title, description, duration, view_count, like_count, status, visibility, published_at)
    VALUES 
      (1, 'Welcome to YouStream', 'Check out our new video platform!', 120, 500, 50, 'published', 'public', datetime('now')),
      (2, 'Getting Started with TypeScript', 'Learn TypeScript from scratch', 1800, 1000, 100, 'published', 'public', datetime('now')),
      (2, 'Advanced React Patterns', 'Deep dive into React hooks', 2400, 800, 80, 'published', 'public', datetime('now')),
      (3, 'Product Review: New Headphones', 'Honest review of the latest headphones', 600, 200, 20, 'published', 'public', datetime('now'))
  `);

  db.query(`
    INSERT OR IGNORE INTO comments (video_id, user_id, content, like_count)
    VALUES 
      (1, 2, 'Great video!', 5),
      (1, 3, 'Love the platform!', 3),
      (2, 1, 'Very helpful, thanks!', 10)
  `);

  db.query(`
    INSERT OR IGNORE INTO subscriptions (subscriber_id, channel_id)
    VALUES 
      (1, 2),
      (1, 3),
      (2, 3),
      (3, 2)
  `);

  db.query(`
    INSERT OR IGNORE INTO video_likes (video_id, user_id)
    VALUES 
      (1, 2),
      (1, 3),
      (2, 1),
      (2, 3),
      (3, 1)
  `);

  db.query(`
    INSERT OR IGNORE INTO watch_history (user_id, video_id, progress_seconds)
    VALUES 
      (1, 1, 60),
      (1, 2, 900),
      (2, 1, 120),
      (3, 4, 300)
  `);

  db.query(`
    INSERT OR IGNORE INTO playlists (channel_id, title, description, visibility)
    VALUES 
      (2, 'TypeScript Tutorials', 'My favorite TypeScript tutorials', 'public'),
      (2, 'Watch Later', 'Videos to watch later', 'private')
  `);

  db.query(`
    INSERT OR IGNORE INTO playlist_items (playlist_id, video_id, position)
    VALUES 
      (1, 2, 1),
      (1, 3, 2)
  `);

  console.log("Database seeded successfully");
}

seed();
