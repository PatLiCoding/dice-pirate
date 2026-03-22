import {
  currentRoll,
  checkRestartGame,
  addUpPlayerPoints,
  clickDice,
  setLootDice,
  checkCrew,
  checkCaptain,
  checkCondition,
  rerollUnselectedDice,
} from "../game.js";
import {
  getTemplateByGameOverview,
  getTemplateByGameStart,
  getTemplateShipImage,
  getTemplateCaptainImage,
  getTemplateCrewImage,
  getTemplateRollDicePlayerAnimation,
  getTemplateRollDiceAiAnimation,
  getTemplateSaveLoot,
  getTemplateEndgameLoot,
  getTemplateLastRound,
  getTemplateRoundFinished,
  getTemplateStartAiRound,
  getTemplateByGameOverviewSolo,
  getTemplateByGameStartSolo,
} from "../templates.js";
import { state } from "../state.js";
import {
  setButtonsDisabled,
  renderDice,
  openDialogGameOverview,
  openDialogSettings,
  closeDialog,
} from "../ui.js";
import {
  MAX_ROUNDS,
  MAX_ROLLS,
  NUM_DICE,
  ANIMATION_DURATION,
} from "../config.js";

export function startAiTurn() {
  document.getElementById("gameConditionContainer").innerHTML = "";
  document.getElementById("pointsContainer").innerHTML = "";
  document.getElementById("btnSection").innerHTML = "";
  state.currentRound = 0;
  state.rollDice = [];
  state.ship = false;
  state.captain = false;
  state.crew = false;
  aiRollLoop();
}

export function aiRollLoop() {
  state.currentRound++;
  getTemplateByGameOverview(state.gameRound, state.currentRound);
  if (state.currentRound > MAX_ROLLS) {
    finishAiTurn();
    return;
  }
  getTemplateRollDiceAiAnimation();
  setTimeout(() => {
    rerollUnselectedDice();
    checkCondition();
    aiRollLoop();
  }, ANIMATION_DURATION);
}

export function finishAiTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  state.enemyPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") state.enemyPoints += dice.value;
  }
  getTemplateByGameOverview(state.gameRound, MAX_ROLLS);
  getTemplateRoundFinished(state.mode);
  if (state.crew === true) getTemplateEndgameLoot(state.enemyPoints);
}

window.startAiTurn = startAiTurn;
