/*What we need to make a rps app
We need functions: 
    We need a playGame() function where we put all our functions in to play the game
    We need an array with item choices a.k.a ['rock', 'paper', 'scissors']
    We need a player function called playerChoice()
    We need an ai function called engineChoice(), inside the engine choice we need a method called Math.floor(Math.random() * 3) 

If statements to calculate the different outcomes depending on choice
*/
const prompt = require('prompt-sync')();
let score = 0
function playerChoice(){ // How do I randomize the choice without using prompt("What's your choice? ") => fixed
    const rpsPlayerChoice = prompt("Pick one: " + ["rock ", " paper ", " scissors "])
    // add something thats stops prompt from continuing in console
    if(rpsPlayerChoice === "rock"){
        console.log("You chose: " + " rock")
    }else if(rpsPlayerChoice === "paper"){
        console.log("You chose: " + " paper")
    }else{
        console.log("You chose: " + " scissors")
    }
    
    // add eventlistener choice.addEventListener("onclick") when working with DOM
}
playerChoice()


function getComputerChoice(){ // How do I get the computer to chose and then output that data?
    const aiChoice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return aiChoice[randomNumber]
}
getComputerChoice()

function getResult(playerChoice, computerChoice){
    // get input from user; rock paper or scissors
    // take input and compare to computer choice
    if(playerChoice === computerChoice){
    score = 0
    }else if(playerChoice === "rock" && computerChoice === "scissors"){
        console.log("You chose rock")
        score++
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        console.log("You win! ")
        score++
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! ")
        score++
    }else{
        console.log("You lost! ")
        score--
    }
    return score
}
getResult()

/* function calculateFinalScore(){ // Update score depending on who won
    return
}*/

/* function playGame(){
    // playerChoice()
    // getComputerChoice()
    // getResult()
}
playGame()*/
