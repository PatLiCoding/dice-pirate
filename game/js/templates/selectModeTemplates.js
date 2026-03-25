import { IMAGE_PATHS, BUTTON_LABELS, TEXTS } from "../config.js";

/**
 * Displays the mode selection screen.
 */
export function getTemplateSelectMode() {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="SelectMode" id="SelectMode">
      <img class="backToIndex" src="${IMAGE_PATHS.arrowBack}" onclick="window.location.href = '../index.html'">
      <div>
        <h2>${TEXTS.modeSelectTitel}</h2>
        <p>${TEXTS.modeSelectText}</p>
      </div>
      <button class="gameBtn" onclick="soloGameStart('solo')">${BUTTON_LABELS.mode[0]}</button>
      <button class="gameBtn" onclick="gameStart('ai')">${BUTTON_LABELS.mode[1]}</button>
      <button class="gameBtn" onclick="startLocalTurn('local')">${BUTTON_LABELS.mode[2]}</button>
    </div>`;
}
