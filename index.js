// Version: 0.001 (2025-09-30)
import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/results", (req, res) => {
  const query = req.query.q;
  console.log("index.js: Search query:", req.query.q);
  console.log("index.js: body:", req.body);
  res.render("results.ejs", { query });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
