/*
Name: Mohammad Mahmudur Rahman
Date: 25 February 2019
Purpose: To design html and css file by javascript code
****** I have copied this code from your solution and i tried in different ways to make a single output but i could not able
*/

// To create calculateTax function

window.onload = initMyPage;

function initMyPage() {
    document.getElementById("displayButton").addEventListener("click", getData);
}

function getData() {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;

    // check computer type  radio group
    var computerArr = document.getElementsByName("computer");
    var isValid = false;
    for (let i=0;i<computerArr.length; i++) {
        if (computerArr[i].checked === true) {
            isValid = true;
        }
    }
    if (!isValid) {
        alert("You must choose computer type Desktop/Laptop or Other");
    }
    // check brand Name options group
    var brandArray = document.getElementsByName("brand");
    var outputString = "Your selected brand is: ";
    var counter = 0;
    for (let i=0;i<brandArray.length; i++) {
        if (brandArray[i].checked === true) {
            outputString += brandArray[i].labels[0].innerText + ", ";
            counter++;
        }
    }
    // output options div
    var outputDiv = document.getElementById("outputDiv");
    outputDiv.style.display = "block";
    if (counter === 0) {
        outputDiv.innerHTML = "Nothing selected";
    } else {
        outputDiv.innerHTML = outputString.slice(0, -2) + ".";
    }
    if (fName === "") {
        document.getElementById("firstName").style.borderColor = "red";
        alert ("You must fill up First Name");
    } else {
        document.getElementById("fNameError").innerText = "";
        document.getElementById("firstName").style.borderColor = "green";
    }
}
