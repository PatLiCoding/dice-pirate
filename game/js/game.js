import { playerRollTheDiceSolo, soloGameStart } from "./modes/soloMode.js";
import { playerRollTheDice } from "./modes/aiMode.js";
import { playerRollLocal } from "./modes/localMode.js";
import { state } from "./state.js";
import { setButtonsDisabled, renderDice, updateOverview } from "./ui.js";
import { MAX_ROLLS, NUM_DICE, ANIMATION_DURATION } from "./config.js";
import {
  getTemplateByGameStart,
  getTemplateShipImage,
  getTemplateCaptainImage,
  getTemplateCrewImage,
} from "./templates/gameLayoutTemplates.js";
import {
  getTemplateRollDicePlayerAnimation,
  getTemplateSaveLoot,
} from "./templates/diceTemplates.js";
import {
  getTemplateRollbtn,
  getTemplateFinishPlayerTurnSolo,
  getTemplateFinishPlayerTurn,
  getTemplateFinishPlayerTurnLocal,
} from "./templates/buttonTemplates.js";

export function checkSelectMode(mode) {
  state.mode = mode;
  if (mode === "solo") playerRollTheDiceSolo(mode);
  if (mode === "ai") playerRollTheDice(mode);
  if (mode === "local") playerRollLocal(mode);
}

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
  if (allSelected) checkAllDiceSelectedByMode();
}

function checkAllDiceSelectedByMode() {
  state.selectedLootDice = true;
  if (state.mode === "solo") getTemplateFinishPlayerTurnSolo(state.mode);
  if (state.mode === "ai") getTemplateFinishPlayerTurn(state.mode);
  if (state.mode === "local") getTemplateFinishPlayerTurnLocal(state.mode);
}

export function addUpPlayerPoints() {
  state.playerPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") state.playerPoints += dice.value;
  }
}

export function checkRestartGame(mode) {
  if (mode === "solo") soloGameStart(mode);
  if (mode === "ai") gameStart(mode);
  if (mode === "local") gameStart(mode);
}

export function resetTurnState() {
  state.currentRound = 0;
  state.rollDice = [];
  state.ship = false;
  state.captain = false;
  state.crew = false;
  state.playerPoints = 0;
  state.selectedLootDice = false;
}

export function gameStart(mode) {
  state.mode = mode;
  document.getElementById("playgroundContainer").innerHTML = "";
  resetTurnState();
  state.saveRolledDice = 0;
  state.playDiceCounter = [];
  state.enemyDiceCounter = [];
  state.enemyPoints = 0;
  state.gameRound = 1;
  getTemplateByGameStart(mode);
  updateOverview();
}
