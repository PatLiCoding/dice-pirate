/**
 * Global game state object.
 * @type {Object}
 * @property {Array} rollDice - Array of dice currently rolled.
 * @property {number} saveRolledDice - Number of saved rolled dice.
 * @property {Array<number>} playDiceCounter - Player points per round.
 * @property {number} playerPoints - Current player points.
 * @property {Array<number>} enemyDiceCounter - Enemy points per round.
 * @property {number} enemyPoints - Current enemy points.
 * @property {string} activePlayer - Current active player ("player1" or "player2").
 * @property {number} player1Points - Player 1 total points.
 * @property {number} player2Points - Player 2 total points.
 * @property {boolean} ship - Whether the ship condition is fulfilled.
 * @property {boolean} captain - Whether the captain condition is fulfilled.
 * @property {boolean} crew - Whether the crew condition is fulfilled.
 * @property {boolean} selectedLootDice - Whether loot dice are selected.
 * @property {number} currentRound - Current roll number in the round.
 * @property {number} gameRound - Current game round number.
 * @property {string} mode - Current game mode.
 */
export const state = {
  rollDice: [],
  saveRolledDice: 0,
  playDiceCounter: [],
  playerPoints: 0,
  enemyDiceCounter: [],
  enemyPoints: 0,
  activePlayer: "player1",
  player1Points: 0,
  player2Points: 0,
  ship: false,
  captain: false,
  crew: false,
  selectedLootDice: false,
  currentRound: 0,
  gameRound: 1,
  mode: "",
};
