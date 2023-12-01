let express = require("express");
  let app = express();

  //DB 1 connect to mongoDB
  require("dotenv").config();
  const { Database } = require("quickmongo");
  const db = new Database(process.env.MONGODB_URL);
  db.on("ready", () => {
    console.log("Connected to the database");
  });

  db.connect();

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening at", port);
});

//add route to get all word inputs
app.get("/getResponse", (req, res) => {
  console.log("get response");
  //DB 3 fetch from the DB
  db.get("madlibsResponse").then((madlibsData) => {
    let obj = { data: madlibsData };
    res.json(obj);
  });
});