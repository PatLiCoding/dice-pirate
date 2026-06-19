import { getTemplatesIndex } from "./tamplates/indexTemplate.js";

/**
 * Initializes the application on startup by rendering the main index view.
 * @function oninit
 * @returns {void}
 */
function oninit() {
  getTemplatesIndex();
}

/**
 * Initializes the UI to the mode selection screen on page load.
 */
window.onload = oninit();
