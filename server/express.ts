import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`service endpoint = http://localhost:${PORT}`);
});

export default app;
