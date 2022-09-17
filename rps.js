/*What we need to make a rps app
We need functions: 
    We need a playGame() function where we put all our functions in to play the game
    We need an array with item choices a.k.a ['rock', 'paper', 'scissors']
    We need a player function called playerChoice()
    We need an ai function called engineChoice(), inside the engine choice we need a method called Math.floor(Math.random() * 3) 

If statements to calculate the different outcomes depending on choice
*/
const prompt = require('prompt-sync')();
let score;

const userRegistration = (userName, userPass, userPassCheck) => {
    userName = prompt("Hello and welcome to rock paper scissors, please enter your username: ")
    userPass = prompt("Please enter password: ")
    userPassCheck = prompt("Please confirm your password: ")
    const userPassConfirmed = console.log("Password confirmed! ")
    const userPassNotConfirmed = console.log("Please enter your password again: ")
    if(userPassCheck === userPass){
        return userPassConfirmed
    }else if(userPassCheck !== userPass){
        return userPassNotConfirmed
    }
};






const getUserChoice = (userInput) => { // How do I randomize the choice without using prompt("What's your choice? ") => fixed
    userInput = prompt(`Pick one: Rock Paper or Scissors `) //  
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput
    }
    if(userInput !== "rock" || userInput !== "paper" || userInput !== "scissors"){
        throw "You can't pick that! "
    }
// add eventlistener choice.addEventListener("onclick") when working with DOM
};


const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
};


const getResult = (userChoice, computerChoice) => { // => getResult(playerChoice, computerChoice)
    // conditionals, if statements
    if(userChoice === computerChoice){
        return "This game is a tie!";
    }else if(userChoice === "rock" && computerChoice === "paper"){
        return "Congratulations, you won!"
    }else if(userChoice === "paper" && computerChoice === "rock"){
        return "Congratulations, you won!"
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        return "Congratulations, you won!"
    }else{
        return "Sorry, computer won!"
    }

};

function calculateFinalScore(){ // Update score depending on who won
    return
};

const playGame = () => {
   const userChoice = getUserChoice()
   const computerChoice = getComputerChoice()
   console.log(`You threw: ${userChoice}`)
   console.log(`The computer threw: ${computerChoice}`)

   console.log(getResult(userChoice, computerChoice))
};
playGame()


