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
