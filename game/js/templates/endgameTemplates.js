import { IMAGE_PATHS, BUTTON_LABELS, TEXTS } from "../config.js";

/**
 * Displays the game end screen for AI or Solo mode.
 * @param {string} mode - The current game mode.
 * @param {number} pointDifference - Difference in points between player and AI.
 * @param {string} gameResult - Result of the game ("Win", "Lose", "Draw").
 */
export function getTemplateGameEnd(mode, pointDifference, gameResult) {
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
      <p>Das Spiel ist beendet.</p>
      <p>Du hast mit <span class="point">${pointDifference}</span> Punkten unterschied ein ${gameResult}.</p>
      <div class="btnSection" id="btnSection">
        <div class="gameOverviewEndGame" onclick="openDialogGameOverview()">Punktetabelle ansehen</div>
        <button class="gameBtn" onclick="checkRestartGame('${mode}')">${BUTTON_LABELS.restart}</button>
      </div>
    </div>`;
}

/**
 * Displays the game end screen for Local mode.
 * @param {string} mode - The current game mode.
 * @param {number} pointDifference - Difference in points between player 1 and player 2.
 * @param {string} gameResult - Result string ("Player 1 wins", "Player 2 wins", "Draw").
 */
export function getTemplateGameEndLocal(mode, pointDifference, gameResult) {
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
      <p>Das Spiel ist beendet.</p>
      <p>${gameResult} mit <span class="point">${pointDifference}</span> Punkten unterschied.</p>
      <div class="btnSection" id="btnSection">
        <div class="gameOverviewEndGame" onclick="openDialogGameOverview()">Punktetabelle ansehen</div>
        <button class="gameBtn" onclick="checkRestartGame('${mode}')">${BUTTON_LABELS.restart}</button>
      </div>
    </div>`;
}
