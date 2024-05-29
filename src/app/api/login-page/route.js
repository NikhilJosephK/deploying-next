// pages/api/submit-form.js
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Reminder369@",
  port: 5432,
});

export async function POST(data) {
  const val = await data.json();
  const { firstName, lastName, email } = val;

  try {
    console.log(firstName, lastName, email);
    const client = await pool.connect();
    console.log("connected");
    // console.log(firstName, lastName, email);
    const result =
      await client.query(`INSERT INTO userdata (id,firstname,lastname,email)
        VALUES (13,'${firstName}','${lastName}','${email}');`);
    const data = result.rows;
    console.log("fetched data", data);

    client.release();
    return data;
  } catch (error) {
    console.log("error fetching data", error);
    return new Response(error);
  }
}
