import { state } from "./state.js";

import { LANG as DE } from "./lang/langDe.js";
import { LANG as EN } from "./lang/langEn.js";

let LANG;

if (state.lang === "en") {
  LANG = EN;
} else {
  LANG = DE;
}

export { LANG };
