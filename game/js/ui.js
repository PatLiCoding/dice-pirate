import { MAX_ROLLS, MAX_ROUNDS, TEXTS } from "./config.js";
import { state } from "./state.js";
import {
  getTemplateFromRollDice,
  getTemplateDialogSettings,
  getTemplateDialogGameOverview,
  getTemplatePointsTableHeaderAi,
  getTemplatePointsTableHeaderLocal,
  getTemplatePointsTableRound,
  getTemplatePointsTableTotalNumber,
  getTemplateByGameOverview,
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

export function updateOverview() {
  if (state.mode === "ai")
    getTemplateByGameOverview(
      state.gameRound,
      state.currentRound,
      TEXTS.player,
      TEXTS.enemy,
    );
  if (state.mode === "local")
    getTemplateByGameOverview(
      state.gameRound,
      state.currentRound,
      TEXTS.player1,
      TEXTS.player2,
    );
}

export function updateOverviewEndRoll() {
  if (state.mode === "ai")
    getTemplateByGameOverview(
      state.gameRound,
      MAX_ROLLS,
      TEXTS.player,
      TEXTS.enemy,
    );
  if (state.mode === "local")
    getTemplateByGameOverview(
      state.gameRound,
      MAX_ROLLS,
      TEXTS.player1,
      TEXTS.player2,
    );
}

export function updateOverviewEndGame() {
  if (state.mode === "ai")
    getTemplateByGameOverview(MAX_ROUNDS, MAX_ROLLS, TEXTS.player, TEXTS.enemy);
  if (state.mode === "local")
    getTemplateByGameOverview(
      MAX_ROUNDS,
      MAX_ROLLS,
      TEXTS.player1,
      TEXTS.player2,
    );
}

export function openDialogGameOverview() {
  getTemplateDialogGameOverview();
  if (state.mode === "ai") getTemplatePointsTableHeaderAi();
  if (state.mode === "local") getTemplatePointsTableHeaderLocal();
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
