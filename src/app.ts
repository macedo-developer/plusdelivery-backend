import express from "express";

const app = express();

const port = 3003;
app.get("/", (req, res) => {
  res.send("Hello pesso!");
});

app.listen(port, (err) => {
  if (err) return console.error(err);

  return console.log(`Server is listening on ${port}`);
});
