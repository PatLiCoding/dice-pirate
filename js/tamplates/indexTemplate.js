import { TEXTS, BUTTON_LABELS, IMAGE_PATHS } from "../config.js";

export function getTemplatesIndex() {
  document.getElementById("menuContainer").innerHTML =
    `<h1>${TEXTS.indexTitel}</h1>
        <div class="navBtnContainer">
          <button onclick="window.location.href = 'game/game.html'">
            ${BUTTON_LABELS.gameStart}
          </button>
          <button onclick="window.location.href = 'game-rules.html'">
            ${BUTTON_LABELS.rules}
          </button>
        </div>
        <img src="${IMAGE_PATHS.dices}" />`;
}
