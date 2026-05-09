import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { randomUUID } from "node:crypto";
import { execFileSync } from "node:child_process";
import { Pool } from "pg";

let prisma: PrismaClient;
let pool: Pool;

function generateUniqueDatabaseURL(schemaId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Please provider a DATABASE_URL environment variable");
  }

  const url = new URL(process.env.DATABASE_URL);

  url.searchParams.set("schema", schemaId);

  return url.toString();
}

const schemaId = randomUUID();

beforeAll(async () => {
  const databaseURL = generateUniqueDatabaseURL(schemaId);

  process.env.DATABASE_URL = databaseURL;

  execFileSync("npx", ["prisma", "migrate", "deploy"], {
    stdio: "inherit",
  });

  pool = new Pool({
    connectionString: databaseURL,
  });

  const adapter = new PrismaPg(pool);

  prisma = new PrismaClient({
    adapter,
  });
});

afterAll(async () => {
  await prisma?.$executeRawUnsafe(
    `DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`,
  );
  await prisma?.$disconnect();
  await pool?.end();
});
