export function getTemplateSelectMode() {
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

export function getTemplateByGameOverview(
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

export function getTemplateByGameStart() {
  document.getElementById("playgroundContainer").innerHTML =
    `<div class="gameHeadline">
      <div class="gameHeadlineBox" onclick="openDialogGameOverview()"><img src="../assets/icon/game-overview.png">Punktestand</div>
      <div class="gameHeadlineBox" onclick="openDialogSetings()">Setings<img src="../assets/icon/settings.png"></div>
    </div>
    <div class="gameConditionContainer" id="gameConditionContainer"></div>
    <div class="pointsContainer" id="pointsContainer"></div>
    <div class="diceContainer" id="diceContainer"></div>
    <div class="btnSection" id="btnSection">
      <button class="gameBtn" onclick="playerRollTheDice()">Würfeln</button>
    </div>`;
}

export function getTemplateShipImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="../assets/img/ship.png" class="conditionImages">`;
}

export function getTemplateCaptainImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="../assets/img/captain.png" class="conditionImages">`;
}

export function getTemplateCrewImage() {
  document.getElementById("gameConditionContainer").innerHTML +=
    `<img src="../assets/img/crew.png" class="conditionImages">`;
}

export function getTemplateRollDiceAnimation() {
  document.getElementById("diceContainer").innerHTML =
    `<img src="../assets/img/player-roll.gif" class="rollAnimation">`;
}

export function getTemplateSaveLoot(rollDice) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="../assets/img/lootbox.png" class="lootboxImages"> 
   ${rollDice
     .filter((dice) => dice.type === "loot" && dice.selected)
     .reduce((sum, dice) => sum + dice.value, 0)} Punkte`;
}

export function getTemplateFromRollDice(cssClass, i, value) {
  document.getElementById("diceContainer").innerHTML += `<div 
        class="${cssClass}" 
        onclick="clickDice(${i})"
      >
        ${value}
      </div>`;
}

export function getTemplateEndgameLoot(playerPoints) {
  document.getElementById("pointsContainer").innerHTML =
    `<img src="../assets/img/lootbox.png" class="lootboxImages"> 
   ${playerPoints} Punkte`;
}

export function getTemplateLastRound() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="playerRollTheDice()">Runde Beenden</button>`;
}

export function getTemplateRoundFinished() {
  document.getElementById("btnSection").innerHTML =
    `<button class="gameBtn" onclick="gameRestart()">Neustart</button>
    <p class="infoText">Die Runde ist beendet.</p>`;
}

export function getTemplateDialogGameOverview() {
  document.getElementById("dialogBox").innerHTML = `
  <div class="dialogHeader">
          <span id="dialogTitle">Punktestand</span>
          <img
            src="../assets/icon/close.png"
            class="dialogCloseBtn"
            onclick="closeDialog()"
          />
        </div>

        <div id="dialogText" class="dialogText">
          <div class="pointsTableContainer">
            <table>
              <tr>
                <th>Runden</th>
                <th>Spieler</th>
                <th>Gegner</th>
              </tr>
              <tr>
                <td>Runde 1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Runde 2</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Runde 3</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Runde 4</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Runde 5</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Gesamt</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </table>
          </div>
        </div>
        <div id="dialogButtonContainer" class="dialogButtonContainer">
          <button class="dialogBtn" onclick="closeDialog()">Zurück</button>
        </div>`;
}

export function getTemplateDialogSetings() {
  document.getElementById("dialogBox").innerHTML = `
  <div class="dialogHeader">
          <span id="dialogTitle">Setings</span>
          <img
            src="../assets/icon/close.png"
            class="dialogCloseBtn"
            onclick="closeDialog()"
          />
    </div>
  <div id="dialogButtonContainer" class="dialogButtonContainer">
    <button class="dialogBtn" onclick="closeDialog()">Zurück</button>
    <button class="dialogBtn" onclick="closeDialog(); location.reload(true);">Spielmodus</button>
    <button class="dialogBtn" onclick="closeDialog(); window.location.href = '../game-rules.html'">Spielregeln</button>
    <button class="dialogBtn" onclick="closeDialog(); window.location.href = '../index.html'">Startseite</button>
  </div>`;
}
