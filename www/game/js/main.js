/**
 * Main entry point of the game.
 * Initializes the game UI and binds global functions to the window object.
 */

import "./game.js";
import {
  gameStart,
  checkSelectMode,
  checkRestartGame,
  clickDice,
} from "./game.js";
import {
  openDialogGameOverview,
  openDialogSettings,
  closeDialog,
} from "./ui.js";
import { soloGameStart, endSoloGameEarly } from "./modes/soloMode.js";
import {
  startAiTurn,
  startNewRound,
  finishPlayerTurn,
  playerRollTheDice,
} from "./modes/aiMode.js";
import {
  startLocalTurn,
  playerRollLocal,
  finishLocalTurn,
  finishLocalPlayerTurn,
} from "./modes/localMode.js";
import { getTemplateSelectMode } from "./templates/index.js";

/**
 * Initializes the UI to the mode selection screen on page load.
 */
window.onload = getTemplateSelectMode;

/**
 * Binds UI dialog functions to the global window object.
 */
window.openDialogGameOverview = openDialogGameOverview;
window.openDialogSettings = openDialogSettings;
window.closeDialog = closeDialog;

/**
 * Binds game logic functions to the global window object for accessibility from HTML buttons.
 */
window.checkSelectMode = checkSelectMode;
window.playerRollTheDice = playerRollTheDice;
window.checkRestartGame = checkRestartGame;
window.gameStart = gameStart;
window.clickDice = clickDice;

/**
 * Binds solo mode functions to the global window object.
 */
window.soloGameStart = soloGameStart;
window.endSoloGameEarly = endSoloGameEarly;

/**
 * Binds AI mode functions to the global window object.
 */
window.startAiTurn = startAiTurn;
window.startNewRound = startNewRound;
window.finishPlayerTurn = finishPlayerTurn;

/**
 * Binds local mode functions to the global window object.
 */
window.startLocalTurn = startLocalTurn;
window.playerRollLocal = playerRollLocal;
window.finishLocalTurn = finishLocalTurn;
window.finishLocalPlayerTurn = finishLocalPlayerTurn;
