import { currentRoll, addUpPlayerPoints, resetTurnState } from "../game.js";
import { state } from "../state.js";
import { setButtonsDisabled } from "../ui.js";
import { MAX_ROLLS } from "../config.js";
import {
  getTemplateByGameOverviewSolo,
  getTemplateByGameStartSolo,
  getTemplateEndgameLoot,
  getTemplateLastRound,
  getTemplateRoundFinishedSolo,
} from "../templates/index.js";

/**
 * Handles the player's dice roll in solo mode.
 * Updates templates and manages end-of-round logic.
 * @param {string} mode - The current game mode ("solo").
 */
export function playerRollTheDiceSolo(mode) {
  state.currentRound++;
  document.getElementById("diceContainer").innerHTML = "";
  getTemplateByGameOverviewSolo(state.currentRound);
  if (state.currentRound < MAX_ROLLS) (setButtonsDisabled(true), currentRoll());
  if (state.currentRound > MAX_ROLLS) {
    document.getElementById("diceContainer").innerHTML = "";
    getTemplateRoundFinishedSolo(mode);
    getTemplateByGameOverviewSolo(MAX_ROLLS);
    if (state.crew === true)
      (addUpPlayerPoints(), getTemplateEndgameLoot(state.playerPoints));
  }
  if (state.currentRound === MAX_ROLLS)
    (getTemplateLastRound(mode), setButtonsDisabled(true), currentRoll());
}

/**
 * Ends the solo game early and displays the round finished template.
 */
export function endSoloGameEarly() {
  document.getElementById("diceContainer").innerHTML = "";
  getTemplateRoundFinishedSolo(state.mode);
}

/**
 * Starts a new solo game.
 * Resets relevant state and displays starting templates.
 * @param {string} mode - The solo game mode.
 */
export function soloGameStart(mode) {
  document.getElementById("playgroundContainer").innerHTML = "";
  resetTurnState();
  state.saveRolledDice = 0;
  state.playDiceCounter = [];
  getTemplateByGameStartSolo(mode);
  getTemplateByGameOverviewSolo(state.currentRound);
}
