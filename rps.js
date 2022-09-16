/*What we need to make a rps app

We need functions: 
    We need a playGame() function where we put all our functions in to play the game
    We need a rpsWinner() function, for whenever human player wins
    We need a rpsLoser() function, for whenever human player loses
    We need a rpsTie() function, for whenever human choice and ai choice is the same

    We need an array with item choices a.k.a ['rock', 'paper', 'scissors']
    We need a player function called playerChoice()
    We need an ai function called engineChoice(), inside the engine choice we need a method called Math.floor(Math.random() * 3) 

If statements to calculate the different outcomes depending on choice
*/
let score = 0
function playerChoice(){ // How do I randomize the choice without using prompt("What's your choice? ")
    const choice = ["rock", "paper", "scissors"]
    return choice
    // add eventlistener choice.addEventListener("onclick") when working with DOM
}

function getComputerChoice(){ // How do I get the computer to chose and then output that data?
    const aiChoice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return aiChoice[randomNumber]
}
getComputerChoice()

function getResult(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
    score = 0
    }else if(playerChoice === "rock" && computerChoice === "scissors"){
        console.log("You chose rock")
        console.log("+1")
        score = 1
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        console.log("You win! ")
        score = 1
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! ")
        score = 1
    }else{
        console.log("You lost! ")
        score = -1
    }
    return score
}
getResult()

function calculateFinalScore(){ // Update score depending on who won
    return
}

function playGame(){
    playerChoice()
    getComputerChoice()
    getResult()
}
playGame()