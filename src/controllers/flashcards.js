const {Flashcards} = require("../db/models")

//called when we want to create a flash card
async function createFlashcard(){
   const Flashcard = await Flashcards.create({
      id,
      name,
      definition
   })
   return Flashcard
}

//called when we ask for the flashcard by inserting the name and getting the whole flashcard as response
async function getFlashcardByName(name){
   return await Flashcards.findOne({where: {name}})
}

//called when we get the flashcard right and we update the id of the flashcard
async function updateFlashcard(name){
   const updatedFlashcard = await Flashcard.find({where: {title: name}})
   .on('success', function (flashcard){
      if(response == true){
         flashcard.update({
            id:id+1
         })
      }
   })
}


//called when we get the flashcard wrong and we change the id of the flashcard back to 1 (ie everyday box)
async function degradeFlashcard(){

}

module.exports = {
   createFlashcard,
   getFlashcardByName,
   updateFlashcard,
   degradeFlashcard
}