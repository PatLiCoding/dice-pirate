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
  getTemplateSelectMode();
}

function playerRollTheDice() {
  setButtonsDisabled(true);
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
    getTemplateLastRound();
    setButtonsDisabled(true);
  } else {
    document.getElementById("diceContainer").innerHTML = "";
    getTemplateRoundFinished();
    curretRound++;
    if (crew === true) {
      addUpPlayerPoints();
      getTemplateEndgameLoot(playerPoints);
      curretRound++;
    }
  }
}

function setButtonsDisabled(state) {
  const buttons = document.querySelectorAll("#btnSection button");
  buttons.forEach((btn) => {
    btn.disabled = state;
  });
}

function renderDice() {
  document.getElementById("diceContainer").innerHTML = "";
  for (let i = 0; i < rollDice.length; i++) {
    let dice = rollDice[i];
    let cssClass = "dice defaultDice";
    if (dice.type === "condition") cssClass = "dice conditionDice";
    if (dice.type === "loot") cssClass = "dice lootDice";
    if (dice.selected) cssClass = "dice saveLootDice";
    getTemplateFromRollDice(cssClass, i, dice.value);
  }
}

function curretRoll() {
  getTemplateRollDiceAnimation();
  setTimeout(() => {
    let newRoll = [];
    rollDice = rollDice.filter((d) => d.type === "condition" || d.selected);
    for (let i = rollDice.length; i < 6; i++) {
      const num = Math.floor(Math.random() * 6) + 1;
      newRoll.push({
        value: num,
        type: "default",
        selected: false,
      });
    }
    rollDice = rollDice.concat(newRoll);
    checkCondition();
    renderDice();
    setButtonsDisabled(false);
  }, 3500);
}

function checkCondition() {
  checkShip();
  if (ship) {
    document.getElementById("gameConditionContainer").innerHTML = "";
    getTemplateShipImage();
    checkCaptain();
    if (captain) (checkCrew(), getTemplateCaptainImage());
    if (crew) (checkCrew(), getTemplateCrewImage(), setLootDice());
  }
}

function checkShip() {
  for (let i = 0; i < rollDice.length; i++) {
    if (rollDice[i].value === 6 && !ship) {
      ship = true;
      saveRolledDice++;
      rollDice[i].type = "condition";
      return;
    }
  }
}

function checkCaptain() {
  for (let i = 0; i < rollDice.length; i++) {
    if (rollDice[i].value === 5 && !captain) {
      captain = true;
      saveRolledDice++;
      rollDice[i].type = "condition";
      return;
    }
  }
}

function checkCrew() {
  for (let i = 0; i < rollDice.length; i++) {
    if (rollDice[i].value === 4 && !crew) {
      crew = true;
      saveRolledDice++;
      rollDice[i].type = "condition";
      return;
    }
  }
}

function setLootDice() {
  for (let i = 0; i < rollDice.length; i++) {
    if (rollDice[i].type === "default") {
      rollDice[i].type = "loot";
    }
  }
  getTemplateSaveLoot(rollDice);
  renderDice();
}

function clickDice(index) {
  let dice = rollDice[index];
  if (dice.type !== "loot") return;
  dice.selected = !dice.selected;
  checkCondition();
  renderDice();
}

function addUpPlayerPoints() {
  playerPoints = 0;
  for (let i = 0; i < rollDice.length; i++) {
    let dice = rollDice[i];
    if (dice.type === "loot") {
      playerPoints += dice.value;
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
