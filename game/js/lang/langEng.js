export const LANG = {
  /**
   * Labels for all buttons in the game.
   * @type {Object.<string, string|string[]>}
   */
  BUTTON_LABELS: {
    roll: "roll",
    endRound: "end round",
    aiTurn: "enemy roll",
    playerTurn: "player 2",
    continue: "continue",
    restart: "restart",
    back: "back",
    mode: ["Solo", "VS AI", "2 Players"],
    modeSelect: "game mode",
    rules: "rules",
    home: "home",
  },

  /**
   * Texts used in the UI.
   * @type {Object.<string, string>}
   */
  TEXTS: {
    modeSelectTitel: "Game mode",
    modeSelectText: "Choose a game mode:",
    gameOverviewTitle: "Score",
    gameOverviewText: "View score table",
    settingsTitle: "Settings",
    rolls: "Roll",
    rounds: "Rounds",
    round: "Round ",
    total: "Total",
    player: "Player",
    enemy: "Enemy",
    finishedPlayerTurn: "Your turn is finished.",
    roundFinishedTitel: "The round is finished.",
    roundFinishedAi: [
      "You scored ",
      " points this round, your enemy scored ",
      " points.",
    ],
    roundFinishedLocal: ["Player 1 scored ", "Player 2 scored ", " points."],
    player1: "Player 1",
    player2: "Player 2",
    endgameTitel: "The game is finished.",
    endgameAi: ["You", "with a difference of", "points."],
    endgameLocal: ["with a difference of", "points."],
    aiWinner: "win",
    aiLose: "lose",
    aidraw: "have a draw",
    localPlayer1: "Player 1 wins",
    localPlayer2: "Player 2 wins",
    localdraw: "Draw",
  },
};
