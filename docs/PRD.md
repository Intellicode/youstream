# Product Requirements Document (PRD)

# YouStream - Self-Hosted Video Streaming Platform

**Version:** 1.0\
**Date:** February 18, 2026\
**Product:** YouStream MVP\
**Target:** Self-hosted video streaming platform for creators and communities\
**Tech Stack:** Deno, Hono, FFmpeg

---

## 1. Executive Summary

YouStream is a self-hosted video streaming platform that enables individuals,
communities, and organizations to host their own video content with full control
over their data. The platform provides a modern, YouTube-like experience with
features for video uploading, transcoding, streaming, and social engagement.

### Key Value Propositions

- **Full Data Ownership**: Host videos on your own infrastructure with no
  third-party dependencies
- **Modern User Experience**: Clean, responsive interface comparable to
  commercial platforms
- **Efficient Video Processing**: FFmpeg-powered transcoding with multiple
  quality options
- **Scalable Architecture**: Built with Deno and Hono for high performance and
  modern TypeScript
- **Community Features**: Channels, subscriptions, comments, and engagement
  tools

---

## 2. Product Overview

### 2.1 Target Users

- **Primary**: Content creators seeking independence from centralized platforms
- **Secondary**: Organizations needing internal video hosting (training,
  communications)
- **Tertiary**: Communities wanting private video sharing spaces
- **Technical**: Self-hosters and developers who value open-source solutions

### 2.2 Problem Statement

Current video hosting solutions either:

- Require giving up content ownership to centralized platforms
- Have restrictive monetization and content policies
- Lack modern user experience in self-hosted alternatives
- Don't provide adequate video processing capabilities
- Are complex to deploy and maintain

### 2.3 Solution

A modern, self-hosted video platform built with Deno and Hono that provides:

- Professional-grade video transcoding via FFmpeg
- YouTube-like user interface and experience
- Full control over content and data
- Easy deployment and maintenance
- Extensible architecture for customization

---

## 3. Core Features

### 3.1 Video Management

#### 3.1.1 Video Upload System

- **Multi-file Upload**: Support for uploading multiple videos simultaneously
- **Drag & Drop Interface**: Modern web-based upload with visual feedback
- **Progress Tracking**: Real-time upload progress with percentage and speed
  indicators
- **Resume Capability**: Handle interrupted uploads with chunked upload support
- **Format Support**:
  - Input: MP4, WebM, MOV, AVI, MKV, FLV, WMV, M4V
  - Codec support: H.264, H.265/HEVC, VP8, VP9, AV1
- **File Size Limits**: Configurable maximum file size (default: 10GB per video)
- **Metadata Extraction**: Automatic extraction of duration, resolution, codec
  info

#### 3.1.2 Video Transcoding (FFmpeg)

- **Adaptive Bitrate Streaming**: Generate multiple quality levels
  - 2160p (4K): 15-25 Mbps
  - 1440p (2K): 10-15 Mbps
  - 1080p (Full HD): 5-8 Mbps
  - 720p (HD): 2.5-5 Mbps
  - 480p (SD): 1-2.5 Mbps
  - 360p (Mobile): 0.5-1 Mbps
- **HLS/DASH Output**: Generate streaming manifests for adaptive playback
- **Thumbnail Generation**:
  - Auto-generate thumbnails at multiple timestamps
  - Sprite sheets for video preview scrubbing
  - Custom thumbnail upload support
- **Audio Processing**: Normalize audio levels, support multiple audio tracks
- **Transcoding Queue**: Background job processing with priority levels
- **Hardware Acceleration**: Support for NVENC, VAAPI, VideoToolbox when
  available

#### 3.1.3 Video Storage & Organization

- **Hierarchical Storage**: Organize by user/channel/video structure
- **Storage Backends**:
  - Local filesystem (default)
  - S3-compatible object storage
  - Configurable storage paths
- **Original Preservation**: Keep original files with option to delete after
  transcoding
- **CDN Support**: Configurable CDN URLs for video delivery

### 3.2 Viewing Experience

#### 3.2.1 Video Player

- **Adaptive Streaming**: Automatic quality selection based on bandwidth
- **Manual Quality Selection**: User override for quality preference
- **Playback Controls**:
  - Play/Pause with spacebar support
  - Seek with progress bar and keyboard arrows
  - Volume control with mute toggle
  - Playback speed (0.25x - 2x)
  - Full-screen mode
  - Picture-in-Picture support
  - Theater mode
- **Keyboard Shortcuts**:
  - Space: Play/Pause
  - F: Fullscreen
  - M: Mute
  - Left/Right arrows: Seek 5 seconds
  - Up/Down arrows: Volume control
  - J/K/L: Seek backward/play-pause/seek forward
  - Numbers 0-9: Jump to percentage
- **Progress Persistence**: Remember playback position across sessions
- **Autoplay**: Configurable autoplay for next video
- **Loop Mode**: Single video loop option

#### 3.2.2 Video Page Layout

- **Primary Player Area**: 16:9 aspect ratio video player
- **Video Information**:
  - Title with hashtag support
  - View count and upload date
  - Like/Dislike counts with interaction buttons
  - Share, Save, Report options
- **Channel Information**:
  - Channel avatar and name
  - Subscriber count
  - Subscribe/Unsubscribe button
- **Description Panel**:
  - Expandable description text
  - Timestamps with clickable links
  - Links and mentions support
- **Suggested Videos Sidebar**: Related content recommendations

#### 3.2.3 Comments System

- **Nested Comments**: Support for threaded replies
- **Sorting Options**: Top comments, newest first
- **Comment Actions**:
  - Like/Dislike comments
  - Reply to comments
  - Edit/Delete own comments
  - Report comments
- **Creator Badges**: Highlight channel owner responses
- **Member Badges**: Show membership status
- **Comment Count**: Display total comment count
- **Pagination**: Load more comments on scroll

### 3.3 Home & Discovery

#### 3.3.1 Home Page

- **Video Grid Layout**: Responsive grid (1-4 columns based on viewport)
- **Video Card Components**:
  - Thumbnail with duration overlay
  - Live indicator for streams
  - Progress bar for partially watched
  - Title (2-line clamp)
  - Channel avatar and name
  - View count and relative time
  - Menu button for quick actions
- **Category Filter Chips**: Horizontal scrollable filter bar
  - All, Music, Gaming, Live, News, Podcasts, etc.
  - Custom category support
- **Infinite Scroll**: Load more videos as user scrolls
- **Lazy Loading**: Load thumbnails on-demand

#### 3.3.2 Search & Filtering

- **Search Bar**:
  - Full-text search across titles, descriptions, tags
  - Search suggestions/autocomplete
  - Voice search support (optional)
- **Search Filters**:
  - Upload date (hour, today, week, month, year)
  - Duration (short < 4min, medium 4-20min, long > 20min)
  - Sort by (relevance, date, views, rating)
  - Type (video, channel, playlist)
- **Search Results Page**: Mixed results with video cards and channel cards

#### 3.3.3 Explore Section

- **Trending**: Popular videos based on recent engagement
- **Categories**:
  - Music
  - Gaming
  - Movies
  - Live
  - Sports
  - News
  - Learning
- **Recently Uploaded**: Chronological feed of new content

### 3.4 Channel System

#### 3.4.1 Channel Pages

- **Channel Banner**: Customizable header image
- **Channel Avatar**: Profile picture
- **Channel Info**:
  - Channel name
  - Handle (@username)
  - Subscriber count
  - Video count
  - Join date
  - Description/About
  - Links (social media, website)
- **Channel Tabs**:
  - Home: Featured content and sections
  - Videos: All uploaded videos
  - Shorts: Short-form content (optional)
  - Live: Live streams and past streams
  - Playlists: Created playlists
  - Community: Posts and updates
  - About: Channel information

#### 3.4.2 Channel Management

- **Channel Customization**:
  - Banner upload and cropping
  - Avatar upload
  - Channel description editor
  - Links management
  - Featured sections configuration
- **Video Management**:
  - Video listing with edit/delete options
  - Bulk actions (delete, visibility change)
  - Video statistics overview
- **Analytics Dashboard**:
  - Views over time
  - Watch time metrics
  - Subscriber growth
  - Top performing videos
  - Audience demographics (if available)

### 3.5 User Features

#### 3.5.1 Sidebar Navigation

- **Main Navigation**:
  - Home
  - Shorts (optional)
  - Subscriptions
- **User Section ("You")**:
  - Your channel
  - History
  - Your videos
  - Watch later
  - Liked videos
- **Subscriptions List**:
  - Channel avatars with names
  - New content indicator (blue dot)
  - "Show more" expansion
- **Explore Section**:
  - Trending
  - Music
  - Movies
  - Live
  - Gaming
  - Sports

#### 3.5.2 User Library

- **Watch History**:
  - Chronological list of watched videos
  - Search within history
  - Pause/Clear history options
- **Watch Later**:
  - Saved videos for later viewing
  - Add/Remove functionality
- **Liked Videos**: Videos user has liked
- **Playlists**:
  - Create custom playlists
  - Public/Private/Unlisted visibility
  - Playlist editing and reordering

#### 3.5.3 Subscriptions

- **Subscription Feed**: Chronological feed from subscribed channels
- **Notification Bell**: Per-channel notification preferences
  - All notifications
  - Personalized
  - None
- **Subscription Management**: List and manage subscriptions

### 3.6 Social & Engagement

#### 3.6.1 Interactions

- **Like/Dislike System**:
  - Thumbs up/down on videos
  - Like count display (dislike count hidden by default)
  - Like animations
- **Share Options**:
  - Copy link
  - Share to social platforms
  - Embed code generation
  - Start at timestamp option
- **Save to Playlist**: Quick add to Watch Later or custom playlists
- **Report System**: Flag inappropriate content

#### 3.6.2 Notifications

- **Notification Types**:
  - New video from subscription
  - Comment replies
  - Comment likes
  - Channel milestones
- **Notification Bell**: Header icon with unread count badge
- **Notification Center**: Dropdown/page with notification list

### 3.7 Live Streaming (Phase 2)

#### 3.7.1 Stream Ingestion

- **RTMP Ingest**: Accept RTMP streams from OBS, Streamlabs, etc.
- **Stream Key Management**: Generate and regenerate stream keys
- **Low-Latency Mode**: Optional ultra-low-latency streaming

#### 3.7.2 Live Features

- **Live Chat**: Real-time chat alongside stream
- **Live Indicator**: Visual indicator on thumbnails and player
- **Viewer Count**: Real-time viewer count display
- **VOD Generation**: Automatic recording for replay

---

## 4. Technical Architecture

### 4.1 Technology Stack

#### 4.1.1 Backend - Deno + Hono

- **Runtime**: Deno 2.x with TypeScript
- **Web Framework**: Hono for HTTP handling
- **Key Deno Features**:
  - Native TypeScript support
  - Built-in test runner
  - Permission system for security
  - Top-level await
  - Web standard APIs
- **Hono Benefits**:
  - Ultrafast routing
  - Middleware ecosystem
  - JSX support for SSR
  - Multi-runtime support

#### 4.1.2 Video Processing - FFmpeg

- **FFmpeg Integration**: Via Deno subprocess or FFmpeg WASM
- **Processing Pipeline**:
  1. Input validation and metadata extraction
  2. Transcoding to multiple qualities
  3. HLS/DASH segment generation
  4. Thumbnail extraction
  5. Sprite sheet generation
- **Queue System**: Background job processing with status tracking

#### 4.1.3 Database

- **Primary**: SQLite with Deno KV for caching
- **Schema Management**: Migration system for schema updates
- **Full-Text Search**: SQLite FTS5 for search functionality
- **Optional**: PostgreSQL support for larger deployments

#### 4.1.4 Storage

- **File Storage Structure**:
  ```
  /storage
    /videos
      /{video_id}
        /original.{ext}
        /manifest.m3u8
        /1080p/
        /720p/
        /480p/
        /thumbnails/
          /default.jpg
          /sprite.jpg
    /avatars
    /banners
  ```
- **Object Storage**: S3-compatible backend support

### 4.2 API Design

#### 4.2.1 REST API Endpoints

**Videos**

```
GET    /api/videos                    # List videos (paginated)
GET    /api/videos/:id                # Get video details
POST   /api/videos                    # Upload video (multipart)
PATCH  /api/videos/:id                # Update video metadata
DELETE /api/videos/:id                # Delete video
GET    /api/videos/:id/stream         # Get streaming manifest
POST   /api/videos/:id/view           # Record view
POST   /api/videos/:id/like           # Like video
DELETE /api/videos/:id/like           # Remove like
```

**Channels**

```
GET    /api/channels                  # List channels
GET    /api/channels/:id              # Get channel details
GET    /api/channels/:handle          # Get channel by handle
PATCH  /api/channels/:id              # Update channel
GET    /api/channels/:id/videos       # Get channel videos
POST   /api/channels/:id/subscribe    # Subscribe to channel
DELETE /api/channels/:id/subscribe    # Unsubscribe
```

**Comments**

```
GET    /api/videos/:id/comments       # Get video comments
POST   /api/videos/:id/comments       # Add comment
PATCH  /api/comments/:id              # Edit comment
DELETE /api/comments/:id              # Delete comment
POST   /api/comments/:id/like         # Like comment
POST   /api/comments/:id/reply        # Reply to comment
```

**Users**

```
GET    /api/users/me                  # Get current user
PATCH  /api/users/me                  # Update profile
GET    /api/users/me/history          # Watch history
GET    /api/users/me/subscriptions    # Subscriptions
GET    /api/users/me/playlists        # User playlists
```

**Search**

```
GET    /api/search                    # Search videos, channels
GET    /api/search/suggestions        # Search autocomplete
```

**Upload**

```
POST   /api/upload/init               # Initialize upload
POST   /api/upload/chunk              # Upload chunk
POST   /api/upload/complete           # Complete upload
GET    /api/upload/:id/status         # Get upload/transcode status
```

#### 4.2.2 WebSocket Endpoints

```
WS     /ws/upload/:id                 # Upload progress
WS     /ws/transcode/:id              # Transcoding progress
WS     /ws/live/:id/chat              # Live chat (Phase 2)
```

### 4.3 Database Schema

#### 4.3.1 Core Tables

```sql
-- Users
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  avatar_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Channels
CREATE TABLE channels (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  name TEXT NOT NULL,
  handle TEXT UNIQUE NOT NULL,
  description TEXT,
  avatar_url TEXT,
  banner_url TEXT,
  subscriber_count INTEGER DEFAULT 0,
  video_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Videos
CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  channel_id TEXT NOT NULL REFERENCES channels(id),
  title TEXT NOT NULL,
  description TEXT,
  duration INTEGER, -- seconds
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  dislike_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'processing', -- processing, ready, failed
  visibility TEXT DEFAULT 'public', -- public, unlisted, private
  thumbnail_url TEXT,
  manifest_url TEXT,
  original_filename TEXT,
  file_size INTEGER,
  resolution TEXT,
  tags TEXT, -- JSON array
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Comments
CREATE TABLE comments (
  id TEXT PRIMARY KEY,
  video_id TEXT NOT NULL REFERENCES videos(id),
  user_id TEXT NOT NULL REFERENCES users(id),
  parent_id TEXT REFERENCES comments(id),
  content TEXT NOT NULL,
  like_count INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  is_edited BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions
CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  channel_id TEXT NOT NULL REFERENCES channels(id),
  notification_level TEXT DEFAULT 'all', -- all, personalized, none
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, channel_id)
);

-- Video Likes
CREATE TABLE video_likes (
  id TEXT PRIMARY KEY,
  video_id TEXT NOT NULL REFERENCES videos(id),
  user_id TEXT NOT NULL REFERENCES users(id),
  is_like BOOLEAN NOT NULL, -- true = like, false = dislike
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(video_id, user_id)
);

-- Watch History
CREATE TABLE watch_history (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  video_id TEXT NOT NULL REFERENCES videos(id),
  progress INTEGER DEFAULT 0, -- seconds watched
  completed BOOLEAN DEFAULT FALSE,
  watched_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Playlists
CREATE TABLE playlists (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  visibility TEXT DEFAULT 'private',
  video_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Playlist Items
CREATE TABLE playlist_items (
  id TEXT PRIMARY KEY,
  playlist_id TEXT NOT NULL REFERENCES playlists(id),
  video_id TEXT NOT NULL REFERENCES videos(id),
  position INTEGER NOT NULL,
  added_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Transcoding Jobs
CREATE TABLE transcode_jobs (
  id TEXT PRIMARY KEY,
  video_id TEXT NOT NULL REFERENCES videos(id),
  status TEXT DEFAULT 'pending', -- pending, processing, completed, failed
  progress INTEGER DEFAULT 0,
  error_message TEXT,
  started_at DATETIME,
  completed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 4.4 FFmpeg Processing Pipeline

#### 4.4.1 Transcoding Command Templates

**HLS Generation (Main Profile)**

```bash
ffmpeg -i input.mp4 \
  -filter_complex "[0:v]split=4[v1][v2][v3][v4]; \
    [v1]scale=w=1920:h=1080[v1out]; \
    [v2]scale=w=1280:h=720[v2out]; \
    [v3]scale=w=854:h=480[v3out]; \
    [v4]scale=w=640:h=360[v4out]" \
  -map "[v1out]" -c:v:0 libx264 -b:v:0 5M -maxrate:v:0 5.5M -bufsize:v:0 10M \
  -map "[v2out]" -c:v:1 libx264 -b:v:1 2.5M -maxrate:v:1 2.8M -bufsize:v:1 5M \
  -map "[v3out]" -c:v:2 libx264 -b:v:2 1M -maxrate:v:2 1.2M -bufsize:v:2 2M \
  -map "[v4out]" -c:v:3 libx264 -b:v:3 500k -maxrate:v:3 600k -bufsize:v:3 1M \
  -map a:0 -c:a aac -b:a 128k -ac 2 \
  -f hls \
  -hls_time 6 \
  -hls_playlist_type vod \
  -hls_flags independent_segments \
  -master_pl_name master.m3u8 \
  -var_stream_map "v:0,a:0 v:1,a:0 v:2,a:0 v:3,a:0" \
  stream_%v/playlist.m3u8
```

**Thumbnail Extraction**

```bash
# Single thumbnail at 25% duration
ffmpeg -i input.mp4 -ss 00:00:10 -vframes 1 -q:v 2 thumbnail.jpg

# Multiple thumbnails for selection
ffmpeg -i input.mp4 -vf "fps=1/30,scale=320:-1" -q:v 2 thumb_%03d.jpg

# Sprite sheet for scrubbing preview
ffmpeg -i input.mp4 -vf "fps=1/5,scale=160:-1,tile=10x10" -q:v 5 sprite.jpg
```

**Metadata Extraction**

```bash
ffprobe -v quiet -print_format json -show_format -show_streams input.mp4
```

#### 4.4.2 Processing Workflow

1. **Upload Complete** -> Create transcode job record
2. **Validate Input** -> Check format, duration, resolution
3. **Extract Metadata** -> Duration, codecs, resolution
4. **Generate Thumbnails** -> Default + sprites
5. **Transcode Video** -> Multiple quality levels
6. **Generate Manifests** -> HLS master playlist
7. **Update Database** -> Mark video as ready
8. **Cleanup** -> Optionally remove original

### 4.5 Project Structure

```
youstream/
├── deno.json                 # Deno configuration
├── deno.lock                 # Dependency lockfile
├── main.ts                   # Application entry point
├── src/
│   ├── app.ts               # Hono app setup
│   ├── config.ts            # Configuration management
│   ├── routes/
│   │   ├── index.ts         # Route aggregation
│   │   ├── videos.ts        # Video endpoints
│   │   ├── channels.ts      # Channel endpoints
│   │   ├── comments.ts      # Comment endpoints
│   │   ├── users.ts         # User endpoints
│   │   ├── search.ts        # Search endpoints
│   │   ├── upload.ts        # Upload endpoints
│   │   └── auth.ts          # Authentication
│   ├── middleware/
│   │   ├── auth.ts          # Auth middleware
│   │   ├── cors.ts          # CORS handling
│   │   ├── logger.ts        # Request logging
│   │   └── error.ts         # Error handling
│   ├── services/
│   │   ├── video.ts         # Video business logic
│   │   ├── channel.ts       # Channel logic
│   │   ├── transcode.ts     # FFmpeg transcoding
│   │   ├── storage.ts       # File storage
│   │   └── search.ts        # Search indexing
│   ├── db/
│   │   ├── client.ts        # Database client
│   │   ├── schema.ts        # Schema definitions
│   │   └── migrations/      # Migration files
│   ├── types/
│   │   ├── video.ts         # Video types
│   │   ├── channel.ts       # Channel types
│   │   └── user.ts          # User types
│   └── utils/
│       ├── id.ts            # ID generation
│       ├── time.ts          # Time formatting
│       └── validation.ts    # Input validation
├── static/                   # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── views/                    # JSX templates (if SSR)
│   ├── layouts/
│   ├── pages/
│   └── components/
├── storage/                  # Video storage (gitignored)
│   ├── videos/
│   ├── avatars/
│   └── banners/
├── tests/
│   ├── routes/
│   ├── services/
│   └── utils/
└── scripts/
    ├── seed.ts              # Database seeding
    └── migrate.ts           # Run migrations
```

---

## 5. User Interface Specifications

### 5.1 Design System

#### 5.1.1 Color Palette

```css
/* Dark Theme (Default) */
--yt-bg: #0f0f0f; /* Main background */
--yt-bg-elevated: #212121; /* Cards, elevated surfaces */
--yt-bg-hover: #272727; /* Hover states */
--yt-bg-active: #3d3d3d; /* Active/pressed states */
--yt-red: #ff0000; /* Primary accent (brand) */
--yt-red-hover: #cc0000; /* Red hover state */
--yt-text: #f1f1f1; /* Primary text */
--yt-text-secondary: #aaaaaa; /* Secondary text */
--yt-border: #303030; /* Borders */
--yt-chip: #272727; /* Chip background */
--yt-chip-active: #f1f1f1; /* Active chip */
```

#### 5.1.2 Typography

- **Font Family**: Roboto, Arial, sans-serif
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 700 (bold)
- **Font Sizes**:
  - XS: 10px (badges, timestamps)
  - SM: 12px (secondary text, metadata)
  - Base: 14px (body text)
  - LG: 16px (card titles)
  - XL: 20px (page titles)
  - 2XL: 24px (section headers)

#### 5.1.3 Spacing

- Base unit: 4px
- Common values: 4, 8, 12, 16, 24, 32, 48, 64

#### 5.1.4 Border Radius

- Small: 4px (badges, chips)
- Medium: 8px (buttons, cards)
- Large: 12px (video thumbnails, panels)
- Full: 9999px (avatars, pill buttons)

### 5.2 Component Specifications

#### 5.2.1 Video Card

- **Thumbnail**: 16:9 aspect ratio, rounded-xl corners
- **Duration Badge**: Bottom-right, black/80% background, white text
- **Live Badge**: Top-left, red background, "LIVE" text
- **Channel Avatar**: 36x36px, rounded-full
- **Title**: 14px medium, 2-line clamp
- **Metadata**: 12px secondary color

#### 5.2.2 Buttons

- **Primary**: White background, dark text, rounded-full
- **Secondary**: Gray background (bg-hover), white text, rounded-full
- **Icon Button**: 40x40px, rounded-full, hover state
- **Subscribe Button**: White bg, black text, 14px medium

#### 5.2.3 Header

- **Height**: 56px (h-14)
- **Position**: Fixed, top: 0, z-index: 50
- **Search Bar**: Max-width 672px, rounded-full
- **Elements**: Menu, Logo, Search, Create, Notifications, Avatar

#### 5.2.4 Sidebar

- **Width**: 240px (w-60)
- **Position**: Fixed, left: 0, top: 56px
- **Sections**: Dividers with 12px margin
- **Items**: 48px height, 24px gap, rounded-lg hover

---

## 6. User Stories

### 6.1 Content Creator

```
As a content creator
I want to upload my videos to my own server
So that I have full ownership and control over my content
```

```
As a content creator
I want my videos automatically transcoded to multiple qualities
So that viewers can watch in the best quality for their connection
```

```
As a content creator
I want to see analytics for my videos
So that I can understand my audience and improve my content
```

### 6.2 Viewer

```
As a viewer
I want to browse and discover videos easily
So that I can find content that interests me
```

```
As a viewer
I want the video quality to adjust to my internet speed
So that I can watch without buffering
```

```
As a viewer
I want to save videos to watch later
So that I can come back to interesting content when I have time
```

### 6.3 Community Member

```
As a community member
I want to comment on videos and reply to others
So that I can engage with creators and other viewers
```

```
As a community member
I want to subscribe to channels
So that I don't miss new content from creators I like
```

---

## 7. Performance Requirements

### 7.1 Response Times

- **API Endpoints**: < 100ms average response time
- **Video Manifest**: < 50ms to serve HLS manifest
- **Search Results**: < 200ms for search queries
- **Page Load**: < 2s initial page load
- **Video Start**: < 3s time to first frame

### 7.2 Throughput

- **Concurrent Uploads**: Support 10+ simultaneous uploads
- **Concurrent Streams**: Support 100+ concurrent video streams
- **Transcoding Queue**: Process 5+ videos simultaneously (based on CPU)

### 7.3 Storage Efficiency

- **Thumbnail Size**: < 50KB per thumbnail
- **HLS Segments**: 6-second segments for balance
- **Compression**: Target 50-60% size reduction from source

### 7.4 Scalability Targets

- **Videos**: Support 10,000+ videos
- **Users**: Support 1,000+ registered users
- **Views**: Handle 10,000+ daily views

---

## 8. Security Requirements

### 8.1 Authentication

- **Session Management**: Secure HTTP-only cookies
- **Password Requirements**: Minimum 8 characters, complexity rules
- **Password Storage**: Argon2id hashing
- **Session Expiry**: Configurable (default 7 days)

### 8.2 Authorization

- **Role-Based Access**: Admin, Creator, Viewer roles
- **Resource Ownership**: Users can only modify their own content
- **Video Visibility**: Public, Unlisted, Private options

### 8.3 Input Validation

- **File Validation**: Check MIME types, file signatures
- **Size Limits**: Enforce maximum file sizes
- **Sanitization**: Sanitize all user inputs
- **Rate Limiting**: Prevent abuse of API endpoints

### 8.4 Content Security

- **Signed URLs**: Optional signed URLs for video access
- **CORS Configuration**: Restrict allowed origins
- **CSP Headers**: Content Security Policy implementation

---

## 9. Development Phases

### 9.1 Phase 1: Core MVP (Weeks 1-4)

- Basic Hono server setup with routing
- Database schema and migrations
- User authentication (register, login, logout)
- Video upload (single file, basic)
- FFmpeg transcoding pipeline (HLS output)
- Basic video playback with quality selection
- Home page with video grid
- Video watch page
- Basic channel pages

### 9.2 Phase 2: Enhanced Features (Weeks 5-8)

- Chunked upload with resume
- Thumbnail generation and selection
- Comments system (CRUD, replies)
- Like/Dislike functionality
- Search with filters
- User library (history, watch later, liked)
- Subscription system
- Notification system

### 9.3 Phase 3: Polish & Scale (Weeks 9-12)

- Advanced video player features
- Playlist functionality
- Channel customization
- Analytics dashboard
- Performance optimization
- S3 storage backend
- CDN integration
- Admin panel

### 9.4 Phase 4: Live Streaming (Future)

- RTMP ingest server
- Live chat system
- Stream management
- VOD recording

---

## 10. Configuration Options

### 10.1 Environment Variables

```bash
# Server
PORT=3000
HOST=0.0.0.0
BASE_URL=http://localhost:3000

# Database
DATABASE_URL=./data/youstream.db

# Storage
STORAGE_PATH=./storage
STORAGE_TYPE=local  # local | s3

# S3 (if STORAGE_TYPE=s3)
S3_ENDPOINT=
S3_BUCKET=
S3_ACCESS_KEY=
S3_SECRET_KEY=
S3_REGION=

# FFmpeg
FFMPEG_PATH=/usr/bin/ffmpeg
FFMPEG_THREADS=4
FFMPEG_HWACCEL=none  # none | nvenc | vaapi | videotoolbox

# Security
SESSION_SECRET=your-secret-key
CORS_ORIGINS=http://localhost:3000

# Features
MAX_UPLOAD_SIZE=10737418240  # 10GB
ENABLE_REGISTRATION=true
ENABLE_COMMENTS=true
```

### 10.2 Configuration File (config.yaml)

```yaml
server:
  port: 3000
  host: 0.0.0.0

database:
  path: ./data/youstream.db

storage:
  type: local
  path: ./storage

transcoding:
  qualities:
    - resolution: 1080
      bitrate: 5000
    - resolution: 720
      bitrate: 2500
    - resolution: 480
      bitrate: 1000
    - resolution: 360
      bitrate: 500
  thumbnails:
    count: 3
    sprite: true

limits:
  maxUploadSize: 10737418240
  maxVideoDuration: 43200 # 12 hours

features:
  registration: true
  comments: true
  likes: true
  playlists: true
```

---

## 11. Deployment Options

### 11.1 Single Binary

- Compile to standalone executable with Deno
- Embed static assets
- Single file deployment

### 11.2 Docker

```dockerfile
FROM denoland/deno:2.0.0

WORKDIR /app
COPY . .

RUN deno cache main.ts
RUN deno task build

EXPOSE 3000
CMD ["deno", "task", "start"]
```

### 11.3 Docker Compose

```yaml
version: "3.8"
services:
  youstream:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data
      - ./storage:/app/storage
    environment:
      - DATABASE_URL=/app/data/youstream.db
      - STORAGE_PATH=/app/storage
```

---

## 12. Success Metrics

### 12.1 Technical Metrics

- **Deployment Success**: >95% successful deployments
- **Transcoding Success**: >99% videos successfully processed
- **Uptime**: >99.5% availability
- **Error Rate**: <1% API error rate

### 12.2 Performance Metrics

- **Video Start Time**: <3s median
- **Rebuffering Rate**: <2% of play time
- **Search Latency**: <200ms p95
- **Upload Speed**: Network-limited only

### 12.3 User Experience

- **Time to First Video**: <5 minutes from deployment
- **Mobile Usability**: Responsive on all screen sizes
- **Accessibility**: WCAG 2.1 AA compliance

---

## 13. Appendix

### 13.1 FFmpeg Quality Presets

| Resolution | Bitrate (video) | Bitrate (audio) | Preset | Profile  |
| ---------- | --------------- | --------------- | ------ | -------- |
| 2160p (4K) | 15-25 Mbps      | 192 kbps        | slow   | high     |
| 1440p      | 10-15 Mbps      | 192 kbps        | slow   | high     |
| 1080p      | 5-8 Mbps        | 128 kbps        | medium | main     |
| 720p       | 2.5-5 Mbps      | 128 kbps        | medium | main     |
| 480p       | 1-2.5 Mbps      | 96 kbps         | fast   | main     |
| 360p       | 0.5-1 Mbps      | 96 kbps         | fast   | baseline |

### 13.2 Supported Video Formats

| Container | Codecs            | Notes                    |
| --------- | ----------------- | ------------------------ |
| MP4       | H.264, H.265, AAC | Most common, recommended |
| WebM      | VP8, VP9, Opus    | Open format              |
| MOV       | H.264, ProRes     | Apple native             |
| MKV       | Various           | Container format         |
| AVI       | Various           | Legacy support           |

### 13.3 API Response Formats

**Video Object**

```json
{
  "id": "abc123",
  "title": "Video Title",
  "description": "Video description",
  "duration": 754,
  "viewCount": 12345,
  "likeCount": 890,
  "commentCount": 45,
  "status": "ready",
  "visibility": "public",
  "thumbnailUrl": "/storage/videos/abc123/thumbnails/default.jpg",
  "manifestUrl": "/storage/videos/abc123/master.m3u8",
  "publishedAt": "2026-02-18T10:30:00Z",
  "channel": {
    "id": "ch456",
    "name": "Channel Name",
    "handle": "@channelhandle",
    "avatarUrl": "/storage/avatars/ch456.jpg",
    "subscriberCount": 24500
  }
}
```

---

## 14. Conclusion

YouStream provides a comprehensive solution for self-hosted video streaming,
combining the familiar YouTube-like experience with full data ownership. Built
on modern technologies (Deno, Hono, FFmpeg), it offers a performant,
maintainable, and extensible platform for individuals and organizations seeking
independence from centralized video platforms.

The phased development approach ensures a solid foundation before adding
advanced features, while the modular architecture allows for customization and
scaling based on specific needs.
