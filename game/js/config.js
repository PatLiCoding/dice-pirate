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
export const BUTTON_LABELS = {
  roll: "Würfeln",
  endRound: "Runde Beenden",
  restart: "Neustart",
  back: "Zurück",
  modeSelect: "Spielmodus",
  mode: ["Solo", "Mit COM", "2 Spieler"],
  rules: "Spielregeln",
  home: "Startseite",
};

/**
 * Texts used in the UI.
 * @type {Object.<string, string>}
 */
export const TEXTS = {
  gameOverviewTitle: "Punktestand",
  settingsTitle: "Settings",
  rounds: "Runden",
  player: "Spieler",
  enemy: "Gegner",
  roundFinished: "Die Runde ist beendet.",
  player1: "Spieler 1",
  player2: "Spieler 2",
};
