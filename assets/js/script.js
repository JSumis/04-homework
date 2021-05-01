// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var startButton = document.getElementById("start-button")
startButton.addEventListener("click", changeBlueBox)
var secondsLeft = 120;

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


var theBlueBox = document.getElementById("blue-box")
function changeBlueBox() {
  theBlueBox.innerHTML = "<h1>Coding Quiz Challenge </h1><h2 class = 'instructions'>I got changed.</h2><button id='start-button'>Start</button>";
}








// This is 04-homework Javascript

/* Time for some psuedo-code
similar game in (04-28 letter game with timer)
style like 04-28 change colors

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
