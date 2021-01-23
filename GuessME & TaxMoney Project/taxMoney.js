/*
Name: Mohammad Rahman
Date: 01 February  2020
Purpose: To calculate taxMoney after taxing the given amount
*/

// To create calculateTax function
function calculateTax(amount){
    var total;  // Declaring a variable
    //if statement to calculate tax
    if(amount<=5.00){
        total =amount +amount*(20/100);
    }
    if(amount>= 5.01 && amount<=100)
    {
        total =amount +amount*(15/100);
    }
	if(amount>=100.01){
		total =amount +amount*(5/100);
	}
    else(isNaN(amount)){
        return 'Invalid';
    }
    else
    //{
    //    total = amount +amount*(5/100);
   // }
    return total.toFixed(2);
}

// To create formatMoney function
function formatMoney(amount,flag){
    let tempAmount = parseFloat(amount);
    if(flag){
        return "$"+tempAmount.toLocaleString();
    }else{
        return tempAmount;
    }
}
// Prompt function to get the value from user
var dolarAmount = prompt("Please enter dollar amount ");
// To call the calculateTax function and store value in a variable
let  totaqlAmount  = calculateTax(Number(dolarAmount));
let temp = formatMoney(totaqlAmount,true);
 console.log(temp);
 //Use alert function to pop up result in dialogue box
 alert (temp);




