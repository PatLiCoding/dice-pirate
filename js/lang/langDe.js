export const LANG = {
  /**
   * Labels for all buttons in the game.
   * @type {Object.<string, string|string[]>}
   */
  BUTTON_LABELS: {
    rules: "Spielregeln",
    gameStart: "Spiel starten",
    back: "Zurück",
  },

  /**
   * Texts used in the UI.
   * @type {Object.<string, string>}
   */
  TEXTS: {
    indexTitel: "Würfel-Piraten",
    rulesTitle: "Spielregeln",
    rulesIntro: "Gespielt wird mit 6 Würfeln und über 5 Runden.",
    goalTitle: "Ziel des Spiels",
    goalDescription:
      "Du musst zuerst ein Schiff (6), dann einen Kapitän (5) und danach eine Mannschaft (4) würfeln.",
    goalNote: "Erst wenn du alle drei hast, kannst du Punkte sammeln.",
    roundTitle: "Ablauf einer Runde",
    roundDescription:
      "Du darfst bis zu 3-mal würfeln. Nach jedem Wurf legst du passende Würfel zur Seite.",
    roundOrderNote: "Du musst die Reihenfolge einhalten:",
    roundOrder: ["6 → Schiff", "5 → Kapitän", "4 → Mannschaft"],
    lootTitle: "Beute / Punkte",
    lootDescription1:
      "Sobald du Schiff, Kapitän und Mannschaft hast, zählen die 3 übrigen Würfel als Beute.",
    lootDescription2:
      "Die Augenzahlen dieser Würfel werden addiert = Punkte der Runde.",
    lootNoSet: "Kein Schiff, kein Kapitän, keine Mannschaft?",
    lootFail:
      "Wenn du nach drei Würfen nicht alle drei in der richtigen Reihenfolge hast, bekommst du 0 Punkte in dieser Runde.",
    lootEarly:
      "Wenn du schon vor dem dritten Wurf alles hast und mit deiner Beute zufrieden bist, musst du nicht weiter würfeln.",
    endTitle: "Spielende",
    endDescription:
      "Nach 5 Runden gewinnt der Spieler mit den meisten Punkten.",
  },
};
