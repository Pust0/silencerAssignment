const { Router } = require("express");

const {
  createFlashcard,
  getFlashcardByName,
  updateFlashcard,
  degradeFlashcard,
} = require("../controllers/flashcards");

const route = Router();

//request for creating a flashcard
route.post("/", async (req, res) => {
  try {
    const flashcard = await createFlashcard();
    res.status(201).send(flashcard);
  } catch (err) {
    console.log(err);
  }
});

//request for getting a flashcard
route.get("/:name", async (req, res) => {
  let flashcard;
  flashcard = await getFlashcardByName(req.params.name);

  if (flashcard) {
    res.status(200).send(flashcard);
  } else {
    res.status(404).send({
      error: "No such flashcard exists",
    });
  }
});

//request for updating a flashcard
route.post("/update", async (req, res) => {
  try {
    const flashcard = await updateFlashcard();
    res.status(201).send(flashcard);
  } catch (err) {
    console.log(err);
  }
});

//request for degrading a flashcard
route.post("/degrade", async (req, res) => {
  try {
    const flashcard = await degradeFlashcard();
    res.status(201).send(flashcard);
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  flashcardRoute: route,
};
