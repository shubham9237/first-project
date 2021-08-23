const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
const db = require("./db/mongodb");
const header_middleware = require("./middlewares/header");
const userRoutes = require("./Routes/userRoute");

app.use(express.json());
app.use(header_middleware);
app.use("/api/user", userRoutes);

app.use(express.static(process.cwd() + "/buisnesscard"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(process.cwd() + "/buisnesscard/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
