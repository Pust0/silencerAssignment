# TASK

1. Build a flashcard game by implementing the Leitner system where the contents are updated in real-time.
2. (For brownie points) Allow users to sign-up and store their progress.

# Leitner System

In this method flashcards are sorted into groups according to how well the learner knows each one in the Leitner's learning box. The learners try to recall the solution written on a flashcard. If they succeed, they send the card to the next group. If they fail, they send it back to the first group. Each succeeding group has a longer period of time before the learner is required to revisit the cards.3

# THINGS I NEED

flashcards,

box1: everyday,
box2: tuesday+thursday,
box3: friday,

user: can signup and store their progress

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

# NOTE

How you arrived at the final solution and the algos/stuff you're using,

usage manual,

code readalility
