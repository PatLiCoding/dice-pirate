import { getLang } from "./langLoader.js";
import { state } from "./state.js";

export const IMAGE_PATHS = {
  dices: "assets/img/menu-dice.png",
  language: "assets/icon/language.png",
};

export function getTEXTS() {
  return getLang().TEXTS;
}

export function getBUTTON_LABELS() {
  return getLang().BUTTON_LABELS;
}

export function changeLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("lang", lang);
}
