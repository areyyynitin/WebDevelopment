import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_xth3qTsJjZ2g",
  port: 5432,
  host: "ep-snowy-heart-a1r020zd-pooler.ap-southeast-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

app.post("/signup", async (req, res) => {
  const { username, email, password, city, country, street, pincode } =
    req.body;

  try {
    const insertQuery = `insert into users(username,email,password) values($1,$2,$3) RETURNING id;`;
    const addressInsertQuery = `insert into addresses(city , country,street , pincode,user_id) values($1,$2,$3,$4,$5)`;

    await pgClient.query(`BEGIN;`);
    const userResponse = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);
    const user_id = userResponse.rows[0].id;
    await pgClient.query(addressInsertQuery, [
      city,
      country,
      street,
      pincode,
      user_id,
    ]);
    await pgClient.query(`COMMIT;`);

    res.json({ message: `${username}, ${email}..you have signup up` });
  } catch (error) {
    res.json({ message: "error while signing up", error });
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = `select username,email,id from users where id=$1`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `select * from addresses where user_id=$1`;
  const response2 = await pgClient.query(query2, [id]);

  res.json({
    user: response1.rows[0],
    address: response2.rows,
  });
});

app.get("/join", async (req, res) => {
  const id = req.query.id;

  const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users FULL JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1; `;

  const response = await pgClient.query(query, [id]);

  res.json({
    user: response.rows,
  });
});

app.listen(5000, async () => {
  await pgClient.connect();
  console.log("DB CONNECTED");
});
