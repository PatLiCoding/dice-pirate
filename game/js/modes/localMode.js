import { state } from "../state.js";
import { currentRoll, addUpPlayerPoints } from "../game.js";
import {
  getTemplateByGameStart,
  getTemplateByGameOverview,
  getTemplateRoundFinished,
  getTemplateLastRound,
  getTemplateFinishPlayerTurnLocal,
  getTemplateRoundFinishedLocal,
  getTemplateGameEnd,
} from "../templates.js";
import { setButtonsDisabled } from "../ui.js";
import { MAX_ROLLS, MAX_ROUNDS } from "../config.js";

function resetTurnState() {
  state.currentRound = 0;
  state.rollDice = [];
  state.ship = false;
  state.captain = false;
  state.crew = false;
  state.playerPoints = 0;
  state.selectedLootDice = false;
}

export function startLocalTurn(mode) {
  state.activePlayer = "player1";
  state.gameRound = 1;
  state.playDiceCounter = [];
  state.enemyDiceCounter = [];
  resetTurnState();
  getTemplateByGameStart(mode);
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  setButtonsDisabled(false);
}

export function playerRollLocal() {
  state.currentRound++;
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  if (state.currentRound < MAX_ROLLS) {
    setButtonsDisabled(true);
    currentRoll();
  } else if (state.currentRound === MAX_ROLLS) {
    getTemplateLastRound(state.mode);
    setButtonsDisabled(true);
    currentRoll();
  } else {
    finishLocalPlayerTurn();
  }
}

function finishLocalPlayerTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  addUpPlayerPoints();
  if (state.activePlayer === "player1") {
    state.playDiceCounter.push(state.playerPoints);
  } else {
    state.enemyDiceCounter.push(state.playerPoints);
  }
  if (state.activePlayer === "player1") getTemplateFinishPlayerTurnLocal();
  if (state.activePlayer === "player2") getTemplateRoundFinishedLocal();
}

export function finishLocalTurn() {
  if (state.activePlayer === "player1") {
    state.activePlayer = "player2";
    resetTurnState();
    getTemplateByGameStart(state.mode);
    getTemplateByGameOverview(state.gameRound, state.currentRound);
    setButtonsDisabled(false);
  } else {
    state.gameRound++;
    startNextLocalRound();
    if (state.gameRound > 2) checkWinnerLocal();
  }
}

export function startNextLocalRound() {
  state.activePlayer = "player1";
  resetTurnState();
  getTemplateByGameStart(state.mode);
  getTemplateByGameOverview(state.gameRound, state.currentRound);
}

function checkWinnerLocal() {
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const p1Total = sum(state.playDiceCounter);
  const p2Total = sum(state.enemyDiceCounter);
  const pointDifference = Math.abs(p1Total - p2Total);
  let gameResult = "";
  if (p1Total > p2Total) gameResult = "Player 1 gewinnt";
  else if (p2Total > p1Total) gameResult = "Player 2 gewinnt";
  else gameResult = "Unentschieden";
  getTemplateGameEnd(state.mode, pointDifference, gameResult);
}
