import { checkCondition, rerollUnselectedDice } from "../game.js";
import {
  getTemplateByGameOverview,
  getTemplateByGameStart,
  getTemplateRollDiceAiAnimation,
  getTemplateEndgameLoot,
  getTemplateGameEnd,
} from "../templates.js";
import { state } from "../state.js";
import { MAX_ROUNDS, MAX_ROLLS, ANIMATION_DURATION } from "../config.js";

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

function aiRollLoop() {
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

function finishAiTurn() {
  document.getElementById("diceContainer").innerHTML = "";
  state.enemyPoints = 0;
  for (let i = 0; i < state.rollDice.length; i++) {
    let dice = state.rollDice[i];
    if (dice.type === "loot") state.enemyPoints += dice.value;
  }
  state.enemyDiceCounter.push(state.enemyPoints);
  getTemplateByGameOverview(state.gameRound, MAX_ROLLS);
  if (state.crew === true) getTemplateEndgameLoot(state.enemyPoints);
  checkEndgame();
}

function checkEndgame() {
  if (state.gameRound === MAX_ROUNDS)
    (getTemplateByGameStart(state.mode), getTemplateGameEnd(state.mode));
  if (state.gameRound < MAX_ROUNDS) {
    document.getElementById("playgroundContainer").innerHTML = "";
    getTemplateByGameStart(state.mode);
    getTemplateByGameOverview(state.gameRound, MAX_ROLLS);
  }
  state.gameRound++;
  state.currentRound = 0;
}
