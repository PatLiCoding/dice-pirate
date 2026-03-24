import {
  MAX_ROUNDS,
  MAX_ROLLS,
  IMAGE_PATHS,
  BUTTON_LABELS,
  TEXTS,
} from "../config.js";
import { state } from "../state.js";

export function getTemplateByGameOverview(
  gameRound,
  currentRound,
  player1,
  player2,
) {
  document.getElementById("gameOverview").innerHTML = `
    <div>
      <p>${TEXTS.rounds}</p>
      <p>${gameRound} / ${MAX_ROUNDS}</p>
    </div>
    <div>
      <p>Wurf</p>
      <p>${currentRound} / ${MAX_ROLLS}</p>
    </div>
    <div>
      <p class="gameOverviewPlayerName">${player1}</p>
      <p>${state.playDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</p>
    </div>
    <div>
      <p class="gameOverviewPlayerName">${player2}</p>
      <p>${state.enemyDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</p>
    </div>`;
}

export function getTemplateByGameOverviewSolo(currentRound) {
  document.getElementById("gameOverview").innerHTML = `
    <div>
      <p>Wurf</p>
      <p>${currentRound} / ${MAX_ROLLS}</p>
    </div>`;
}

export function getTemplateByGameStart(mode) {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialogGameOverview()">
        <img src="${IMAGE_PATHS.gameOverviewIcon}">${TEXTS.gameOverviewTitle}
      </div>
      <div class="gameHeadlineBox" onclick="openDialogSettings()">
        ${TEXTS.settingsTitle}<img src="${IMAGE_PATHS.settingsIcon}">
      </div>
    </div>
    <div class="gameConditionContainer" id="gameConditionContainer"></div>
    <div class="pointsContainer" id="pointsContainer"></div>
    <div class="diceContainer" id="diceContainer"></div>
    <div class="btnSection" id="btnSection">
      <button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.roll}</button>
    </div>`;
}

export function getTemplateByGameStartSolo(mode) {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialogGameOverview()">
      </div>
      <div class="gameHeadlineBox" onclick="openDialogSettings()">
        ${TEXTS.settingsTitle}<img src="${IMAGE_PATHS.settingsIcon}">
      </div>
    </div>
    <div class="gameConditionContainer" id="gameConditionContainer"></div>
    <div class="pointsContainer" id="pointsContainer"></div>
    <div class="diceContainer" id="diceContainer"></div>
    <div class="btnSection" id="btnSection">
      <button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.roll}</button>
    </div>`;
}

export function getTemplateShipImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="${IMAGE_PATHS.ship}" class="conditionImages">`;
}

export function getTemplateCaptainImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="${IMAGE_PATHS.captain}" class="conditionImages">`;
}

export function getTemplateCrewImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="${IMAGE_PATHS.crew}" class="conditionImages">`;
}
