// Selects element by class
var timeEl = document.querySelector(".time");

var startButton = document.getElementById("start-button");
var answer = document.getElementById("answer");
var score = 0;

startButton.addEventListener("click", changeBlueBox)


var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds ";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

setTime();

function wrongAnswer() {
secondsLeft = secondsLeft - 10;
answer.innerHTML = "<h1>WRONG!</h1>";
}
function correctAnswer() {
  answer.innerHTML = "<h1>CORRECT!</h1>";
  score++;
}


var theBlueBox = document.getElementById("blue-box")
function changeBlueBox() {
  theBlueBox.innerHTML = "<h1>Question #1:</h1><h2 class = 'instructions'> Commonly used data types DO NOT INCLUDE:</h2>" 
  + "<button id='choiceOne'>A. strings</button>" 
  + "<button id='choiceTwo'>B. booleans</button>" 
  + "<button id='choiceThree'>C. alerts</button>" 
  + "<button id='choiceFour'>D. numbers</button>";

var choiceOne = document.getElementById("choiceOne");
choiceOne.addEventListener("click", questionTwo)
choiceOne.addEventListener("click", wrongAnswer)

var choiceTwo = document.getElementById("choiceTwo");
choiceTwo.addEventListener("click", questionTwo)
choiceTwo.addEventListener("click", wrongAnswer)

var choiceThree = document.getElementById("choiceThree");
choiceThree.addEventListener("click", questionTwo)
choiceThree.addEventListener("click", correctAnswer)

var choiceFour = document.getElementById("choiceFour");
choiceFour.addEventListener("click", questionTwo)
choiceFour.addEventListener("click", wrongAnswer)
}

function questionTwo() {
  theBlueBox.innerHTML = "<h1>Question #2</h1><h2 class = 'instructions'>The condition in an if / else statement is enclosed within:</h2>" 
  + "<button id='choiceOne'>A. quotes</button>" 
  + "<button id='choiceTwo'>B. curly brackets</button>" 
  + "<button id='choiceThree'>C. parentheses</button>" 
  + "<button id='choiceFour'>D. square brackets</button>";

var choiceOne = document.getElementById("choiceOne");
choiceOne.addEventListener("click" , questionThree)
choiceOne.addEventListener("click", wrongAnswer)

var choiceTwo = document.getElementById("choiceTwo");
choiceTwo.addEventListener("click", questionThree)
choiceTwo.addEventListener("click", wrongAnswer)

var choiceThree = document.getElementById("choiceThree");
choiceThree.addEventListener("click", questionThree)
choiceThree.addEventListener("click", correctAnswer)

var choiceFour = document.getElementById("choiceFour");
choiceFour.addEventListener("click", questionThree)
choiceFour.addEventListener("click", wrongAnswer)
}

function questionThree() {
  theBlueBox.innerHTML = "<h1>Question #3</h1><h2 class = 'instructions'>Arrays in javascript can be used to store:</h2>" 
  + "<button id='choiceOne'>A. numbers and strings</button>" 
  + "<button id='choiceTwo'>B. other arrays</button>" 
  + "<button id='choiceThree'>C. booleans</button>" 
  + "<button id='choiceFour'>D. all of the above</button>";

var choiceOne = document.getElementById("choiceOne");
choiceOne.addEventListener("click" , questionFour)
choiceOne.addEventListener("click", wrongAnswer)

var choiceTwo = document.getElementById("choiceTwo");
choiceTwo.addEventListener("click", questionFour)
choiceTwo.addEventListener("click", wrongAnswer)

var choiceThree = document.getElementById("choiceThree");
choiceThree.addEventListener("click", questionFour)
choiceThree.addEventListener("click", wrongAnswer)

var choiceFour = document.getElementById("choiceFour");
choiceFour.addEventListener("click", questionFour)
choiceFour.addEventListener("click", correctAnswer)
}

function questionFour() {
  theBlueBox.innerHTML = "<h1>Question #4</h1><h2 class = 'instructions'>String values must be enclosed within _____ when being assigned to variables.</h2>" 
  + "<button id='choiceOne'>A. commas</button>" 
  + "<button id='choiceTwo'>B. curly brackets</button>" 
  + "<button id='choiceThree'>C. quotes</button>" 
  + "<button id='choiceFour'>D. parentheses</button>";

var choiceOne = document.getElementById("choiceOne");
choiceOne.addEventListener("click" , questionFive)
choiceOne.addEventListener("click", wrongAnswer)

var choiceTwo = document.getElementById("choiceTwo");
choiceTwo.addEventListener("click", questionFive)
choiceTwo.addEventListener("click", wrongAnswer)

var choiceThree = document.getElementById("choiceThree");
choiceThree.addEventListener("click", questionFive)
choiceThree.addEventListener("click", correctAnswer)

var choiceFour = document.getElementById("choiceFour");
choiceFour.addEventListener("click", questionFive)
choiceFour.addEventListener("click", wrongAnswer)
}

function questionFive() {
  theBlueBox.innerHTML = "<h1>Question #5</h1><h2 class = 'instructions'>A very useful tool used during development and debugging for printing content to the debugger is:</h2>" 
  + "<button id='choiceOne'>A. javascript</button>" 
  + "<button id='choiceTwo'>B. terminal / bash</button>" 
  + "<button id='choiceThree'>C. for loops</button>" 
  + "<button id='choiceFour'>D. console log</button>";

var choiceOne = document.getElementById("choiceOne");
choiceOne.addEventListener("click" , highScore)
choiceOne.addEventListener("click", wrongAnswer)

var choiceTwo = document.getElementById("choiceTwo");
choiceTwo.addEventListener("click", highScore)
choiceTwo.addEventListener("click", wrongAnswer)

var choiceThree = document.getElementById("choiceThree");
choiceThree.addEventListener("click", highScore)
choiceThree.addEventListener("click", wrongAnswer)

var choiceFour = document.getElementById("choiceFour");
choiceFour.addEventListener("click", highScore)
choiceFour.addEventListener("click", correctAnswer)
}

function highScore() {
  theBlueBox.innerHTML = "<h1>All Done!</h1><h2 class = 'instructions'>Your final score is: "+ score + "</h2>";
}







// write a function display question 2 (like bluebox) hard coded question 1 to the next
// stored in value like line 32




// This is 04-homework Javascript

/* Time for some psuedo-code
similar game in (04-28 letter game with timer)

need to integrate timer in upper right corner (04-09 and 04-10)

need an eventlistener button to start quiz and timer (04-12 click button increase/decrease counter)

use event bubbling to cycle through each question (04-17 and 04-18)

need a container with divs to hold the various quiz pages

incorrect answer reduces the timer

ability to add Initials and highscore to local storage (04-25 local storage todos)



xx probably not an array..need an array to keep "score" then post high scores (05-06 shopping list assignment)
*/

/* README Requirements:
04 Web APIs: Code Quiz
Your Task
At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment—perhaps as part of an interview process. 
A typical coding assessment includes both multiple-choice questions and interactive coding challenges.

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. 
This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
Mock-Up
The following animation demonstrates the application functionality:

A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.

Grading Requirements
This homework is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria.
Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository contains application code.

Application Quality: 15%
Application user experience is intuitive and easy to navigate.

Application user interface style is clean and polished.

Application resembles the mock-up functionality provided in the homework instructions.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains quality readme file with description, screenshot, and link to deployed application.

Review
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository, with a unique name and a readme describing the project.
*/
