import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Reminder369@",
  port: 5432,
});

export default pool;
