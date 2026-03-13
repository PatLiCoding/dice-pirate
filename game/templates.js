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
    `<div><img src="../assets/img/lootbox.png" class="conditionImages"> 
    ${rollDice}</div>`;
}

function getTemplateFromRollDice(curretNumber) {
  document.getElementById("diceContainer").innerHTML +=
    `<div class="dice">${curretNumber}</div>`;
}

function getTemplateRoundFinished() {
  document.getElementById("playgroundContainer").innerHTML +=
    `<button onclick="gameRestart()">Neustart</button>
    <p>Die Runde ist beendet.</p>`;
}
