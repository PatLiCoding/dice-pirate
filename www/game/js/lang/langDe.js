export const LANG = {
  /**
   * Labels for all buttons in the game.
   * @type {Object.<string, string|string[]>}
   */
  BUTTON_LABELS: {
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
  },

  /**
   * Texts used in the UI.
   * @type {Object.<string, string>}
   */
  TEXTS: {
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
  },
};
