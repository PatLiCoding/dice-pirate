import { IMAGE_PATHS, BUTTON_LABELS } from "../config.js";

export function getTemplateSelectMode() {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="SelectMode" id="SelectMode">
      <img class="backToIndex" src="${IMAGE_PATHS.arrowBack}" onclick="window.location.href = '../index.html'">
      <div>
        <h2>${BUTTON_LABELS.modeSelect}</h2>
        <p>Wähle den Spiel-Modus aus:</p>
      </div>
      <button class="gameBtn" onclick="soloGameStart('solo')">${BUTTON_LABELS.mode[0]}</button>
      <button class="gameBtn" onclick="gameStart('ai')">${BUTTON_LABELS.mode[1]}</button>
      <button class="gameBtn" onclick="startLocalTurn('local')">${BUTTON_LABELS.mode[2]}</button>
    </div>`;
}
