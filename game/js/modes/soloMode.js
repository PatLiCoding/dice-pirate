import { currentRoll, addUpPlayerPoints } from "../game.js";
import {
  getTemplateEndgameLoot,
  getTemplateLastRound,
  getTemplateRoundFinishedSolo,
  getTemplateByGameOverviewSolo,
  getTemplateByGameStartSolo,
} from "../templates.js";
import { state } from "../state.js";
import { setButtonsDisabled } from "../ui.js";
import { MAX_ROLLS } from "../config.js";

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

export function endSoloGameEarly() {
  document.getElementById("diceContainer").innerHTML = "";
  getTemplateRoundFinishedSolo(state.mode);
}

export function soloGameStart(mode) {
  document.getElementById("playgroundContainer").innerHTML = "";
  state.rollDice = [];
  state.saveRolledDice = 0;
  state.playDiceCounter = [];
  state.playerPoints = 0;
  state.ship = false;
  state.captain = false;
  state.crew = false;
  state.currentRound = 0;
  getTemplateByGameStartSolo(mode);
  getTemplateByGameOverviewSolo(state.currentRound);
}
