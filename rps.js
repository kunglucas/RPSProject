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



let pChoice = function getPlayerChoice(){ // How do I randomize the choice without using prompt("What's your choice? ") => fixed
    const rpsChoice = ['rock ' , ' paper', ' scissors ']
    const rpsPlayerChoice = prompt(`Pick one: ${rpsChoice[0]}${rpsChoice[1]}${rpsChoice[2]} : `) //  ==> ["rock ", " paper ", " scissors "]
    if(rpsPlayerChoice === "rock"){
        console.log(`You chose: ${rpsChoice[0]}`) // => " rock"
    }else if(rpsPlayerChoice === "paper"){
        console.log(`You chose: ${rpsChoice[1]}`)
    }else{
        console.log(`You chose: ${rpsChoice[2]}`)
    }
    return rpsPlayerChoice
// add eventlistener choice.addEventListener("onclick") when working with DOM
}


let cChoice = function getComputerChoice(){ // 
    const aiChoice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return "Computer chose: " + aiChoice[randomNumber]
}


function getResult(){ // => getResult(playerChoice, computerChoice)
    // get input from user; rock paper or scissors
    // take input and compare to computer choice
    pChoice()
    console.log(cChoice())

    if(pChoice === "rock" && cChoice === "scissors"){
        console.log(`You chose: ${pChoice[0]}`) // => console.log(`You chose rock!`)
        console.log("You win!")
        score++
        console.log("Player score: " + score)
    }else if(pChoice === "paper" && cChoice === "rock"){
        console.log(`You chose: ${cChoice[1]}`) // => console.log("You win! ")
        console.log("You win!")
        score++
    }else if(pChoice === "scissors" && cChoice === "paper"){
        console.log(`You chose: ${cChoice[2]}`) // => console.log("You win! ")
        console.log("You win! ")
        score++
    }else if(pChoice === cChoice){
        score = 0
    }else{
        console.log("You lost! ")
        score--
        console.log("Player score: " + score)

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
