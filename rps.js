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
function playerChoice(){
    const choice = ['rock', 'paper', 'scissors']
    return choice
}

function engineChoice(){
    const aiChoice = Math.floor(Math.random() * 3)
    return aiChoice
}


function playGame(){
    playerChoice()
    engineChoice()
}
playGame()