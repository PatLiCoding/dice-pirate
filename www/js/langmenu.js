import { changeLanguage } from "./config.js";
import { getTemplatesIndex } from "./tamplates/indexTemplate.js";

/**
 * Toggles the visibility of the language dropdown menu by toggling the 'active' class.
 * @function window.toggleLangDropdown
 * @returns {void}
 */
window.toggleLangDropdown = function () {
  const currentLangDropdown = document.getElementById("langDropdown");
  if (currentLangDropdown) {
    currentLangDropdown.classList.toggle("active");
  }
};

/**
 * Changes the application language and re-renders the index template view.
 * @function window.selectLanguage
 * @param {string} lang - The selected language code (e.g., 'de', 'en').
 * @returns {void}
 */
window.selectLanguage = function (lang) {
  changeLanguage(lang);
  getTemplatesIndex();
};

/**
 * Global click event listener to close the language dropdown 
 * if a click occurs outside of the dropdown or the burger button.
 * @function window.onclick
 * @param {MouseEvent} e - The native DOM click event.
 * @returns {void}
 */
window.onclick = function (e) {
  const burgerBtn = document.getElementById("burgerBtn");
  const currentLangDropdown = document.getElementById("langDropdown");
  if (burgerBtn && currentLangDropdown) {
    if (
      !burgerBtn.contains(e.target) &&
      !currentLangDropdown.contains(e.target)
    ) {
      currentLangDropdown.classList.remove("active");
    }
  }
};
