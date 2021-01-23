/*
Name: Mohammad Rahman
Date: 16 March 2020
Purpose: To design html and css file by javascript code
*/


window.onload=init;

// This function runs when the main page is loaded
function init() {
    document.getElementById("myButton").addEventListener('click', checkTriviaGame);
}

// Main function to call rest of the functions
function checkTriviaGame() {

    // check textBox1 and textBox2 element
    let textBox1Error = checkTextField(document.getElementById("textBox1"));
    let textBox2Error = checkTextField(document.getElementById("textBox2"));

    let dropDown1 = checkDropDown(document.getElementById("dropDown1"));
    let dropDown2 = checkDropDown(document.getElementById("dropDown2"));

    let radioError1 = checkRadioButtonsAndCheckboxes(document.getElementsByName("paint"), "radioError1");
    let radioError2 = checkRadioButtonsAndCheckboxes(document.getElementsByName("war"), "radioError2");

    let checkBoxError = checkRadioButtonsAndCheckboxes(document.getElementsByName("check"), "checkError1");

    calculateScore(textBox1Error, textBox2Error, dropDown1, dropDown2, radioError1, radioError2, checkBoxError);
}

// Checking TextFields
function checkTextField(elem) {
    if (elem.value.length < 1) {
        document.getElementById(elem.id+"Error").innerHTML = "<span class='alert alert-danger'>Please write your answer above box</span>";
        document.getElementById(elem.id+"Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById(elem.id+"Error").innerHTML = "";
        document.getElementById(elem.id+"Error").style.display = "none";
        return true;
    }
}

// Checking Radio buttons
function checkRadioButtonsAndCheckboxes(elem, id) {
    let isValid = false;
    for (let i=0; i<elem.length; i++){
        if (elem[i].checked == true){
            isValid = true;
        }
    }
    if (isValid){
        document.getElementById(id).innerText = "";
        return true;
    } else {
        document.getElementById(id).innerHTML = "<br><span class='alert alert-danger'>Please choose an option</span><br>"
        return false;
    }
}

// Checking DropDownBoxes
function checkDropDown(temp) {
    if (temp.value === "") {
        document.getElementById(temp.id+"Error").innerHTML = "<br><span class='alert alert-danger'>Please choose your answer</span><br>";
        return false;
    } else {
        document.getElementById(temp.id+"Error").style.display = "none";
        return true;
    }
}
// To calculate total score
function calculateScore(textBox1Error, textBox2Error, dropDown1, dropDown2, radioError1, radioError2, checkBoxError) {

    let totalScore = 0;

    if (textBox1Error && textBox2Error
        && dropDown1 && dropDown2 && radioError1
        && radioError2 && checkBoxError) {
        if (document.getElementById("textBox1").value === "50"){
            totalScore ++
        }
        if (document.getElementById("textBox2").value.toLowerCase() === "mercury"){
            totalScore++;
        }
        if (document.getElementById("noneOfAbove").value === "none" &&
            document.getElementById("noneOfAbove").checked){
            totalScore++;
        }
        if(document.getElementById("allOfAbove").checked === true &&
            document.getElementById("hyper").checked === false
            && document.getElementById("stress").checked === false
            && document.getElementById("hearing").checked === false){
            totalScore++;
        }
        if(document.getElementById("1914").checked){
            totalScore++;
        }
        if(document.getElementById("dropDown1").value === "temp100"){
            totalScore++;
        }
        if(document.getElementById("dropDown2").value === "bell"){
            totalScore++;
        }

        let percentageScore = ((totalScore/7)*100).toFixed(2);
        colorizeScore(percentageScore);

        //console.log("Validation passed");
        //console.log(totalScore);
        //console.log(percentageScore);
    }else {
        document.getElementById("outputDiv").innerHTML = "<span class='alert alert-danger'>Form contains errors</span>";
        //console.log("Validation failed");
    }
}
// To colorize the final result
function colorizeScore(totalScore){
    if(totalScore=>0 && totalScore<=50){
        document.getElementById("outputDiv").innerHTML = `<span class='red'>Total Score is: ${totalScore}%</span>`;
    }
    if (totalScore>50 && totalScore<80){
        document.getElementById("outputDiv").innerHTML = `<span class='orange'>Total Score is: ${totalScore}%</span>`;
    }
    if (totalScore>=80){
        document.getElementById("outputDiv").innerHTML = `<span class='green'>Total Score is: ${totalScore}%</span>`;
    }
}
