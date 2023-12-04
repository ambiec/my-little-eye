let express = require("express");
let app = express();
let prompts = require('/prompts.json');

// lol DB 1 connect to mongoDB
//   const { Database } = require("quickmongo");
//   const db = new Database("mongodb+srv://connections-lab:connections-lab@cluster0.atgb94s.mongodb.net/?retryWrites=true&w=majority");
//   db.on("ready", () => {
//     console.log("Connected to the database");
//   });

//   db.connect();

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening at", port);
});

//pulling prompt data
async function fetchPromptData() {
  try {
      const response = await fetch('prompts.json'); // Replace with the correct path to your JSON file
      if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
      }
      const jsonData = await response.json();
      return jsonData;
  } catch (error) {
      console.error(error);
      return null;
  }
}

// async function getRandomPrompt() {
//   const promptData = await fetchPromptData();
//   console.log(promptData);
// }





// //home route
// app.get("/", (req, res) => {
//   res.send("home");
// });

// //add route to get all word inputs
// app.get("/getResponse", (req, res) => {
//   console.log("get response");
//   //DB 3 fetch from the DB
  
//   db.get("promptsData").then((promptData) => {
//     console.log(promptData);
//     let obj = {data: promptData};
//     res.json(obj);
// });
// });