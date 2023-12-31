// 1. import pg package
import pg from "pg";
import {
  createTable_Authors,
  createTable_Books,
  createTable_Author_Book,
} from "./createTables.js";
import {
  dropTable_Author_Book,
  dropTable_Authors,
  dropTable_Books,
} from "./dropTables.js";
import { seedData } from "./seedData.js";

// 2. Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// 3. Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

await dropTable_Author_Book();
await dropTable_Authors();
await dropTable_Books();

await createTable_Authors();
await createTable_Books();
await createTable_Author_Book();

await pool.end();
