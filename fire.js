const choices=['rock', 'paper', 'scissors'];
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const result=document.getElementById("results");
const playerscore=document.getElementById('playerscore');
const computerscore=document.getElementById("computerscore");
let scoreplayer=0;
let scorecomputer=0;

function playgame(playeroptions){
    const computerchoice= choices[Math.floor(Math.random()*3)];
    let resultdisplay="";
    player.textContent=`PLAYER: ${playeroptions}`;
    computer.textContent=`COMPUTER: ${computerchoice}`;
    
    if(playeroptions === computerchoice){
        resultdisplay="ITS A TIE";
        result.textContent=resultdisplay;
    }
    else if((playeroptions === 'rock' && computerchoice === "scissors") || 
            (playeroptions === 'rock' && computerchoice === "paper") || 
            (playeroptions === 'scissors' && computerchoice === "paper")){
                scoreplayer+=1;
        resultdisplay="🎉🎉✨YOU WIN";
        playerscore.textContent=scoreplayer
        result.textContent=resultdisplay;
    }
    else {
        scorecomputer+=1;
        computerscore.textContent=scorecomputer;
        resultdisplay="YOU LOSE 😪 ";
        result.textContent=resultdisplay;
    }
    
    result.classList.remove('greentext', 'redtext');
    switch(resultdisplay){
        case "🎉🎉✨YOU WIN":
            result.classList.add("greentext");
            break;
        case "YOU LOSE 😪 ":
            result.classList.add("redtext");
            break;
    }
}
