const { Flashcards } = require("../db/models");

//called when we want to create a flash card
async function createFlashcard(flashcardId, name, definition) {
  try {
    const Flashcard = await Flashcards.create({
      flashcardId,
      name,
      definition,
    });
    return Flashcard;
  } catch (err) {
    console.log(err);
  }
}

//called when we ask for the flashcard by inserting the name and getting the whole flashcard as response
async function getFlashcardByName(name) {
  return await Flashcards.findOne({ where: { name } });
}

//called when we get the flashcard right and we update the id of the flashcard
async function updateFlashcard(name) {
  try {
    const updatedFlashcard = await Flashcards.increment(
      "flashcardId",
      { by: 1 },
      { where: { name } }
    );
    return updatedFlashcard;
  } catch (err) {
    console.log(err);
  }
}

//called when we get the flashcard wrong and we change the id of the flashcard back to 1 (ie everyday box)
async function degradeFlashcard(name) {
  try {
    const degradedFlashcard = await Flashcards.update(
      { flashcardId: 1 },
      { where: { name } }
    );
    return degradedFlashcard;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createFlashcard,
  getFlashcardByName,
  updateFlashcard,
  degradeFlashcard,
};

/*TEST CODE*/

// async function task() {
//   console.log(await createFlashcard(1, "New Delhi", "Capital of India")),
//     console.log(await createFlashcard(1, "Beijing", "Capital of China")),
//     console.log(await createFlashcard(1, "Washington", "Capital of USA")),
//     console.log(await createFlashcard(1, "Moscow", "Capital of Russia")),
//     console.log(
//       await createFlashcard(1, "Amsterdam", "Capital of Netherlands")
//     );
// }

// task();
