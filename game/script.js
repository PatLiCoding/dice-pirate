rollDice = [];
saveRolledDice = 0;
playDiceCounter = [];
playerPoints = 0;
enemyDiceCounter = [];
enemyPoints = 0;
ship = false;
captain = false;
crew = false;
curretRound = 0;
gameRound = 1;

function oninit() {
  getTemplateSelectMode();
}

function playerRollTheDice() {
  setButtonsDisabled(true);
  if (curretRound === 0) {
    curretRoll();
    getTemplateByGameOverview(
      gameRound,
      curretRound,
      playerPoints,
      enemyPoints,
    );
  } else if (curretRound < 2) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    getTemplateByGameOverview(
      gameRound,
      curretRound,
      playerPoints,
      enemyPoints,
    );
  } else if (curretRound === 2) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    getTemplateLastRound();
    setButtonsDisabled(true);
    getTemplateByGameOverview(
      gameRound,
      curretRound,
      playerPoints,
      enemyPoints,
    );
  } else {
    document.getElementById("diceContainer").innerHTML = "";
    getTemplateRoundFinished();
    getTemplateByGameOverview(
      gameRound,
      curretRound,
      playerPoints,
      enemyPoints,
    );
    if (crew === true) {
      addUpPlayerPoints();
      getTemplateEndgameLoot(playerPoints);
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
  curretRound++;
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
  rollDice = [];
  saveRolledDice = 0;
  playDiceCounter = [];
  playerPoints = 0;
  enemyDiceCounter = [];
  enemyPoints = 0;
  ship = false;
  captain = false;
  crew = false;
  curretRound = 0;
  getTemplateByGameStart();
  getTemplateByGameOverview(gameRound, curretRound, playerPoints, enemyPoints);
}

function openDialogGameOverview() {
  getTemplateDialogGameOverview();
  document.body.classList.add("noScroll");
  document.getElementById("dialogOverlay").classList.remove("d-none");
}

function openDialogSetings() {
  getTemplateDialogSetings();
  document.body.classList.add("noScroll");
  document.getElementById("dialogOverlay").classList.remove("d-none");
}

function closeDialog() {
  document.getElementById("dialogOverlay").classList.add("d-none");
  document.body.classList.remove("noScroll");
}
