
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const users = [];

app.use(express.json());
app.use(express.static(process.cwd()+"./../buisnesscard/dist/buisnesscard/"));

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(process.cwd()+"./../buisnesscard/dist/buisnesscard/index.html"))
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});