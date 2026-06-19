import { getTEXTS, getBUTTON_LABELS, IMAGE_PATHS } from "../config.js";

/**
 * Renders the main index/menu view, including navigation buttons,
 * decorative assets, and the language selection dropdown.
 * * @function getTemplatesIndex
 * @returns {void}
 */
export function getTemplatesIndex() {
  const TEXTS = getTEXTS();
  const BUTTON_LABELS = getBUTTON_LABELS();
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
        <img src="${IMAGE_PATHS.dices}" />
        <div class="lang-menu">
        <img id="burgerBtn" class="burger-btn" src="${IMAGE_PATHS.language}" onclick="toggleLangDropdown()"/>
        <div id="langDropdown" class="lang-dropdown">
          <div class="lang" onclick="selectLanguage('de')">Deutsch</div>
          <div class="lang" onclick="selectLanguage('en')">English</div>
        </div>`;
}
