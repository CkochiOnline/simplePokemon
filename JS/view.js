updateView();

function updateView() {
    getRandomPokemon();

    app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.playerImage}">
            <div>${player.playeName}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView() {

    app.innerHTML = /*HTML*/`
    <div class="caughtContainer">
        <h1>Du fanget ${player.playerPokemon[player.playerPokemon.length - 1].name}</h1>
        <div class="buttonContainer">
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>
        </div>
    </div>
    `;
}


// Controller ----------------------------------------------------------------------------------------


function catchPokemon() {
    player.playerPokemon.push(randomPokemon);
    caughtPokemonView();
}

function showPokemon() {
    console.log(player.playerPokemon);
}

function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
}
