# TASK

1. Build a flashcard game by implementing the Leitner system where the contents are updated in real-time.
2. (For brownie points) Allow users to sign-up and store their progress.

# Leitner System

In this method flashcards are sorted into groups according to how well the learner knows each one in the Leitner's learning box. The learners try to recall the solution written on a flashcard. If they succeed, they send the card to the next group. If they fail, they send it back to the first group. Each succeeding group has a longer period of time before the learner is required to revisit the cards.

# THINGS I NEED

flashcards,

boxes
id: 1 represents everyday,
id: 2 represents tues+thursday,
id: 3 represents friday,
id: 4 represents (once every 2 weeks)
and so on

# Usage Manual

## Database setup

```shell
   mysql -u root -p
```

```sql
   CREATE DATABASE silencerdb;
   CREATE USER silenceruser IDENTIFIED WITH mysql_native_password by 'silencerpass';
   grant all privileges on silencerdb.* to silenceruser;
   flush privileges;
```

## Install PostMan and send request as follows:

1.
