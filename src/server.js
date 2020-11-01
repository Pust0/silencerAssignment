const express = require('express')
const {db} = require('./db/models')
const { flashcardRoute } = require("./routes/index")

const app = express();

//for post requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.sync()
.then(() => {
   app.listen(3030, ()=>{
      console.log("Server started on http://localhost:3030")
   })
}).catch((err) => {
   console.log(new Error("Could not start the database"))
   console.log(err)
});