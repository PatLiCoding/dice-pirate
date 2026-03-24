import {
  currentRoll,
  checkCondition,
  rerollUnselectedDice,
  addUpPlayerPoints,
} from "../game.js";
import { state } from "../state.js";
import { MAX_ROUNDS, MAX_ROLLS, ANIMATION_DURATION } from "../config.js";
import {
  setButtonsDisabled,
  updateOverview,
  updateOverviewEndGame,
  updateOverviewEndRoll,
} from "../ui.js";
import {
  getTemplateByGameStart,
  getTemplateRollDiceAiAnimation,
  getTemplateEndgameLootAi,
  getTemplateEndgameLoot,
  getTemplateStartAiRound,
  getTemplateLastRound,
  getTemplateRoundFinished,
  getTemplateGameEnd,
} from "../templates/index.js";

/**
 * Handles the player's dice roll in the current mode.
 * Increments the current round, updates the overview, and handles different game end scenarios.
 * @param {string} mode - The current game mode ("ai" or "local").
 */
export function playerRollTheDice(mode) {
  state.currentRound++;
  updateOverview();
  if (state.currentRound < MAX_ROLLS) (setButtonsDisabled(true), currentRoll());
  if (state.currentRound > MAX_ROLLS)
    (finishPlayerTurn(), updateOverviewEndRoll());
  if (state.currentRound === MAX_ROLLS)
    (getTemplateLastRound(mode), setButtonsDisabled(true), currentRoll());
}

/**
 * Ends the player's turn, updates the overview, and calculates points if crew is completed.
 */
export function finishPlayerTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  updateOverview();
  if (state.crew)
    (addUpPlayerPoints(), getTemplateEndgameLoot(state.playerPoints));
  if (state.mode === "ai") getTemplateStartAiRound();
  state.playDiceCounter.push(state.playerPoints);
  setButtonsDisabled(false);
}

/**
 * Starts the AI's turn by resetting relevant states and triggering the AI roll loop.
 */
export function startAiTurn() {
  document.getElementById("gameConditionContainer").innerHTML = "";
  document.getElementById("pointsContainer").innerHTML = "";
  document.getElementById("btnSection").innerHTML = "";
  state.currentRound = 0;
  state.rollDice = [];
  state.ship = false;
  state.captain = false;
  state.crew = false;
  aiRollLoop();
}

/**
 * Private function: Loops AI dice rolls with a delay and updates the state.
 * @private
 */
function aiRollLoop() {
  state.currentRound++;
  updateOverview();
  if (state.currentRound > MAX_ROLLS) {
    finishAiTurn();
    return;
  }
  getTemplateRollDiceAiAnimation();
  setTimeout(() => {
    rerollUnselectedDice();
    checkCondition();
    if (state.crew === true) getTemplateEndgameLootAi();
    aiRollLoop();
  }, ANIMATION_DURATION);
}

/**
 * Private function: Ends the AI's turn, calculates points, and shows round finished template.
 * @private
 */
function finishAiTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  state.enemyPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") state.enemyPoints += dice.value;
  }
  state.enemyDiceCounter.push(state.enemyPoints);
  showRoundFinished();
}

/**
 * Private function: Resets round state and displays the round finished template.
 * @private
 */
function showRoundFinished() {
  state.currentRound = 0;
  document.getElementById("playgroundContainer").innerHTML = "";
  getTemplateRoundFinished(state.mode);
  updateOverviewEndRoll();
}

/**
 * Starts a new game round and updates templates, checks for game end.
 */
export function startNewRound() {
  state.gameRound++;
  if (state.gameRound > MAX_ROUNDS) {
    checkWinner();
    updateOverviewEndGame();
    return;
  }
  document.getElementById("playgroundContainer").innerHTML = "";
  getTemplateByGameStart(state.mode);
}

/**
 * Determines the winner of the game and displays the game end template.
 */
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
