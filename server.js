const express = require("express");
const PORT = process.env.PORT || 3001;
const knex = require("./knex/knex.js");
const app = express();

app.get("/", async (req, res) => {
   const datas = await knex.from("users").select("*");
  // const datas = {
  //   name: 'email'
  // }
  res.json(datas);
  // use the knex variable above to create dynamic queries
});

app.listen(PORT, () => {
  console.log(`Listening.... ${PORT}`);
});
