import {
  MAX_ROUNDS,
  MAX_ROLLS,
  IMAGE_PATHS,
  BUTTON_LABELS,
  TEXTS,
} from "../config.js";
import { state } from "../state.js";

/**
 * Displays the game overview with current round, total rounds, and points for both players.
 * @param {number} gameRound - Current game round.
 * @param {number} currentRound - Current dice roll round.
 * @param {string} player1 - Name of player 1.
 * @param {string} player2 - Name of player 2.
 */
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
      <p>${TEXTS.rolls}</p>
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

/**
 * Displays the solo game overview with current roll.
 * @param {number} currentRound - Current dice roll round.
 */
export function getTemplateByGameOverviewSolo(currentRound) {
  document.getElementById("gameOverview").innerHTML = `
    <div>
      <p>${TEXTS.rolls}</p>
      <p>${currentRound} / ${MAX_ROLLS}</p>
    </div>`;
}

/**
 * Initializes the game start screen for AI or Local mode.
 * @param {string} mode - The current game mode.
 */
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

/**
 * Initializes the solo game start screen.
 * @param {string} mode - The current game mode ("solo").
 */
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

/**
 * Adds the ship image to the game condition container.
 */
export function getTemplateShipImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="${IMAGE_PATHS.ship}" class="conditionImages">`;
}

/**
 * Adds the captain image to the game condition container.
 */
export function getTemplateCaptainImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="${IMAGE_PATHS.captain}" class="conditionImages">`;
}

/**
 * Adds the crew image to the game condition container.
 */
export function getTemplateCrewImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="${IMAGE_PATHS.crew}" class="conditionImages">`;
}
