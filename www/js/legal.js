import { getTemplatesLegal } from "./tamplates/legalTemplate.js";

function oninit() {
  getTemplatesLegal();
}

window.onload = oninit();
