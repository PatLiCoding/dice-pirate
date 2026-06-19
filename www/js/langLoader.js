import { state } from "./state.js";

import { LANG as DE } from "./lang/langDe.js";
import { LANG as EN } from "./lang/langEn.js";

/**
 * Resolves and returns the translation module corresponding to the active language state.
 * @function getLang
 * @returns {object} The translation object containing localized texts and labels.
 */
export function getLang() {
  if (state.lang === "en") {
    return EN;
  } else {
    return DE;
  }
}
