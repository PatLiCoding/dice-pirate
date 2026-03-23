import { state } from "./state.js";
import {
  getTemplateFromRollDice,
  getTemplateDialogSettings,
  getTemplateDialogGameOverview,
  getTemplatePointsTableHeader,
  getTemplatePointsTableRound,
  getTemplatePointsTableTotalNumber,
} from "./templates.js";

export function setButtonsDisabled(disabled) {
  const buttons = document.querySelectorAll("#btnSection button");
  buttons.forEach((btn) => (btn.disabled = disabled));
}

export function renderDice() {
  document.getElementById("diceContainer").innerHTML = "";
  for (let i = 0; i < state.rollDice.length; i++) {
    const dice = state.rollDice[i];
    let cssClass = "dice defaultDice";
    if (dice.type === "condition") cssClass = "dice conditionDice";
    if (dice.type === "loot") cssClass = "dice lootDice";
    if (dice.selected) cssClass = "dice saveLootDice";
    getTemplateFromRollDice(cssClass, i, dice.value);
  }
}

export function openDialogGameOverview() {
  getTemplateDialogGameOverview();
  getTemplatePointsTableHeader();
  for (let index = 0; index < state.enemyDiceCounter.length; index++)
    getTemplatePointsTableRound(index);
  getTemplatePointsTableTotalNumber();
  document.body.classList.add("noScroll");
  document.getElementById("dialogOverlay").classList.remove("d-none");
}

export function openDialogSettings() {
  getTemplateDialogSettings();
  document.body.classList.add("noScroll");
  document.getElementById("dialogOverlay").classList.remove("d-none");
}

export function closeDialog() {
  document.getElementById("dialogOverlay").classList.add("d-none");
  document.body.classList.remove("noScroll");
}
