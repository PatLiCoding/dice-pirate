import {
  getTemplateByGameOverview,
  getTemplateByGameStart,
  getTemplateShipImage,
  getTemplateCaptainImage,
  getTemplateCrewImage,
  getTemplateRollDiceAnimation,
  getTemplateSaveLoot,
  getTemplateEndgameLoot,
  getTemplateLastRound,
  getTemplateRoundFinished,
} from "./templates.js";
import { state } from "./state.js";
import {
  setButtonsDisabled,
  renderDice,
  openDialogGameOverview,
  openDialogSettings,
  closeDialog,
} from "./ui.js";
import {
  MAX_ROUNDS,
  MAX_ROLLS,
  NUM_DICE,
  ANIMATION_DURATION,
} from "./config.js";

function playerRollTheDice() {
  setButtonsDisabled(true);
  state.currentRound++;
  if (state.currentRound < MAX_ROLLS) curretRoll();
  if (state.currentRound > MAX_ROLLS) {
    document.getElementById("diceContainer").innerHTML = "";
    getTemplateRoundFinished();
    getTemplateByGameOverview(
      state.gameRound,
      MAX_ROLLS,
      state.playerPoints,
      state.enemyPoints,
    );
    if (state.crew === true)
      (addUpPlayerPoints(), getTemplateEndgameLoot(state.playerPoints));
    return;
  }
  if (state.currentRound === MAX_ROLLS) (curretRoll(), getTemplateLastRound());
  getTemplateByGameOverview(
    state.gameRound,
    state.currentRound,
    state.playerPoints,
    state.enemyPoints,
  );
}

function curretRoll() {
  document.getElementById("diceContainer").innerHTML = "";
  getTemplateRollDiceAnimation();
  setTimeout(() => {
    let newRoll = [];
    state.rollDice = state.rollDice.filter(
      (d) => d.type === "condition" || d.selected,
    );
    for (let i = state.rollDice.length; i < NUM_DICE; i++) {
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
  }, ANIMATION_DURATION);
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
  state.currentRound = 0;
  getTemplateByGameStart();
  getTemplateByGameOverview(
    state.gameRound,
    state.currentRound,
    state.playerPoints,
    state.enemyPoints,
  );
}

window.playerRollTheDice = playerRollTheDice;
window.gameRestart = gameRestart;
window.clickDice = clickDice;
window.openDialogGameOverview = openDialogGameOverview;
window.openDialogSettings = openDialogSettings;
window.closeDialog = closeDialog;
