import { LANG as DE } from "./lang/langDe.js";
import { LANG as EN } from "./lang/langEng.js";
import { state } from "../../js/state.js";

/**
 * @type {object}
 * @description Holds the translation strings for the currently selected language.
 */
let LANG;

// Determine the language based on the application state
if (state.lang === "en") {
  LANG = EN;
} else {
  LANG = DE;
}

export { LANG };
