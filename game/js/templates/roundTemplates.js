import { IMAGE_PATHS, BUTTON_LABELS, TEXTS } from "../config.js";
import { state } from "../state.js";

/**
 * Displays the "Round Finished" screen for Solo mode.
 * @param {string} mode - Current game mode.
 */
export function getTemplateRoundFinishedSolo(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkRestartGame('${mode}')">${BUTTON_LABELS.restart}</button>
     <p class="infoText">${TEXTS.roundFinishedTitel}</p>`;
}

/**
 * Displays the "Finish Player Turn" screen for local mode (Player 1 finished).
 */
export function getTemplateFinishPlayerRound() {
  document.getElementById("playgroundContainer").innerHTML =
    `<div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialogGameOverview()">
        <img src="${IMAGE_PATHS.gameOverviewIcon}">${TEXTS.gameOverviewTitle}
      </div>
      <div class="gameHeadlineBox" onclick="openDialogSettings()">
        ${TEXTS.settingsTitle}<img src="${IMAGE_PATHS.settingsIcon}">
      </div>
    </div>
    <div class="endRoundContanainer">
      <p>${TEXTS.finishedPlayerTurn}</p>
      <button class="gameBtn" onclick="finishLocalTurn()">${BUTTON_LABELS.playerTurn}</button>
    </div>`;
}

/**
 * Displays the "Round Finished" screen for AI mode with player and enemy points.
 */
export function getTemplateRoundFinished() {
  document.getElementById("playgroundContainer").innerHTML =
    `<div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialogGameOverview()">
        <img src="${IMAGE_PATHS.gameOverviewIcon}">${TEXTS.gameOverviewTitle}
      </div>
      <div class="gameHeadlineBox" onclick="openDialogSettings()">
        ${TEXTS.settingsTitle}<img src="${IMAGE_PATHS.settingsIcon}">
      </div>
    </div>
    <div class="endRoundContanainer">
      <p>${TEXTS.roundFinishedTitel}</p>
      <p>${TEXTS.roundFinishedAi[0]}
      <span class="point">${state.playerPoints}</span>${TEXTS.roundFinishedAi[1]}
      <span class="point">${state.enemyPoints}</span>${TEXTS.roundFinishedAi[2]}</p>
      <div class="btnSection" id="btnSection">
        <button class="gameBtn" onclick="startNewRound('${state.mode}')">${BUTTON_LABELS.continue}</button>
      </div>
    </div>`;
}

/**
 * Displays the "Round Finished" screen for Local mode with both players' points.
 */
export function getTemplateRoundFinishedLocal() {
  document.getElementById("playgroundContainer").innerHTML =
    `<div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialogGameOverview()">
        <img src="${IMAGE_PATHS.gameOverviewIcon}">${TEXTS.gameOverviewTitle}
      </div>
      <div class="gameHeadlineBox" onclick="openDialogSettings()">
        ${TEXTS.settingsTitle}<img src="${IMAGE_PATHS.settingsIcon}">
      </div>
    </div>
    <div class="endRoundContanainer">
      <p>${TEXTS.roundFinishedTitel}</p>
      <p>${TEXTS.roundFinishedLocal[0]}<span class="point">${state.player1Points}</span>${TEXTS.roundFinishedLocal[2]}</p>
       <p>${TEXTS.roundFinishedLocal[1]}<span class="point">${state.player2Points}</span>${TEXTS.roundFinishedLocal[2]}</p>
      <div class="btnSection" id="btnSection">
        <button class="gameBtn" onclick="finishLocalTurn('${state.mode}')">${BUTTON_LABELS.continue}</button>
      </div>
    </div>`;
}
