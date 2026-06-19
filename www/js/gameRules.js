import { getTemplatesGameRules } from "./tamplates/gameRulesTemplate.js";

/**
 * Initializes the game rules page on startup by rendering the rules view.
 * @function oninit
 * @returns {void}
 */
function oninit() {
  getTemplatesGameRules();
}

/**
 * Initializes the UI to the mode selection screen on page load.
 */
window.onload = oninit();
