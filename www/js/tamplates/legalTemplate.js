import { getTEXTS, getBUTTON_LABELS } from "../config.js";

export function getTemplatesLegal() {
  const TEXTS = getTEXTS();
  const BUTTON_LABELS = getBUTTON_LABELS();
  document.getElementById("menuContainer").innerHTML = `
  <h1>${TEXTS.legalTitle}</h1>

  <div>
    <h3>${TEXTS.imprintTitle}</h3>

    <h3>${TEXTS.imprintInfoTitle}</h3>
    <p>
      <strong>${TEXTS.imprintName}</strong> Patricia Linne<br>
      <strong>${TEXTS.imprintEmail}</strong> support@dice-pirate.de
    </p>

    <h3>${TEXTS.imprintDescriptionTitle}</h3>
    <p>${TEXTS.imprintDescription}</p>

    <h3>${TEXTS.liabilityTitle}</h3>
    <p>${TEXTS.liabilityText}</p>

    <h3>${TEXTS.linksTitle}</h3>
    <p>${TEXTS.linksText}</p>

    <h3>${TEXTS.copyrightTitle}</h3>
    <p>${TEXTS.copyrightText}</p>
  </div>

  <div>
    <h3>${TEXTS.privacyTitle}</h3>

    <h3>${TEXTS.privacyGeneralTitle}</h3>
    <p>${TEXTS.privacyGeneralText}</p>

    <h3>${TEXTS.privacyResponsibleTitle}</h3>
    <p>
      ${TEXTS.privacyResponsibleText}<br>
      support@dice-pirate.de
    </p>

    <h3>${TEXTS.privacyHostingTitle}</h3>
    <p>${TEXTS.privacyHostingText}</p>

    <h3>${TEXTS.privacyStorageTitle}</h3>
    <p>${TEXTS.privacyStorageText}</p>

    <h3>${TEXTS.privacyCookiesTitle}</h3>
    <p>${TEXTS.privacyCookiesText}</p>

    <h3>${TEXTS.privacyContactTitle}</h3>
    <p>${TEXTS.privacyContactText}</p>

    <h3>${TEXTS.privacyRightsTitle}</h3>
    <p>${TEXTS.privacyRightsText}</p>

    <h3>${TEXTS.privacyChangesTitle}</h3>
    <p>${TEXTS.privacyChangesText}</p><br>

    <p><strong>${TEXTS.privacyDate}</strong></p>
  </div>

  <button onclick="window.location.href='index.html'">
    ${BUTTON_LABELS.back}
  </button>
  `;
}