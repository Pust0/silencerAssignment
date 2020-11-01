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
    const { flashcardId, name, definition } = req.body;
    const flashcard = await createFlashcard(flashcardId, name, definition);
    res.status(201).send(flashcard);
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      error: "Need flashcardId, name and definition to create post",
    });
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
route.post("/update/:name", async (req, res) => {
  try {
    const flashcard = await updateFlashcard(req.params.name);
    res.status(201).send(flashcard);
  } catch (err) {
    console.log(err);
  }
});

//request for degrading a flashcard
route.post("/degrade/:name", async (req, res) => {
  try {
    const flashcard = await degradeFlashcard(req.params.name);
    res.status(201).send(flashcard);
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  flashcardRoute: route,
};
