import { getLang } from "./langLoader.js";
import { state } from "./state.js";

/**
 * @type {object}
 * @property {string} dices - Path to the menu dice image asset.
 * @property {string} language - Path to the language icon asset.
 */
export const IMAGE_PATHS = {
  dices: "assets/img/menu-dice.png",
  language: "assets/icon/language.png",
};

/**
 * Retrieves the localized UI text strings based on the current language.
 * @function getTEXTS
 * @returns {object} The object containing localized text strings.
 */
export function getTEXTS() {
  return getLang().TEXTS;
}

/**
 * Retrieves the localized button labels based on the current language.
 * @function getBUTTON_LABELS
 * @returns {object} The object containing localized button labels.
 */
export function getBUTTON_LABELS() {
  return getLang().BUTTON_LABELS;
}

/**
 * Updates the application language state and persists the choice in local storage.
 * @function changeLanguage
 * @param {string} lang - The language code to set (e.g., 'en', 'de').
 * @returns {void}
 */
export function changeLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("lang", lang);
}
