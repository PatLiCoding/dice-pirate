import {
  MAX_ROUNDS,
  MAX_ROLLS,
  IMAGE_PATHS,
  BUTTON_LABELS,
  TEXTS,
} from "./config.js";
import { state } from "./state.js";

export function getTemplateSelectMode() {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="SelectMode" id="SelectMode">
      <img class="backToIndex" src="${IMAGE_PATHS.arrowBack}" onclick="window.location.href = '../index.html'">
      <div>
        <h2>${BUTTON_LABELS.modeSelect}</h2>
        <p>Wähle den Spiel-Modus aus:</p>
      </div>
      <button class="gameBtn" onclick="soloGameStart('solo')">${BUTTON_LABELS.mode[0]}</button>
      <button class="gameBtn" onclick="gameStart('ai')">${BUTTON_LABELS.mode[1]}</button>
      <button class="gameBtn" onclick="gameStart('local')">${BUTTON_LABELS.mode[2]}</button>
    </div>`;
}

export function getTemplateByGameOverviewSolo(currentRound) {
  document.getElementById("gameOverview").innerHTML = `
    <div>
      <p>Wurf</p>
      <p>${currentRound} / ${MAX_ROLLS}</p>
    </div>`;
}

export function getTemplateByGameOverview(gameRound, currentRound) {
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
      <p>${state.playDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</p>
    </div>
    <div>
      <p>${TEXTS.enemy}</p>
      <p>${state.enemyDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</p>
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

export function getTemplateRollDiceAiAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="${IMAGE_PATHS.rollAnimationEnemy}" class="rollAnimation">`;
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

export function getTemplateEndgameLoot(points) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${points} Punkte`;
}

export function getTemplateEndgameLootAi() {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">`;
}
export function getTemplateRollbtn(mode) {
  document.getElementById("btnSection").innerHTML = `
      <button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.roll}</button>`;
}

export function getTemplateLastRound(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateFinishPlayerTurn(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="finishPlayerTurn('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateStartAiRound() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="startAiTurn()">Gegner Würfeln</button>`;
}

export function getTemplateRoundFinishedSolo(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkRestartGame('${mode}')">${BUTTON_LABELS.restart}</button>
     <p class="infoText">${TEXTS.roundFinished}</p>`;
}

export function getTemplateFinishPlayerTurnLocal(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="finishLocalTurn()">Weiter</button>`;
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
      <button class="gameBtn" onclick="startNewRound('${state.mode}')">Nächste Runde</button>
    </div>`;
}

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

export function getTemplateDialogGameOverview() {
  document.getElementById("dialogBox").innerHTML = `
    <div class="dialogHeader">
      <span id="dialogTitle">${TEXTS.gameOverviewTitle}</span>
      <img src="${IMAGE_PATHS.closeIcon}" class="dialogCloseBtn" onclick="closeDialog()" />
    </div>
    <div id="dialogText" class="dialogText">
      <div class="pointsTableContainer">
        <table id="pointsTable"></table>
      </div>
    </div>
    <div id="dialogButtonContainer" class="dialogButtonContainer">
      <button class="dialogBtn" onclick="closeDialog()">${BUTTON_LABELS.back}</button>
    </div>`;
}

export function getTemplatePointsTableHeader() {
  document.getElementById("pointsTable").innerHTML += `<tr>
            <th>${TEXTS.rounds}</th>
            <th>${TEXTS.player}</th>
            <th>${TEXTS.enemy}</th>
          </tr>`;
}

export function getTemplatePointsTableRound(index) {
  document.getElementById("pointsTable").innerHTML += ` <tr>
    <td>Runde ${index + 1}</td>
    <td>${state.playDiceCounter[index]}</td>
    <td>${state.enemyDiceCounter[index]}</td>
  </tr>`;
}

export function getTemplatePointsTableTotalNumber() {
  document.getElementById("pointsTable").innerHTML += `<tr>
    <td>Gesamt</td>
    <td>${state.playDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</td>
    <td>${state.enemyDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</td>
  </tr>`;
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
