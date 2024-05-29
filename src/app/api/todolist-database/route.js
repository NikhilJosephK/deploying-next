// pages/api/submit-form.js
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todolist",
  password: "Reminder369@",
  port: 5432,
});

export async function GET() {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query("SELECT * FROM todo;");
    const data = result.rows;
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching data", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function POST(data) {
  const val = await data.json();
  const { items } = val;
  console.log(val);

  try {
    console.log(items, val);
    const client = await pool.connect();
    console.log("connected");
    // console.log(firstName, lastName, email);
    const result = await client.query(`INSERT INTO todo (item)
        VALUES ('${items}');`);
    const data = result.rows;
    console.log("fetched data", data);

    client.release();
    return new Response(data);
  } catch (error) {
    console.log("error fetching data", error);
    return new Response(error);
  }
}
