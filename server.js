const express = require("express");
const homeRoute = require("./routes/home-route");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(homeRoute);
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
