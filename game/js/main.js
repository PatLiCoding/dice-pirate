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
import { getTemplateSelectMode } from "./templates/selectModeTemplates.js";

window.onload = getTemplateSelectMode();
window.openDialogGameOverview = openDialogGameOverview;
window.openDialogSettings = openDialogSettings;
window.closeDialog = closeDialog;
window.checkSelectMode = checkSelectMode;
window.playerRollTheDice = playerRollTheDice;
window.checkRestartGame = checkRestartGame;
window.gameStart = gameStart;
window.clickDice = clickDice;
window.soloGameStart = soloGameStart;
window.endSoloGameEarly = endSoloGameEarly;
window.startAiTurn = startAiTurn;
window.startLocalTurn = startLocalTurn;
window.playerRollLocal = playerRollLocal;
window.finishLocalTurn = finishLocalTurn;
window.finishLocalPlayerTurn = finishLocalPlayerTurn;
window.startNewRound = startNewRound;
window.finishPlayerTurn = finishPlayerTurn;
