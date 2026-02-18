export async function errorMiddleware(c: any, next: Function) {
  try {
    await next();
  } catch (err: any) {
    console.error("Error:", err);
    return c.json({ error: err.message || "Internal Server Error" }, 500);
  }
}
