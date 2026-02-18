export async function errorMiddleware(c: any, next: Function) {
  try {
    await next();
  } catch (err: any) {
    console.error("Error:", err);
    const isDebug = process.env && process.env.NODE_ENV !== "production";
    const responseBody: any = { error: "Internal Server Error" };
    if (isDebug && err && typeof err.message === "string") {
      responseBody.details = err.message;
    }
    return c.json(responseBody, 500);
  }
}
