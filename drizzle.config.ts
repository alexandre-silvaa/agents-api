import { defineConfig } from "drizzle-kit";
import { config } from "./src/config.ts";

export default defineConfig({
  dialect: "postgresql",
  casing: "snake_case",
  schema: "./src/db/schema/**.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: config.DATABASE_URL,
  },
});
