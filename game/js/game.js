import {
  getTemplateSelectMode,
  getTemplateByGameOverview,
  getTemplateByGameStart,
  getTemplateShipImage,
  getTemplateCaptainImage,
  getTemplateCrewImage,
  getTemplateRollDiceAnimation,
  getTemplateSaveLoot,
  getTemplateFromRollDice,
  getTemplateEndgameLoot,
  getTemplateLastRound,
  getTemplateRoundFinished,
  getTemplateDialogGameOverview,
  getTemplateDialogSetings,
} from "./templates.js";
import { state } from "./state.js";

function playerRollTheDice() {
  setButtonsDisabled(true);
  if (state.curretRound === 0) {
    curretRoll();
    getTemplateByGameOverview(
      state.gameRound,
      state.curretRound,
      state.playerPoints,
      state.enemyPoints,
    );
  } else if (state.curretRound < 2) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    getTemplateByGameOverview(
      state.gameRound,
      state.curretRound,
      state.playerPoints,
      state.enemyPoints,
    );
  } else if (state.curretRound === 2) {
    document.getElementById("diceContainer").innerHTML = "";
    curretRoll();
    getTemplateLastRound();
    setButtonsDisabled(true);
    getTemplateByGameOverview(
      state.gameRound,
      state.curretRound,
      state.playerPoints,
      state.enemyPoints,
    );
  } else {
    document.getElementById("diceContainer").innerHTML = "";
    getTemplateRoundFinished();
    getTemplateByGameOverview(
      state.gameRound,
      state.curretRound,
      state.playerPoints,
      state.enemyPoints,
    );
    if (state.crew === true) {
      addUpPlayerPoints();
      getTemplateEndgameLoot(state.playerPoints);
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
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
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
    state.rollDice = state.rollDice.filter(
      (d) => d.type === "condition" || d.selected,
    );
    for (let i = state.rollDice.length; i < 6; i++) {
      const num = Math.floor(Math.random() * 6) + 1;
      newRoll.push({
        value: num,
        type: "default",
        selected: false,
      });
    }
    state.rollDice = state.rollDice.concat(newRoll);
    checkCondition();
    renderDice();
    setButtonsDisabled(false);
  }, 3500);
  state.curretRound++;
}

function checkCondition() {
  checkShip();
  if (state.ship) {
    document.getElementById("gameConditionContainer").innerHTML = "";
    getTemplateShipImage();
    checkCaptain();
    if (state.captain) (checkCrew(), getTemplateCaptainImage());
    if (state.crew) (checkCrew(), getTemplateCrewImage(), setLootDice());
  }
}

function checkShip() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].value === 6 && !state.ship) {
      state.ship = true;
      state.saveRolledDice++;
      state.rollDice[i].type = "condition";
      return;
    }
  }
}

function checkCaptain() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].value === 5 && !state.captain) {
      state.captain = true;
      state.saveRolledDice++;
      state.rollDice[i].type = "condition";
      return;
    }
  }
}

function checkCrew() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].value === 4 && !state.crew) {
      state.crew = true;
      state.saveRolledDice++;
      state.rollDice[i].type = "condition";
      return;
    }
  }
}

function setLootDice() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].type === "default") {
      state.rollDice[i].type = "loot";
    }
  }
  getTemplateSaveLoot(state.rollDice);
  renderDice();
}

function clickDice(index) {
  let dice = state.rollDice[index];
  if (dice.type !== "loot") return;
  dice.selected = !dice.selected;
  checkCondition();
  renderDice();
}

function addUpPlayerPoints() {
  state.playerPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") {
      state.playerPoints += dice.value;
    }
  }
}

function gameRestart() {
  document.getElementById("playgroundContainer").innerHTML = "";
  state.rollDice = [];
  state.saveRolledDice = 0;
  state.playDiceCounter = [];
  state.playerPoints = 0;
  state.enemyDiceCounter = [];
  state.enemyPoints = 0;
  state.ship = false;
  state.captain = false;
  state.crew = false;
  state.curretRound = 0;
  getTemplateByGameStart();
  getTemplateByGameOverview(
    state.gameRound,
    state.curretRound,
    state.playerPoints,
    state.enemyPoints,
  );
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

window.playerRollTheDice = playerRollTheDice;
window.gameRestart = gameRestart;
window.clickDice = clickDice;
window.openDialogGameOverview = openDialogGameOverview;
window.openDialogSetings = openDialogSetings;
window.closeDialog = closeDialog;
