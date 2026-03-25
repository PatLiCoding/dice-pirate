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
  roll: "würfeln",
  endRound: "Runde beenden",
  aiTurn: "Gegner würfeln",
  playerTurn: "Spieler 2",
  continue: "Weiter",
  restart: "Neustart",
  back: "Zurück",
  mode: ["Solo", "Mit COM", "2 Spieler"],
  modeSelect: "Spielmodus",
  rules: "Spielregeln",
  home: "Startseite",
};

/**
 * Texts used in the UI.
 * @type {Object.<string, string>}
 */
export const TEXTS = {
  modeSelectTitel: "Spielmodus",
  modeSelectText: "Wähle einen Spielmodus aus:",
  gameOverviewTitle: "Punktestand",
  gameOverviewText: "Punktetabelle ansehen",
  settingsTitle: "Settings",
  rolls: "Wurf",
  rounds: "Runden",
  round: "Runde ",
  total: "Gesamt",
  player: "Spieler",
  enemy: "Gegner",
  finishedPlayerTurn: "Dein Zug ist beendet.",
  roundFinishedTitel: "Die Runde ist beendet.",
  roundFinishedAi: [
    "Du hast diese Runde ",
    " Punkte erzielt, dein Gegner ",
    " Punkte.",
  ],
  roundFinishedLocal: ["Spieler 1 hat ", "Spieler 2 hat ", " Punkte."],
  player1: "Spieler 1",
  player2: "Spieler 2",
  endgameTitel: "Das Spiel ist beendet.",
  endgameAi: ["Du", "mit", "Punkten Unterschied."],
  endgameLocal: ["mit", "Punkten Unterschied."],
  aiWinner: "siegst",
  aiLose: "verlierst",
  aidraw: "hast ein Unentschieden",
  localPlayer1: "Spieler 1 gewinnt",
  localPlayer2: "Spieler 2 gewinnt",
  localdraw: "Unentschieden",
};
