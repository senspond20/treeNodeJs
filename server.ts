const express = require("express");
const c = require("./modules/category.ts")
const app = express();
const port = 3000;


app.get("/", (req, res, next) => {
  res.json(c.getCategorySampleData());
});

app.get("/tree", (req, res, next) => {
    res.json(c.getTree(c.getCategorySampleData()));
  });
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});