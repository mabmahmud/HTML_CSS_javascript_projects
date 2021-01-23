                  ****GuessME & TaxMoney Project**** 


1.	/45 Question 1

1.	 Create a function declaration called calculateTax() that takes a dollar amount as a parameter and calculates the tax.
1.	/6 If the amount is less than or equal to $5.00, apply 20% tax.
    If the amount is greater than or equal to $5.01 and less than or equal to $100, apply 15% tax.
    If the amount is $100.01 or more, apply 5% tax. Add the tax amount to the original amount and return the new total.
2.	/4 Ensure that you round the final amount to 2 decimal places and return it as a Number type, not string.
3.	/2 This function should be 'pure' in that it should only return a simple value. 
4.	/3 If the user tries to pass in a non-numeric value, return the string "invalid", as a string type.
2.	/15 Create another function declaration called formatMoney() that takes two parameters. The first parameter should be the dollar amount to format. The second parameter will be a boolean value whereby, if true, would see the dollar amount formatted with commas (,) separating the thousands - like $2,344.33. If the flag is false, do not include the commas in the formatted values. The programmer (you) will set the boolean flag, not the user. Hint: Have a look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString.

1.	/5 Use a prompt() to gather the initial dollar amount from the user and then pass that value into your calcTax function. Take the return of that function and pass it to your formatMoney() function. The returned, properly taxed, properly formatted value, should appear in an alert() box. Save all of this work in a js file called taxMoney.js. Please attach it to a properly formatted HTML page called taxIt.html.
2.	/5 Code for all above is commented - header and inline - functions are well commented.
3.	/5 Code for all above is properly aligned and nested, braces are aligned. Variables and page names are named appropriately and lowerCamelCasing is observed.
2.	/35 Question 2 Ensure that your program conforms to these specs below.
1.	/10 Number guessing game. Write a function expression called numGuesser() that, when run, calculates a random number between 1 and 30 and stores that number.  Ask the user to enter a guess using the prompt() method. After the user enters a guess, check to see if their guess is correct. If it is, tell the user. If not, tell the user they are incorrect. Add the following items for more marks.  
1.	/5 Ensure that the input is numeric. If not, return the string "invalid", and ask them to guess again.
2.	/5 Limit the number of guesses to 3, at which point the game, stops and displays a game over message.
3.	/5 For every guess the user makes - if it is too high, let them know. Too low? Let them know that as well. (in the prompt window)
4.	/5 If the user guesses the correct number, show a confirm() box that tells them that they won and asks if they would like to play again. If they click cancel, use alert() to say "Thanks For Playing" and end the game. If they click ok, start the game all over again.
5.	 Save all of this work in a js file called guessingGame.js. Please attach it to a properly formatted HTML page called guessMe.html.
2.	/3 Code for all above is commented - header and inline - functions are well commented.
3.	/2 Code for all above is properly aligned and nested, braces are aligned. Variables and page names are named appropriately and lowerCamelCasing is observed.
