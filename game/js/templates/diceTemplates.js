import { IMAGE_PATHS } from "../config.js";

export function getTemplateRollDicePlayerAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="${IMAGE_PATHS.rollAnimationPlayer}" class="rollAnimation">`;
}

export function getTemplateRollDiceAiAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="${IMAGE_PATHS.rollAnimationEnemy}" class="rollAnimation">`;
}

export function getTemplateFromRollDice(cssClass, i, value) {
  document.getElementById("diceContainer").innerHTML += `<div 
        class="${cssClass}" 
        onclick="clickDice(${i})"
      >
        ${value}
      </div>`;
}

export function getTemplateSaveLoot(rollDice) {
  const points = rollDice
    .filter((d) => d.type === "loot" && d.selected)
    .reduce((sum, d) => sum + d.value, 0);
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${points} Punkte`;
}

export function getTemplateEndgameLoot(points) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${points} Punkte`;
}

export function getTemplateEndgameLootAi() {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">`;
}
