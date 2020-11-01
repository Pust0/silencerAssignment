const {Router} = require('express')

const {
   createFlashcard,
   getFlashcardByName,
   updateFlashcard,
   degradeFlashcard
} = require('../controllers/flashcards')

const route = Router();

route.get("/", async(req,res)=>{
   const flashcard = await createFlashcard();
   res.status(201).send(flashcard);
})

module.exports = {
   flashcardRoute: route
}