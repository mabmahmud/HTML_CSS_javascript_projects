function yourGuess()
{
    var guess1 = document.getElementById("guess").value;
    var guess2 = 501;
    var newGuess = Math.floor(guess2);
    var n = 0;

    if (newGuess < guess1) {
        yourReturn = "Your are too low!!!"
    }
    else {
        if (newGuess > guess1) {
            yourReturn = "You are too high!!!"
        }
        else {
            yourReturn = "Correct, You are the winner!!!"
        }
    }
}