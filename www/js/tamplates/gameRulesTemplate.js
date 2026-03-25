import { getTEXTS, getBUTTON_LABELS } from "../config.js";

export function getTemplatesGameRules() {
  const TEXTS = getTEXTS();
  const BUTTON_LABELS = getBUTTON_LABELS();
  document.getElementById("menuContainer").innerHTML = `
  <h1>${TEXTS.rulesTitle}</h1>
  <div>
    <p>${TEXTS.rulesIntro}</p>
    <h3>${TEXTS.goalTitle}</h3>
    <p>${TEXTS.goalDescription}</p>
    <p>${TEXTS.goalNote}</p>

    <h3>${TEXTS.roundTitle}</h3>
    <p>${TEXTS.roundDescription}</p>
    <p>${TEXTS.roundOrderNote}</p>
    <ul>
      ${TEXTS.roundOrder.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h3>${TEXTS.lootTitle}</h3>
    <p>${TEXTS.lootDescription1}</p>
    <p>${TEXTS.lootDescription2}</p>
    <p>${TEXTS.lootNoSet}</p>
    <p>${TEXTS.lootFail}</p>
    <p>${TEXTS.lootEarly}</p>

    <h3>${TEXTS.endTitle}</h3>
    <p>${TEXTS.endDescription}</p>
  </div>
  <button onclick="window.location.href='index.html'">${BUTTON_LABELS.back}</button>
`;
}
