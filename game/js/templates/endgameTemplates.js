import { IMAGE_PATHS, BUTTON_LABELS, TEXTS } from "../config.js";

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
