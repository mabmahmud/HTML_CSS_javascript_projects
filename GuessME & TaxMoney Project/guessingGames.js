/*
Name: Mohammad Rahman
Date: 01 February  2020
Purpose: To calculate taxMoney after taxing the given amount
*/
// Main function to execute full program
function numGuesser() {
    var number = Math.floor(1+Math.random()*30);
    console.log(number);
    var guess;
    let i =0;
    for (i; i < 3; i++) {
        guess = Number(prompt("Please enter your guessing number among 1 - 30 "));
        if (isNaN(guess)) {
            //return 'Invalid';
            alert("You can guess again ")
        }
        if(number>guess){
            alert("Number is too low");
        }
        if(number<guess){
            alert("Number is too high");
        }
        if (number == guess) {
            if(window.confirm("You won!! Would you like to play again??")){
                numGuesser();
            }else{
                alert("Thank you for playing");
                break;
            }
        }
        if(i==2){
            alert("Game is over");
            break;
        }
        else {
            guess = prompt("Please try again")
        }
    }
}
numGuesser();