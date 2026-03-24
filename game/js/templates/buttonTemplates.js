import { BUTTON_LABELS } from "../config.js";

export function getTemplateRollbtn(mode) {
  document.getElementById("btnSection").innerHTML = `
      <button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.roll}</button>`;
}

export function getTemplateLastRound(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="checkSelectMode('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateFinishPlayerTurnSolo() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="endSoloGameEarly()">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateFinishPlayerTurn(mode) {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="finishPlayerTurn('${mode}')">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateFinishPlayerTurnLocal() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="finishLocalPlayerTurn()">${BUTTON_LABELS.endRound}</button>`;
}

export function getTemplateStartAiRound() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="startAiTurn()">Gegner Würfeln</button>`;
}
