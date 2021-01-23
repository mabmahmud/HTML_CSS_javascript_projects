/*
Name: Mohammad Rahman
Date: 07 March 2020
Purpose: To design html checkout form and css file modifying by javascript code
*/


// To create calculateTax function

window.onload = initMyPage;

function initMyPage() {
    document.getElementById("displayButton").addEventListener("click", getData);
}

function getData() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("emailAdd").value;
    let telNum = document.getElementById("telNum").value;
    let radioButton1 = document.getElementById("radioButtonGroup1").value;
    let radioButton2 = document.getElementById("radioButtonGroup2").value;

    /*
       // check computer type  radio group
       let computerArr = document.getElementsByName("computer");
       let isValid = false;
       for (let i=0;i<computerArr.length; i++) {
           if (computerArr[i].checked === true) {
               isValid = true;
           }
       }
       if (!isValid) {
           alert("You must choose computer type Desktop/Laptop or Other");
       }
       // check brand Name checkbox group
       let brandArray = document.getElementsByName("brand");
       let outputString = "Your selected brand is: ";
       let counter = 0;
       for (let i=0;i<brandArray.length; i++) {
           if (brandArray[i].checked === true) {
               outputString += brandArray[i].labels[0].innerText + ", ";
               counter++;
           }
       }
       // output options div
       outputDiv.style.display = "block";

       if (counter === 0) {
           outputDiv.innerHTML = "Nothing selected";
       } else {
           outputDiv.innerHTML = outputString.slice(0, -2) + ".";
       }
       */
    //let outputDiv = document.getElementById("outputDiv");

    // Text box for first name
    document.getElementById("outputDiv").innerText = fName;
    document.getElementById("outputDiv").innerText = lName;
    document.getElementById("outputDiv").innerText = email;
    document.getElementById("outputDiv").innerText = telNum;
    document.getElementById("outputDiv").innerText = radioButton1;


    // Text box for last name
    if (fName === "") {
        document.getElementById("firstName").style.borderColor = "red";
    } else {
        document.getElementById("fNameError").innerText = "";
        document.getElementById("firstName").style.borderColor = "green";

    }


// Text box for last name
    if (lName === "") {
        document.getElementById("lastName").style.borderColor = "red";
    } else {
        document.getElementById("lNameError").innerText = "";
        document.getElementById("lastName").style.borderColor = "green";
        console.log("first name should be displayed");
    }
// Text box for email address
    if (email === "") {
        document.getElementById("emailAdd").style.borderColor = "red";

    } else {
        document.getElementById("emailError").innerText = "";
        document.getElementById("emailAdd").style.borderColor = "green";

    }
    // Text box for phone number address

    if (telNum === "") {
        document.getElementById("telNum").style.borderColor = "red";
        //alert ("You must fill up First Name");

    } else {
        document.getElementById("telNumError").innerText = "";
        document.getElementById("telNum").style.borderColor = "green";

    }
    // Radio button 1 for phone computer ype
    let computerArr = document.getElementsByName("computer");
    let isValid = false;
    for (let i=0;i<computerArr.length; i++) {
        if (computerArr[i].checked === true) {
            isValid = true;
        }
    }
    if (!isValid) {
        alert("You must choose computer type Desktop/Laptop or Other");
    }
}