const {Flashcards} = require("../db/models")

//called when we want to create a flash card
async function createFlashcard(){
   try {
      const Flashcard = await Flashcards.create({
         id,
         name,
         definition
      })
      return Flashcard
   } catch(err){
      console.log(err)
   }
}

//called when we ask for the flashcard by inserting the name and getting the whole flashcard as response
async function getFlashcardByName(name){
   return await Flashcards.findOne({where: {name}})
}

//called when we get the flashcard right and we update the id of the flashcard
async function updateFlashcard(flashcard){
   try {
      const updatedFlashcard = await flashcard.update(
         {id: id+1},
         {where: {name: flashcard.name}}
      )
      return updatedFlashcard
   }catch(err){
      console.log(err)
   }
}

//called when we get the flashcard wrong and we change the id of the flashcard back to 1 (ie everyday box)
async function degradeFlashcard(flashcard){
   try {
      const degradedFlashcard = await flashcard.update(
         {id: 1},
         {where: {name: flashcard.name}}
      )
      return degradedFlashcard
   }catch(err){
      console.log(err)
   }
}

module.exports = {
   createFlashcard,
   getFlashcardByName,
   updateFlashcard,
   degradeFlashcard
}