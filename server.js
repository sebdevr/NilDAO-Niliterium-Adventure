const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
require("dotenv").config({ path: "./src/config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./src/routes/record"));
// get driver connection
const dbo = require("./src/db/conn");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Nil DAO - Server is running on port: ${port}`);
}); 