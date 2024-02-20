const Character = require("./player/character");

const gandalf = new Character("Gandalf", "Wizard", 5, 5, 100);
const frodo = new Character("Frodo", "Hobbit", 5, 5, 100);

const players = [gandalf, frodo];

const chooseRandPlayer = (players) => {
  return players[Math.floor(Math.random() * players.length)];
};

const setRandomRounds = (maxRounds) => {
  return Math.floor(Math.random() * maxRounds) + 1;
};

function startBattle(players) {
  let rounds = setRandomRounds(99);
  let currentRound = 1;

  let attacker = chooseRandPlayer(players);
  let defender = attacker === gandalf ? frodo : gandalf;

  console.log("Battle Start!");
  console.log(`${gandalf.name} vs ${frodo.name}`);
  console.log("--------------------------");

  do {
    console.log(`\nRound ${currentRound} from ${rounds} FIGHT!`);
    currentRound++;

    console.log(`${attacker.name} attacks ${defender.name}!`);

    attacker.attack(defender);

    if (defender.isAlive()) {
      defender.levelUp();
    }

    if (!defender.isAlive()) {
      console.log(`\n${defender.name} has been defeated!`);
      break;
    }

    [attacker, defender] = [defender, attacker];

    currentRound++;
  } while (
    currentRound <= rounds &&
    players[0].isAlive() &&
    players[1].isAlive()
  );

  if (players[0].isAlive() && players[1].isAlive()) {
    if (players[0].hitPoints > players[1].hitPoints) {
      console.log(`\n${players[0].name} wins!`);
      return;
    } else {
      console.log(`\n${players[1].name} wins!`);
      return;
    }
  }
}

startBattle(players);
