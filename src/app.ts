import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

const port = 3003;

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
