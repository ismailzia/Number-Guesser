// 
const game = document.getElementById('game'),
      guessInput = document.getElementById('guess-input'),
      guessValue = document.getElementById('guess-value'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num')
      message = document.querySelector('.message');

//variables 
let min = 0;
let max = 10;
let guessLeft = 3;
let numWin = Math.floor(((Math.random()*max)+min)-min);

//add event listenner 
guessValue.addEventListener('click',guesFunc);
game.addEventListener('mousedown',playAgain);

 //set the value 
 minNum.innerHTML = `${min}`;
 maxNum.innerHTML = `${max}`;

//function guess
function guesFunc(e){

   if(guessInput.value == ''){
       alert('could you please enter a number ');
   }else if(guessInput.value < min || guessInput.value > max){

        message.innerHTML = `Please Enter Number Between ${min} and ${max}`;
        msgColor('red')

   }else if(guessInput.value ==  numWin){
        // game over you win 
        message.innerHTML = `${guessInput.value} is correct, YOU WIN!`;
            guessValue.value ='Play Again';
            guessValue.className += 'play-again';
        msgColor('green')
   }else if(guessInput.value !==  numWin){
console.log(numWin)
        guessLeft--
        // game over lost enter a number 
        message.innerHTML = `${guessInput.value}  is not correct, ${guessLeft} guesses left`;

        if(guessLeft == 0){
            message.innerHTML = `GAME OVER you lost, ${numWin} is the Correct Number`;
            guessInput.disabled = true;
            
            guessValue.value ='Play Again';
            guessValue.className += 'play-again';

        }
            msgColor('red'); 
    }
    e.preventDefault();
}

// funciton playAgain
function playAgain(e){

    if(e.target.className === 'play-again'){
        location.reload()
    }
}

//funciton color
function msgColor(color){

    if(color == 'red'){
        message.style.color = 'red';
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
    }else if(color == 'green'){
        message.style.color = 'green';
        guessInput.style.borderColor = 'green';
        guessInput.disabled = true;
    }

}