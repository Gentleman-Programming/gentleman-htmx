const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./app/model/dbconfig");
const Users = require("./app/model/users");

sequelize.sync({ force: true }).then(async () => {
  console.log("db ready to be used...");
});

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`service endpoint = http://localhost:${PORT}`);
});

app.get("/", async (req, res) => {
  const users = await Users.findAndCountAll();
  return res.render("index", { users: users.rows });
});

app.post("/submit", async (req, res) => {
  const user = {
    name: req.body.name,
    age: req.body.age,
  };

  await Users.create(user).then(() => {
    return res.send(`<li>${req.body.name}</li>`);
  });
});
