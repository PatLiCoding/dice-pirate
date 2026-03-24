import { IMAGE_PATHS, BUTTON_LABELS, TEXTS } from "../config.js";
import { state } from "../state.js";

/**
 * Renders the game overview dialog with points table and close button.
 */
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

/**
 * Renders the header row of the points table for AI mode.
 */
export function getTemplatePointsTableHeaderAi() {
  document.getElementById("pointsTable").innerHTML += `<tr>
            <th>${TEXTS.rounds}</th>
            <th>${TEXTS.player}</th>
            <th>${TEXTS.enemy}</th>
          </tr>`;
}

/**
 * Renders the header row of the points table for Local mode.
 */
export function getTemplatePointsTableHeaderLocal() {
  document.getElementById("pointsTable").innerHTML += `<tr>
            <th>${TEXTS.rounds}</th>
            <th>${TEXTS.player1}</th>
            <th>${TEXTS.player2}</th>
          </tr>`;
}

/**
 * Adds a round row to the points table.
 * @param {number} index - The round index.
 */
export function getTemplatePointsTableRound(index) {
  document.getElementById("pointsTable").innerHTML += ` <tr>
    <td>Runde ${index + 1}</td>
    <td>${state.playDiceCounter[index]}</td>
    <td>${state.enemyDiceCounter[index]}</td>
  </tr>`;
}

/**
 * Adds a total row to the points table summing up player and enemy points.
 */
export function getTemplatePointsTableTotalNumber() {
  document.getElementById("pointsTable").innerHTML += `<tr>
    <td>Total</td>
    <td>${state.playDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</td>
    <td>${state.enemyDiceCounter.reduce((totalValue, currentValue) => totalValue + currentValue, 0)}</td>
  </tr>`;
}

/**
 * Renders the settings dialog with buttons for mode select, rules, and home.
 */
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
