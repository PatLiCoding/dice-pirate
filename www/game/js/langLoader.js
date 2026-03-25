import { LANG as DE } from "./lang/langDe.js";
import { LANG as EN } from "./lang/langEng.js";
import { state } from "../../js/state.js";

let LANG;

if (state.lang === "en") {
  LANG = EN;
} else {
  LANG = DE;
}

export { LANG };
