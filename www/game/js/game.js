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
  getTemplateRollDicePlayerAnimation,
  getTemplateSaveLoot,
  getTemplateRollbtn,
  getTemplateFinishPlayerTurnSolo,
  getTemplateFinishPlayerTurn,
  getTemplateFinishPlayerTurnLocal,
} from "./templates/index.js";

/**
 * Sets the selected game mode and starts the corresponding game.
 * @param {string} mode - The game mode to start ("solo", "ai", or "local").
 */
export function checkSelectMode(mode) {
  state.mode = mode;
  if (mode === "solo") playerRollTheDiceSolo(mode);
  if (mode === "ai") playerRollTheDice(mode);
  if (mode === "local") playerRollLocal(mode);
}

/**
 * Executes the current dice roll animation and updates the game state.
 */
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

/**
 * Rerolls all dice that are not selected or part of a condition.
 */
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

/**
 * Checks the current game conditions for ship, captain, and crew, and updates templates accordingly.
 */
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

/**
 * Checks if a ship has been rolled and updates the state.
 */
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

/**
 * Checks if a captain has been rolled and updates the state.
 */
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

/**
 * Checks if a crew has been rolled and updates the state.
 */
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

/**
 * Converts all default dice to loot dice and updates the template.
 */
export function setLootDice() {
  for (let i = 0; i < state.rollDice.length; i++) {
    if (state.rollDice[i].type === "default") state.rollDice[i].type = "loot";
  }
  getTemplateSaveLoot(state.rollDice);
  if (state.mode === "ai") return;
  renderDice();
}

/**
 * Handles a click on a dice, toggling its selection and updating game state.
 * @param {number} index - The index of the clicked dice in state.rollDice.
 */
export function clickDice(index) {
  let dice = state.rollDice[index];
  if (dice.type !== "loot") return;
  dice.selected = !dice.selected;
  checkCondition();
  renderDice();
  checkAllDiceSelected();
}

/**
 * Checks if all loot dice are selected and updates the game accordingly.
 */
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

/**
 * Handles the end of a turn depending on the game mode.
 * @private
 */
function checkAllDiceSelectedByMode() {
  state.selectedLootDice = true;
  if (state.mode === "solo") getTemplateFinishPlayerTurnSolo(state.mode);
  if (state.mode === "ai") getTemplateFinishPlayerTurn(state.mode);
  if (state.mode === "local") getTemplateFinishPlayerTurnLocal(state.mode);
}

/**
 * Adds up all loot dice values and updates the player's points.
 */
export function addUpPlayerPoints() {
  state.playerPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") state.playerPoints += dice.value;
  }
}

/**
 * Restarts the game based on the selected mode.
 * @param {string} mode - The game mode to restart ("solo", "ai", "local").
 */
export function checkRestartGame(mode) {
  if (mode === "solo") soloGameStart(mode);
  if (mode === "ai") gameStart(mode);
  if (mode === "local") gameStart(mode);
}

/**
 * Resets the turn state to initial values.
 */
export function resetTurnState() {
  state.currentRound = 0;
  state.rollDice = [];
  state.ship = false;
  state.captain = false;
  state.crew = false;
  state.playerPoints = 0;
  state.selectedLootDice = false;
}

/**
 * Starts a new game, resets the state, and renders the initial game template.
 * @param {string} mode - The game mode to start ("solo", "ai", "local").
 */
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
