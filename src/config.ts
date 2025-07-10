import z from "zod";

const configSchema = z.object({
  PORT: z.coerce.number().default(3333),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
});

export const config = configSchema.parse(process.env);
