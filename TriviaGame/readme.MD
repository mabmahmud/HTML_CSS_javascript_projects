                  ****Trivia Game**** 
				  
				  
Create a trivia game! 
Create a simple web page that contains a JavaScript form that will allow the user to answer 7 trivia questions.
Your trivia game should contain:
•	2 text boxes
•	2 select dropdowns
•	2 multiple choice questions (using radio buttons, 4 options min)
•	1 choose-all-that-apply (checkboxes, 4 options min, one answer should be "None of the above"). No part-points for semi-correct answers.
The questions can cover any topic you wish - but please keep it professional and easy enough that the average person could get a few correct. 
Before the user is allowed to calculate and display their final score on the screen, ensure that they have filled out all of the fields or made a selection choice in all of the questions. You might want to consider disabling the button or perhaps you would rather prevent the display of the results using your program logic. Without using an alert(), prompt(), or confirm() or console.log, make sure the user is aware of any issues in the form. These messages should be cleared when the user fixes them.
Use common-sense / real-world validation for your form. (Do not allow empty fields, if numeric only, if letters only, ensure at least one item is checked in each group, these are just some examples). For your button, ensure to use <button type="button" id="yourButtonId">. 
 
If the user has filled in all responses (or selected a response), then you must check to see if they entered the correct answers and calculate their score. You can hard-code the correct trivia answers in your code. Ensure that any typed responses are not case sensitive.
Quick, incomplete example: 
 
If (document.getElementById(“answer1”).value == “Monkeys”) { // 
 //Add one to correctScore – tally score
}
Only check their trivia answers if they have given you valid data. Don't calculate and display a score unless you have good data!
After you have corrected all of their responses, display their final grade as a percentage on the screen (in an output div somewhere using innerHTML). Round their percentage result to 2 decimal places). If their grade is between 0 and 50% color the text red - between 51-79% color it orange -  80%+ color it green!
Ensure that all of your html content is a div with an id of container. Give this div a 1px solid green border with 5px of padding. 10px of top margin too. Div should be centered horizontally with a width of 800px. Div content should be left aligned. Add some user instructions and flair to make your page professional looking and/or visually appealing.
HTML Page - trivia.html
JS Page - trivProcess.js

