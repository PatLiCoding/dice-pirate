import {
  MAX_ROUNDS,
  MAX_ROLLS,
  IMAGE_PATHS,
  BUTTON_LABELS,
  TEXTS,
} from "./config.js";

export function getTemplateSelectMode() {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="SelectMode" id="SelectMode">
      <img class="backToIndex" src="${IMAGE_PATHS.arrowBack}" onclick="window.location.href = '../index.html'">
      <div>
        <h2>${BUTTON_LABELS.modeSelect}</h2>
        <p>Wähle den Spiel-Modus aus:</p>
      </div>
      <button class="gameBtn" onclick="soloGameStart('solo')">${BUTTON_LABELS.mode[0]}</button>
      <button class="gameBtn" onclick="gameRestart('ki')">${BUTTON_LABELS.mode[1]}</button>
      <button class="gameBtn" onclick="gameRestart('local')">${BUTTON_LABELS.mode[2]}</button>
    </div>`;
}

export function getTemplateByGameOverviewSolo(currentRound) {
  document.getElementById("gameOverview").innerHTML = `
    <div>
      <p>Wurf</p>
      <p>${currentRound} / ${MAX_ROLLS}</p>
    </div>`;
}

export function getTemplateByGameOverview(
  gameRound,
  currentRound,
  playerPoints,
  enemyPoints,
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
      <p>${TEXTS.player}</p>
      <p>${playerPoints}</p>
    </div>
    <div>
      <p>${TEXTS.enemy}</p>
      <p>${enemyPoints}</p>
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

export function getTemplateRollDicePlayerAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="${IMAGE_PATHS.rollAnimationPlayer}" class="rollAnimation">`;
}

export function getTemplateSaveLoot(rollDice) {
  const points = rollDice
    .filter((d) => d.type === "loot" && d.selected)
    .reduce((sum, d) => sum + d.value, 0);
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${points} Punkte`;
}

export function getTemplateFromRollDice(cssClass, i, value) {
  document.getElementById("diceContainer").innerHTML += `<div 
        class="${cssClass}" 
        onclick="clickDice(${i})"
      >
        ${value}
      </div>`;
}

export function getTemplateEndgameLoot(playerPoints) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${playerPoints} Punkte`;
}

export function getTemplateLastRound(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateRoundFinished(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkRestartGame('${mode}')">${BUTTON_LABELS.restart}</button>
     <p class="infoText">${TEXTS.roundFinished}</p>`;
}

export function getTemplateDialogGameOverview() {
  document.getElementById("dialogBox").innerHTML = `
    <div class="dialogHeader">
      <span id="dialogTitle">${TEXTS.gameOverviewTitle}</span>
      <img src="${IMAGE_PATHS.closeIcon}" class="dialogCloseBtn" onclick="closeDialog()" />
    </div>
    <div id="dialogText" class="dialogText">
      <div class="pointsTableContainer">
        <table>
          <tr>
            <th>${TEXTS.rounds}</th>
            <th>${TEXTS.player}</th>
            <th>${TEXTS.enemy}</th>
          </tr>
          <tr><td>Runde 1</td><td>0</td><td>0</td></tr>
          <tr><td>Runde 2</td><td>0</td><td>0</td></tr>
          <tr><td>Runde 3</td><td>0</td><td>0</td></tr>
          <tr><td>Runde 4</td><td>0</td><td>0</td></tr>
          <tr><td>Runde 5</td><td>0</td><td>0</td></tr>
          <tr><td>Gesamt</td><td>0</td><td>0</td></tr>
        </table>
      </div>
    </div>
    <div id="dialogButtonContainer" class="dialogButtonContainer">
      <button class="dialogBtn" onclick="closeDialog()">${BUTTON_LABELS.back}</button>
    </div>`;
}

export function getTemplateDialogSettings() {
  document.getElementById("dialogBox").innerHTML = `
    <div class="dialogHeader">
      <span id="dialogTitle">${TEXTS.settingsTitle}</span>
      <img src="${IMAGE_PATHS.closeIcon}" class="dialogCloseBtn" onclick="closeDialog()" />
    </div>
    <div id="dialogButtonContainer" class="dialogButtonContainer">
      <button class="dialogBtn" onclick="closeDialog()">${BUTTON_LABELS.back}</button>
      <button class="dialogBtn" onclick="closeDialog(); location.reload(true);">${BUTTON_LABELS.modeSelect}</button>
      <button class="dialogBtn" onclick="closeDialog(); window.location.href = '../game-rules.html'">${BUTTON_LABELS.rules}</button>
      <button class="dialogBtn" onclick="closeDialog(); window.location.href = '../index.html'">${BUTTON_LABELS.home}</button>
    </div>`;
}
