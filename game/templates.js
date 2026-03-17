function getTemplateByGameStart() {
  document.getElementById("playgroundContainer").innerHTML +=
    `<div class="gameConditionContainer" id="gameConditionContainer"></div>
    <div class="pointsContainer" id="pointsContainer"></div>
    <div class="diceContainer" id="diceContainer"></div>
    <div class="btnSection" id="btnSection">
      <button onclick="playerRollTheDice()">Würfeln</button>
    </div>`;
}

function getTemplateShipImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="../assets/img/ship.png" class="conditionImages">`;
}

function getTemplateCaptainImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="../assets/img/captain.png" class="conditionImages">`;
}

function getTemplateCrewImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="../assets/img/crew.png" class="conditionImages">`;
}

function getTemplateRollDiceAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="../assets/img/player-roll.gif" class="rollAnimation">`;
}

function getTemplateSaveLoot(rollDice) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="../assets/img/lootbox.png" class="lootboxImages"> 
   ${rollDice
     .filter((dice) => dice.type === "loot" && dice.selected)
     .reduce((sum, dice) => sum + dice.value, 0)} Punkte`;
}

function getTemplateFromRollDice(cssClass, i, value) {
  document.getElementById("diceContainer").innerHTML += `<div 
        class="${cssClass}" 
        onclick="clickDice(${i})"
      >
        ${value}
      </div>`;
}

function getTemplateEndgameLoot(playerPoints) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="../assets/img/lootbox.png" class="lootboxImages"> 
   ${playerPoints} Punkte`;
}

function getTemplateLastRound() {
  document.getElementById("btnSection").innerHTML +=
    `<button onclick="playerRollTheDice()">Runde Beenden</button>`;
}

function getTemplateRoundFinished(playerPoints) {
  document.getElementById("btnSection").innerHTML +=
    `<button onclick="gameRestart()">Neustart</button>
    <p>Die Runde ist beendet.</p>`;
}
