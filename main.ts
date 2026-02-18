import app from "./src/app.ts";

const port = 3000;

Deno.serve({ port }, app.fetch);
