const express = require("express"),
  path = require("path"),
  route = require("./route");

const app = express(),
  PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "build")));

route(app);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
