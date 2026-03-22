import "./templates.js";
import "./game.js";
import {
  checkSelectMode,
  playerRollTheDice,
  checkRestartGame,
  gameStart,
  clickDice,
} from "./game.js";
import {
  openDialogGameOverview,
  openDialogSettings,
  closeDialog,
} from "./ui.js";
import { soloGameStart } from "./modes/soloMode.js";
import { startAiTurn } from "./modes/aiMode.js";
import { getTemplateSelectMode } from "./templates.js";

getTemplateSelectMode();

window.openDialogGameOverview = openDialogGameOverview;
window.openDialogSettings = openDialogSettings;
window.closeDialog = closeDialog;
window.checkSelectMode = checkSelectMode;
window.playerRollTheDice = playerRollTheDice;
window.checkRestartGame = checkRestartGame;
window.gameStart = gameStart;
window.clickDice = clickDice;
window.soloGameStart = soloGameStart;
window.startAiTurn = startAiTurn;
