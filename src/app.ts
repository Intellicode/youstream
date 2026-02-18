import { Hono } from "hono";
import { cors } from "./middleware/cors.ts";
import { logger } from "./middleware/logger.ts";
import { errorMiddleware } from "./middleware/error.ts";
import health from "./routes/health.ts";

const app = new Hono();

app.use("*", logger);
app.use("*", cors);
app.use("*", errorMiddleware);

app.route("/health", health);

export default app;
