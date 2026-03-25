export const LANG = {
  /**
   * Labels for all buttons in the game.
   * @type {Object.<string, string|string[]>}
   */
  BUTTON_LABELS: {
    rules: "Game Rules",
    gameStart: "Start Game",
    back: "Back",
  },

  /**
   * Texts used in the UI.
   * @type {Object.<string, string>}
   */
  TEXTS: {
    indexTitle: "Dice Pirates",
    rulesTitle: "Game Rules",
    rulesIntro: "Played with 6 dice over 5 rounds.",
    goalTitle: "Goal of the game",
    goalDescription:
      "You must first roll a Ship (6), then a Captain (5), and finally a Crew (4).",
    goalNote: "Only when you have all three can you start collecting points.",
    roundTitle: "Round Overview",
    roundDescription:
      "You can roll up to 3 times. After each roll, set aside the matching dice.",
    roundOrderNote: "You must follow this order:",
    roundOrder: ["6 → Ship", "5 → Captain", "4 → Crew"],
    lootTitle: "Loot / Points",
    lootDescription1:
      "Once you have the Ship, Captain, and Crew, the remaining 3 dice count as loot.",
    lootDescription2:
      "The values of these dice are added = points for the round.",
    lootNoSet: "No Ship, no Captain, no Crew?",
    lootFail:
      "If you don't have all three in the correct order after three rolls, you score 0 points this round.",
    lootEarly:
      "If you have everything before the third roll and are satisfied with your loot, you don't have to roll further.",
    endTitle: "End of Game",
    endDescription: "After 5 rounds, the player with the most points wins.",
  },
};
