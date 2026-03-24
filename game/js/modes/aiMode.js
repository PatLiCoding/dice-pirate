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
import { getTemplateByGameStart } from "../templates/gameLayoutTemplates.js";
import {
  getTemplateRollDiceAiAnimation,
  getTemplateEndgameLootAi,
  getTemplateEndgameLoot,
} from "../templates/diceTemplates.js";
import {
  getTemplateStartAiRound,
  getTemplateLastRound,
} from "../templates/buttonTemplates.js";
import { getTemplateRoundFinished } from "../templates/roundTemplates.js";
import { getTemplateGameEnd } from "../templates/endgameTemplates.js";

export function playerRollTheDice(mode) {
  state.currentRound++;
  updateOverview();
  if (state.currentRound < MAX_ROLLS) (setButtonsDisabled(true), currentRoll());
  if (state.currentRound > MAX_ROLLS)
    (finishPlayerTurn(), updateOverviewEndRoll());
  if (state.currentRound === MAX_ROLLS)
    (getTemplateLastRound(mode), setButtonsDisabled(true), currentRoll());
}

export function finishPlayerTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  updateOverview();
  if (state.crew)
    (addUpPlayerPoints(), getTemplateEndgameLoot(state.playerPoints));
  if (state.mode === "ai") getTemplateStartAiRound();
  state.playDiceCounter.push(state.playerPoints);
  setButtonsDisabled(false);
}

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

function showRoundFinished() {
  state.currentRound = 0;
  document.getElementById("playgroundContainer").innerHTML = "";
  getTemplateRoundFinished(state.mode);
  updateOverviewEndRoll();
}

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
