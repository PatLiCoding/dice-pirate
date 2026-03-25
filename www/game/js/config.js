import { LANG } from "./langLoader.js";

/**
 * Maximum number of rounds in the game.
 * @type {number}
 */
export const MAX_ROUNDS = 5;

/**
 * Maximum number of rolls per round.
 * @type {number}
 */
export const MAX_ROLLS = 3;

/**
 * Number of dice in the game.
 * @type {number}
 */
export const NUM_DICE = 6;

/**
 * Duration of dice roll animations in milliseconds.
 * @type {number}
 */
export const ANIMATION_DURATION = 3000;

/**
 * Paths to all images used in the game.
 * @type {Object.<string, string>}
 */
export const IMAGE_PATHS = {
  ship: "../assets/img/game/ship.png",
  captain: "../assets/img/game/captain.png",
  crew: "../assets/img/game/crew.png",
  lootbox: "../assets/img/game/lootbox.png",
  rollAnimationPlayer: "../assets/img/game/player-roll.gif",
  rollAnimationEnemy: "../assets/img/game/enemy-roll.gif",
  arrowBack: "../assets/icon/arrow-back.png",
  gameOverviewIcon: "../assets/icon/game-overview.png",
  settingsIcon: "../assets/icon/settings.png",
  closeIcon: "../assets/icon/close.png",
};

/**
 * Labels for all buttons in the game.
 * @type {Object.<string, string|string[]>}
 */
export const BUTTON_LABELS = LANG.BUTTON_LABELS;

/**
 * Texts used in the UI.
 * @type {Object.<string, string>}
 */
export const TEXTS = LANG.TEXTS;
