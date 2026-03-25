import { state } from "./state.js";

import { LANG as DE } from "./lang/langDe.js";
import { LANG as EN } from "./lang/langEn.js";

export function getLang() {
  if (state.lang === "en") {
    return EN;
  } else {
    return DE;
  }
}
