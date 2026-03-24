import { state } from "../state.js";
import { currentRoll, addUpPlayerPoints, resetTurnState } from "../game.js";
import {
  setButtonsDisabled,
  updateOverview,
  updateOverviewEndGame,
  updateOverviewEndRoll,
} from "../ui.js";
import { MAX_ROLLS, MAX_ROUNDS } from "../config.js";
import { getTemplateByGameStart } from "../templates/gameLayoutTemplates.js";
import { getTemplateLastRound } from "../templates/buttonTemplates.js";
import {
  getTemplateRoundFinishedLocal,
  getTemplateFinishPlayerRound,
} from "../templates/roundTemplates.js";
import { getTemplateGameEndLocal } from "../templates/endgameTemplates.js";

export function startLocalTurn(mode) {
  state.mode = mode;
  state.activePlayer = "player1";
  state.gameRound = 1;
  state.playDiceCounter = [];
  state.enemyDiceCounter = [];
  resetTurnState();
  getTemplateByGameStart(mode);
  updateOverview();
  setButtonsDisabled(false);
}

export function playerRollLocal() {
  state.currentRound++;
  updateOverview();
  if (state.currentRound < MAX_ROLLS) {
    setButtonsDisabled(true);
    currentRoll();
  } else if (state.currentRound === MAX_ROLLS) {
    getTemplateLastRound(state.mode);
    setButtonsDisabled(true);
    currentRoll();
  } else {
    updateOverviewEndRoll();
    finishLocalPlayerTurn();
  }
}

export function finishLocalPlayerTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  addUpPlayerPoints();
  if (state.activePlayer === "player1") {
    state.playDiceCounter.push(state.playerPoints);
    state.player1Points = state.playerPoints;
    getTemplateFinishPlayerRound();
  } else {
    state.enemyDiceCounter.push(state.playerPoints);
    state.player2Points = state.playerPoints;
    getTemplateRoundFinishedLocal();
  }
  state.playerPoints = 0;
}

export function finishLocalTurn() {
  if (state.activePlayer === "player1") {
    state.activePlayer = "player2";
    resetTurnState();
    getTemplateByGameStart(state.mode);
    updateOverview();
    setButtonsDisabled(false);
  } else {
    state.gameRound++;
    startNextLocalRound();
    if (state.gameRound > MAX_ROUNDS)
      (checkWinnerLocal(), updateOverviewEndGame());
  }
}

export function startNextLocalRound() {
  state.activePlayer = "player1";
  resetTurnState();
  getTemplateByGameStart(state.mode);
  updateOverview();
}

function checkWinnerLocal() {
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const p1Total = sum(state.playDiceCounter);
  const p2Total = sum(state.enemyDiceCounter);
  const pointDifference = Math.abs(p1Total - p2Total);
  let gameResult = "";
  if (p1Total > p2Total) gameResult = "Spieler 1 gewinnt";
  else if (p2Total > p1Total) gameResult = "Spieler 2 gewinnt";
  else gameResult = "Unentschieden";
  getTemplateGameEndLocal(state.mode, pointDifference, gameResult);
}
