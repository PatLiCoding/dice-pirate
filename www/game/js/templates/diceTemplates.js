import { IMAGE_PATHS } from "../config.js";

/**
 * Shows the dice rolling animation for the player.
 */
export function getTemplateRollDicePlayerAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="${IMAGE_PATHS.rollAnimationPlayer}" class="rollAnimation">`;
}

/**
 * Shows the dice rolling animation for the AI.
 */
export function getTemplateRollDiceAiAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="${IMAGE_PATHS.rollAnimationEnemy}" class="rollAnimation">`;
}

/**
 * Renders a single dice in the dice container.
 * @param {string} cssClass - CSS class for styling the dice.
 * @param {number} i - The index of the dice.
 * @param {number} value - The value of the dice.
 */
export function getTemplateFromRollDice(cssClass, i, value) {
  document.getElementById("diceContainer").innerHTML += `<div 
        class="${cssClass}" 
        onclick="clickDice(${i})"
      >
        ${value}
      </div>`;
}

/**
 * Displays the saved loot points for the player.
 * @param {Array} rollDice - Array of dice objects with type and selected properties.
 */
export function getTemplateSaveLoot(rollDice) {
  const points = rollDice
    .filter((d) => d.type === "loot" && d.selected)
    .reduce((sum, d) => sum + d.value, 0);
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${points} Punkte`;
}

/**
 * Displays the final loot points at the end of the game.
 * @param {number} points - Total points collected by the player.
 */
export function getTemplateEndgameLoot(points) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">${points} Punkte`;
}

/**
 * Displays the loot box for the AI without showing points.
 */
export function getTemplateEndgameLootAi() {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="${IMAGE_PATHS.lootbox}" class="lootboxImages">`;
}
