import { getTemplatesGameRules } from "./tamplates/gameRulesTemplate.js";

function oninit() {
  getTemplatesGameRules();
}

/**
 * Initializes the UI to the mode selection screen on page load.
 */
window.onload = oninit();
