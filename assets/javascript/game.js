var wins=0;
var  losses =0;
var guessLeft =  15;

var numberOfWins= document.getElementById("number-of-wins");
var numberOfLosses = document.getElementById("number-of-losses");
var numberOfGuessLeft = document.getElementById("number-of-guesses")
var userChoiceText = document.getElementById("userchoice-text");
var reset =document.getElementsByClassName("reset");
var lettersGuessed =document.getElementById("lettersGuessed");
// array of letters

var letterChoice =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var letterTyped =[];

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    // display which letters are guessed
    
    letterTyped.push(userGuess);
    lettersGuessed.textContent=letterTyped;
    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var letter = letterChoice[Math.floor(Math.random() * letterChoice.length)] ;
    if(userGuess===letter){
        wins++;
        numberOfWins.textContent=wins;
       
    }

      else{  losses+=1 
          guessLeft-=1;
        numberOfLosses.textContent=losses;
        numberOfGuessLeft.textContent=  guessLeft;
    }
    if(guessLeft===0){
        numberOfLosses.textContent=guessLeft;     
        alert("Game over");
       this.location.reload(); }
    if(wins===2){
        alert("you guess right. Congratulations");
        location.reload();
       }
       
    


}