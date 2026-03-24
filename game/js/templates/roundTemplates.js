import { IMAGE_PATHS, BUTTON_LABELS, TEXTS } from "../config.js";
import { state } from "../state.js";

export function getTemplateRoundFinishedSolo(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkRestartGame('${mode}')">${BUTTON_LABELS.restart}</button>
     <p class="infoText">${TEXTS.roundFinished}</p>`;
}

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
      <p>Dein Zug ist beendet.</p>
      <button class="gameBtn" onclick="finishLocalTurn()">Spieler 2</button>
    </div>`;
}

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
      <p>Die Runde ist beendet.</p>
      <p>Du hast diese Runde
      <span class="point">${state.playerPoints}</span> und dein Gegner 
      <span class="point">${state.enemyPoints}</span> erzielt.</p>
      <div class="btnSection" id="btnSection">
        <button class="gameBtn" onclick="startNewRound('${state.mode}')">Weiter</button>
      </div>
    </div>`;
}

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
      <p>Die Runde ist beendet.</p>
      <p>Spieler 1 hat <span class="point">${state.player1Points}</span></p>
       <p>Spieler 2 hat <span class="point">${state.player2Points}</span></p>
      <div class="btnSection" id="btnSection">
        <button class="gameBtn" onclick="finishLocalTurn('${state.mode}')">Weiter</button>
      </div>
    </div>`;
}
