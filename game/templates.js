function getTemplateSelectMode() {
  document.getElementById("playgroundContainer").innerHTML = `
    <div class="SelectMode" id="SelectMode">
      <img class="backToIndex" src="../assets/icon/arrow-back.png" onclick="window.location.href = '../index.html'">
      <div>
        <h2>Spielmodus</h2>
        <p>Wähle den Spiel-Modus aus:</p>
      </div>
      <button class="gameBtn" onclick="gameRestart()">Solo</button>
      <button class="gameBtn" onclick="gameRestart()">Gegen KI</button>
      <button class="gameBtn" onclick="gameRestart()">2 Spieler</button>
    </div>`;
}

function getTemplateByGameOverview(
  gameRound,
  curretRound,
  playerPoints,
  enemyPoints,
) {
  document.getElementById("gameOverview").innerHTML = `
  <div>
        <p>Runde</p>
        <p>${gameRound} / 5</p>
      </div>
      <div>
        <p>Wurf</p>
        <p>${curretRound} / 3</p>
      </div>
      <div>
        <p>Spieler</p>
        <p>${playerPoints}</p>
      </div>
      <div>
        <p>Gegner</p>
        <p>${enemyPoints}</p>
      </div>`;
}

function getTemplateByGameStart() {
  document.getElementById("playgroundContainer").innerHTML =
    `<div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialog()"><img src="../assets/icon/game-overview.png">Punktestand</div>
      <div class="gameHeadlineBox" onclick="openDialog()">Setings<img src="../assets/icon/settings.png"></div>
    </div>
    <div class="gameConditionContainer" id="gameConditionContainer"></div>
    <div class="pointsContainer" id="pointsContainer"></div>
    <div class="diceContainer" id="diceContainer"></div>
    <div class="btnSection" id="btnSection">
      <button class="gameBtn" onclick="playerRollTheDice()">Würfeln</button>
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
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="playerRollTheDice()">Runde Beenden</button>`;
}

function getTemplateRoundFinished() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="gameRestart()">Neustart</button>
    <p class="infoText">Die Runde ist beendet.</p>`;
}
