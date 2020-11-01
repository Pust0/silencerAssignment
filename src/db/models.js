const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: "mysql",
   database: "silencerdb",
   username: "silenceruser",
   password: "silencerpass"
})

//Flashcard name
const FLASHCARD_NAME = {
   type: Sequelize.DataTypes.STRING,
   allowNull: false
}

//Flashcard definition
const FLASHCARD_DEF = {
   type: Sequelize.DataTypes.STRING,
   allowNull: false
}


//Tables
const Flashcards = db.define("flashcard", {
   // id: 1 (for Everyday box)
   // id: 2 (for tuesday and thursday box)
   // id: 3 (for friday box)
   id:{
      type: Sequelize.DataTypes.SMALLINT,
      allowNull: false
   },
   name: FLASHCARD_NAME,
   definition: FLASHCARD_DEF,
})

module.exports = {db, Flashcards};