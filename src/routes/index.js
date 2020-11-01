const {Router} = require('express')

const {
   createFlashcard,
   getFlashcardByName
} = require('../controllers/flashcards')

const route = Router();

