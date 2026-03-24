import { BUTTON_LABELS } from "../config.js";

/**
 * Renders the "Roll" button in the UI.
 * @param {string} mode - The current game mode.
 */
export function getTemplateRollbtn(mode) {
  document.getElementById("btnSection").innerHTML = `
      <button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.roll}</button>`;
}

/**
 * Renders the "Last Round" button.
 * @param {string} mode - The current game mode.
 */
export function getTemplateLastRound(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

/**
 * Renders the "Finish Player Turn" button for Solo mode.
 */
export function getTemplateFinishPlayerTurnSolo() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="endSoloGameEarly()">${BUTTON_LABELS.endRound}</button>`;
}

/**
 * Renders the "Finish Player Turn" button for AI mode.
 * @param {string} mode - The current game mode.
 */
export function getTemplateFinishPlayerTurn(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="finishPlayerTurn('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

/**
 * Renders the "Finish Player Turn" button for Local mode.
 */
export function getTemplateFinishPlayerTurnLocal() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="finishLocalPlayerTurn()">${BUTTON_LABELS.endRound}</button>`;
}

/**
 * Renders the "Start AI Round" button.
 */
export function getTemplateStartAiRound() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="startAiTurn()">Gegner Würfeln</button>`;
}
