const express = require("express"),
  path = require("path"),
  route = require("./route");

const app = express(),
  hostURL = "http://localhost",
  PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/build")));
route(app, hostURL);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
