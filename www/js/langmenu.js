import { changeLanguage } from "./config.js";
import { getTemplatesIndex } from "./tamplates/indexTemplate.js";

window.toggleLangDropdown = function () {
  const currentLangDropdown = document.getElementById("langDropdown");
  if (currentLangDropdown) {
    currentLangDropdown.classList.toggle("active");
  }
};

window.selectLanguage = function (lang) {
  changeLanguage(lang);
  getTemplatesIndex();
};

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
