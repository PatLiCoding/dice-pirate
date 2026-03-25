import { getTemplatesIndex } from "./tamplates/indexTemplate.js";

function oninit() {
  getTemplatesIndex();
}

/**
 * Initializes the UI to the mode selection screen on page load.
 */
window.onload = oninit();
