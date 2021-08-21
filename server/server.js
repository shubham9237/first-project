var express = require('express');
var path = require('path');
var cors = require('cors');


var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../buisnesscard/dist/buisnesscard')));
app.use(cors());

app.listen(3000)
console.log("🚀 App listening on Server 3000")