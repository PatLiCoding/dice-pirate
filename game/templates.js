function getTemplateByGameStart() {
  document.getElementById("playgroundContainer").innerHTML +=
    `<div class="gameConditionContainer" id="gameConditionContainer"></div>
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

function getTemplateSaveLoot(rollDice) {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<div class="pointsContainer"><img src="../assets/img/lootbox.png" class="conditionImages"> 
   ${rollDice.reduce((sum, dice) => sum + dice.value, 0)} Punkte</div>`;
}

function getTemplateFromRollDice(cssClass, i, value) {
  document.getElementById("diceContainer").innerHTML += `<div 
        class="${cssClass}" 
        onclick="clickDice(${i})"
      >
        ${value}
      </div>`;
}

function getTemplateLastRound() {
  document.getElementById("btnSection").innerHTML +=
    `<button onclick="playerRollTheDice()">Runde Beenden</button>`;
}

function getTemplateRoundFinished() {
  document.getElementById("btnSection").innerHTML +=
    `<button onclick="gameRestart()">Neustart</button>
    <p>Die Runde ist beendet.</p>`;
}
