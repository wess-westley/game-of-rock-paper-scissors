const choices = ['rock', 'paper', 'scissors'];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("results");
const playerscore = document.getElementById('playerscore');
const computerscore = document.getElementById("computerscore");

let scoreplayer = 0;
let scorecomputer = 0;

function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultDisplay = "";

    // Show selections
    player.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computer.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;

    // Determine result
    if (playerChoice === computerChoice) {
        resultDisplay = "ITS A TIE";
    } 
    else if (
        (playerChoice === 'rock' && computerChoice === "scissors") || 
        (playerChoice === 'paper' && computerChoice === "rock") || 
        (playerChoice === 'scissors' && computerChoice === "paper")
    ) {
        scoreplayer += 1;
        playerscore.textContent = scoreplayer;
        resultDisplay = "🎉🎉✨YOU WIN";
    } 
    else {
        scorecomputer += 1;
        computerscore.textContent = scorecomputer;
        resultDisplay = "YOU LOSE 😪";
    }

    // Update result text
    result.textContent = resultDisplay;

    // Update colors
    result.classList.remove('greentext', 'redtext');
    if (resultDisplay === "🎉🎉✨YOU WIN") result.classList.add("greentext");
    if (resultDisplay === "YOU LOSE 😪") result.classList.add("redtext");

    // Voice feedback
    const speech = new SpeechSynthesisUtterance(
        `You selected ${playerChoice}. Computer selected ${computerChoice}. ${resultDisplay.replace(/[^\w\s]/gi, '')}`
    );
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
