import { state } from "../state.js";
import { currentRoll, addUpPlayerPoints } from "../game.js";
import {
  getTemplateByGameStart,
  getTemplateByGameOverview,
  getTemplateRoundFinished,
  getTemplateLastRound,
  getTemplateFinishPlayerTurnLocal,
  getTemplateGameEnd,
} from "../templates.js";
import { setButtonsDisabled } from "../ui.js";
import { MAX_ROLLS, MAX_ROUNDS } from "../config.js";

export function startLocalTurn() {
  state.activePlayer = "player1";
  state.currentRound = 0;
  state.rollDice = [];
  state.ship = false;
  state.captain = false;
  state.crew = false;
  state.player1Points = 0;
  state.player2Points = 0;
  getTemplateByGameStart(state.mode);
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  setButtonsDisabled(false);
}

export function playerRollLocal() {
  state.currentRound++;
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  if (state.currentRound < MAX_ROLLS) {
    setButtonsDisabled(true);
    currentRoll();
  }
  if (state.currentRound === MAX_ROLLS) {
    getTemplateLastRound(state.mode);
    setButtonsDisabled(true);
    currentRoll();
  }
  if (state.currentRound > MAX_ROLLS) {
    finishLocalPlayerTurn();
    getTemplateByGameOverview(state.gameRound, MAX_ROLLS);
  }
}

function finishLocalPlayerTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  addUpPlayerPoints();
  if (state.activePlayer === "player1") {
    state.player1Points = state.playerPoints;
  } else {
    state.player2Points = state.playerPoints;
  }
  state.playerPoints = 0;
  getTemplateFinishPlayerTurnLocal(state.mode);
}

export function finishLocalTurn() {
  if (state.activePlayer === "player1") {
    state.activePlayer = "player2";
    state.currentRound = 0;
    state.rollDice = [];
    state.ship = false;
    state.captain = false;
    state.crew = false;
    state.playerPoints = 0;
    getTemplateByGameStart(state.mode);
    getTemplateByGameOverview(state.gameRound, state.currentRound);
    setButtonsDisabled(false);
  } else {
    state.activePlayer = "player1";
    state.gameRound++;
    if (state.gameRound > MAX_ROUNDS) {
      checkWinnerLocal();
    } else {
      getTemplateRoundFinished();
    }
  }
}

function checkWinnerLocal() {
  const player1Total = state.player1Points || 0;
  const player2Total = state.player2Points || 0;
  const pointDifference = Math.abs(player1Total - player2Total);
  let gameResult =
    player1Total > player2Total
      ? "Player 1 gewinnt"
      : player1Total < player2Total
        ? "Player 2 gewinnt"
        : "Unentschieden";
  getTemplateGameEnd(state.mode, pointDifference, gameResult);
}
