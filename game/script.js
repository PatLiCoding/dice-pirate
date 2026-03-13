rollDice = [];
saveRolledDice = 0;
playDiceCounter = [];
playerPoints = 0;
enemyDiceCounter = [];
enemy = 0;
ship = false;
captain = false;
crew = false;
curretRound = 1;
gameRound = 1;

function oninit() {
  getTemplateByGameStart();
}

function playerRollTheDice() {
  if (curretRound === 1) {
    curretRoll();
    curretRound++;
  } else if (curretRound < 4) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    curretRound++;
  } else if (curretRound === 4) {
    getTemplateRoundFinished();
    curretRound++;
  }
}

function curretRoll() {
  rollDice = [];
  for (let index = 0; index < 6 - saveRolledDice; index++) {
    const curretNumber = Math.floor(Math.random() * 6) + 1;
    rollDice.push(curretNumber);
    getTemplateFromRollDice(curretNumber);
  }
  console.log(rollDice);
  checkCondition();
}

function checkCondition() {
  checkShip();
  if (ship) {
    checkCaptain();
    if (captain) checkCrew();
  }
}

function checkShip() {
  for (let index = 0; index < rollDice.length; index++) {
    if (rollDice[index] === 6) {
      if (!ship) (saveRolledDice++, (ship = true));
    }
  }
}

function checkCaptain() {
  for (let index = 0; index < rollDice.length; index++) {
    if (rollDice[index] === 5) {
      if (!captain) (saveRolledDice++, (captain = true));
    }
  }
}

function checkCrew() {
  for (let index = 0; index < rollDice.length; index++) {
    if (rollDice[index] === 4) {
      if (!crew) (saveRolledDice++, (crew = true));
    }
  }
}
