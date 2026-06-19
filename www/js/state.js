/**
 * @type {object}
 * @property {string} lang - The currently active language code, initialized from local storage or defaulting to 'de'.
 */
export const state = {
  lang: localStorage.getItem("lang") || "de",
};
