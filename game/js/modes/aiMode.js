import {
  currentRoll,
  checkCondition,
  rerollUnselectedDice,
  checkWinner,
  addUpPlayerPoints,
} from "../game.js";
import {
  getTemplateByGameOverview,
  getTemplateByGameStart,
  getTemplateRollDiceAiAnimation,
  getTemplateRoundFinished,
  getTemplateStartAiRound,
  getTemplateEndgameLootAi,
  getTemplateEndgameLoot,
  getTemplateLastRound,
} from "../templates.js";
import { state } from "../state.js";
import { MAX_ROUNDS, MAX_ROLLS, ANIMATION_DURATION } from "../config.js";
import { setButtonsDisabled } from "../ui.js";

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

export function playerRollTheDice(mode) {
  state.currentRound++;
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  if (state.currentRound < MAX_ROLLS) (setButtonsDisabled(true), currentRoll());
  if (state.currentRound > MAX_ROLLS)
    (finishPlayerTurn(), getTemplateByGameOverview(state.gameRound, MAX_ROLLS));
  if (state.currentRound === MAX_ROLLS)
    (getTemplateLastRound(mode), setButtonsDisabled(true), currentRoll());
}

export function finishPlayerTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  if (state.crew)
    (addUpPlayerPoints(), getTemplateEndgameLoot(state.playerPoints));
  if (state.mode === "ai") getTemplateStartAiRound();
  state.playDiceCounter.push(state.playerPoints);
  setButtonsDisabled(false);
}

function aiRollLoop() {
  state.currentRound++;
  getTemplateByGameOverview(state.gameRound, state.currentRound);
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
  getTemplateByGameOverview(state.gameRound, MAX_ROLLS);
}

export function startNewRound() {
  state.gameRound++;
  if (state.gameRound > MAX_ROUNDS) {
    checkWinner();
    return;
  }
  document.getElementById("playgroundContainer").innerHTML = "";
  getTemplateByGameStart(state.mode);
  getTemplateByGameOverview(state.gameRound, state.currentRound);
}
