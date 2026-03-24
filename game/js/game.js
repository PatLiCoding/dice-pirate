import { playerRollTheDiceSolo } from "./modes/soloMode.js";
import { playerRollLocal } from "./modes/localMode.js";
import {
  getTemplateByGameOverview,
  getTemplateByGameStart,
  getTemplateShipImage,
  getTemplateCaptainImage,
  getTemplateCrewImage,
  getTemplateRollDicePlayerAnimation,
  getTemplateSaveLoot,
  getTemplateRollbtn,
  getTemplateFinishPlayerTurn,
  getTemplateGameEnd,
} from "./templates.js";
import { state } from "./state.js";
import { setButtonsDisabled, renderDice } from "./ui.js";
import {
  MAX_ROUNDS,
  MAX_ROLLS,
  NUM_DICE,
  ANIMATION_DURATION,
} from "./config.js";

export function checkSelectMode(mode) {
  state.mode = mode;
  if (mode === "solo") playerRollTheDiceSolo(mode);
  if (mode === "ai") playerRollTheDice(mode);
  if (mode === "local") playerRollLocal(mode);
}

// export function playerRollTheDice(mode) {
//   state.currentRound++;
//   getTemplateByGameOverview(state.gameRound, state.currentRound);
//   if (state.currentRound < MAX_ROLLS) (setButtonsDisabled(true), currentRoll());
//   if (state.currentRound > MAX_ROLLS)
//     (finishPlayerTurn(), getTemplateByGameOverview(state.gameRound, MAX_ROLLS));
//   if (state.currentRound === MAX_ROLLS)
//     (getTemplateLastRound(mode), setButtonsDisabled(true), currentRoll());
// }

// export function finishPlayerTurn() {
//   document.getElementById("diceContainer").innerHTML = "";
//   getTemplateByGameOverview(state.gameRound, state.currentRound);
//   if (state.crew)
//     (addUpPlayerPoints(), getTemplateEndgameLoot(state.playerPoints));
//   if (state.mode === "ai") getTemplateStartAiRound();
//   state.playDiceCounter.push(state.playerPoints);
//   setButtonsDisabled(false);
// }

export function currentRoll() {
  document.getElementById("diceContainer").innerHTML = "";
  getTemplateRollDicePlayerAnimation();
  setTimeout(() => {
    rerollUnselectedDice();
    checkCondition();
    renderDice();
    setButtonsDisabled(false);
  }, ANIMATION_DURATION);
}

export function rerollUnselectedDice() {
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
}

export function checkCondition() {
  checkShip();
  if (state.ship) {
    document.getElementById("gameConditionContainer").innerHTML = "";
    getTemplateShipImage();
    checkCaptain();
    if (state.captain) (checkCrew(), getTemplateCaptainImage());
    if (state.crew) (checkCrew(), getTemplateCrewImage(), setLootDice());
  }
}

export function checkShip() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].value === 6 && !state.ship) {
      state.ship = true;
      state.saveRolledDice++;
      state.rollDice[i].type = "condition";
      return;
    }
  }
}

export function checkCaptain() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].value === 5 && !state.captain) {
      state.captain = true;
      state.saveRolledDice++;
      state.rollDice[i].type = "condition";
      return;
    }
  }
}

export function checkCrew() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].value === 4 && !state.crew) {
      state.crew = true;
      state.saveRolledDice++;
      state.rollDice[i].type = "condition";
      return;
    }
  }
}

export function setLootDice() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].type === "default") state.rollDice[i].type = "loot";
  }
  getTemplateSaveLoot(state.rollDice);
  if (state.mode === "ai") return;
  renderDice();
}

export function clickDice(index) {
  let dice = state.rollDice[index];
  if (dice.type !== "loot") return;
  dice.selected = !dice.selected;
  checkCondition();
  renderDice();
  checkAllDiceSelected();
}

export function checkAllDiceSelected() {
  const dice = state.rollDice;
  let allSelected = true;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].type === "loot" && !dice[i].selected) {
      allSelected = false;
      state.selectedLootDice = false;
      if (state.currentRound < MAX_ROLLS) getTemplateRollbtn(state.mode);
      break;
    }
  }
  if (allSelected)
    ((state.selectedLootDice = true), getTemplateFinishPlayerTurn(state.mode));
}

export function addUpPlayerPoints() {
  state.playerPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") state.playerPoints += dice.value;
  }
}

export function checkWinner() {
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const playerTotal = sum(state.playDiceCounter);
  const enemyTotal = sum(state.enemyDiceCounter);
  const pointDifference = Math.abs(playerTotal - enemyTotal);
  let gameResult =
    playerTotal > enemyTotal
      ? "Sieg"
      : playerTotal < enemyTotal
        ? "Lose"
        : "Unentschieden";
  getTemplateGameEnd(state.mode, pointDifference, gameResult);
}

export function checkRestartGame(mode) {
  if (mode === "solo") soloGameStart(mode);
  if (mode === "ai") gameStart(mode);
  if (mode === "local") gameStart(mode);
}

export function gameStart(mode) {
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
  state.gameRound = 1;
  getTemplateByGameStart(mode);
  getTemplateByGameOverview(state.gameRound, state.currentRound);
}
