import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getItems(){
  const result = await db.query("SELECT * FROM items");

  let items = [];
  
  result.rows.forEach((item) => {
    items.push(item);
  });
  return items;
};

app.get("/", async (req, res) => {
  const items = await getItems();
  try {
    const items = await getItems();
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error) {
    console.error("Error fetching items: ", error);
    res.status(500).send("Error fetching items");
  }
});

app.post("/add", async (req, res) => {
  const item = req.body["newItem"].trim();
  
  try{
    await db.query(
      "INSERT INTO items (title) VALUES ($1)",
      [item]
    );
    res.redirect("/");
  } catch(error){
    console.log("Error adding item: ", error);
  }
});

app.post("/edit", async (req, res) => {
  const id = req.body["updatedItemId"];
  const title = req.body["updatedItemTitle"];
  
  try{
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [title, id]);
    res.redirect("/");
  } catch(error){
    console.log("Error updating item: ", error);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body["deleteItemId"];
  
  try{
    await db.query(
      "DELETE FROM items WHERE id = $1",
      [id]
    );
    res.redirect("/");
  } catch (error){
    console.log("Error deleting item: ", error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
