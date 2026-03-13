function getTemplateByGameStart() {
  document.getElementById("playgroundContainer").innerHTML +=
    `<button onclick="playerRollTheDice()">klick</button>`;
}

function getTemplateFromRollDice(curretNumber) {
  document.getElementById("diceContainer").innerHTML +=
    `<div class="dice">${curretNumber}</div>`;
}

function getTemplateRoundFinished() {
  document.getElementById("playgroundContainer").innerHTML +=
    `<p>Die Runde ist beendet.</p>`;
}
