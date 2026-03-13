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
  } else if (curretRound < 3) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    curretRound++;
  } else if (curretRound === 3) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    curretRound++;
    document.getElementById("btnSection").innerHTML = "";
    getTemplateLastRound();
  } else {
    document.getElementById("diceContainer").innerHTML = "";
    document.getElementById("btnSection").innerHTML = "";
    getTemplateRoundFinished();
    curretRound++;
    if (crew === true) {
      if (rollDice.length > 3) {
        let i = rollDice.indexOf(4);
        i !== -1 && rollDice.splice(i, 1);
        let e = rollDice.indexOf(5);
        e !== -1 && rollDice.splice(i, 1);
      }
      getTemplateSaveLoot(rollDice);
      curretRound++;
    }
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
    document.getElementById("gameConditionContainer").innerHTML = "";
    getTemplateShipImage();
    checkCaptain();
    if (captain) (checkCrew(), getTemplateCaptainImage());
    if (crew) (checkCrew(), getTemplateCrewImage());
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

function gameRestart() {
  document.getElementById("playgroundContainer").innerHTML = "";
  getTemplateByGameStart();
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
}
