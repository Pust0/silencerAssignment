const express = require('express')
const {db} = require('./db/models')

const app = express();



db.sync()
.then(() => {
   app.listen(3030, ()=>{
      console.log("Server started on http://localhost:3030")
   })
}).catch((err) => {
   console.log(new Error("Could not start the database"))
   console.log(err)
});