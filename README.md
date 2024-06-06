# Guess-Number

## Description

    "Guess My Number!" is a simple, interactive web-based game where players try to guess a randomly generated number between 1 and 20. The player enters their guess and receives feedback on whether their guess is too high, too low, or correct. The game also keeps track of the player's score and high score.

## Files Included

    index.html: The main HTML file that contains the structure of the game.
    style.css: The CSS file for styling the game.
    script.js: The JavaScript file that contains the game logic.

## How to Run

    Download the Files: Ensure you have index.html, style.css, and script.js in the same directory.
    Open index.html: You can open this file directly in any modern web browser to start playing the game.

## HTML Structure (index.html)

The HTML file sets up the structure of the game with the following components:
A header displaying the game title and a button to restart the game.
A main section divided into two parts:
The left section where the player inputs their guess.
The right section displaying messages, score, and high score.
The HTML file also links to the external CSS and JavaScript files.

## CSS Styling (style.css)

The CSS file includes:
General styles for resetting margins, padding, and setting box-sizing.
Styling for the body, header, main sections, and individual elements.
Fonts and colors to create a retro gaming aesthetic.

## JavaScript Logic (script.js)

The JavaScript file handles the game logic, including:

    Generating a random number between 1 and 20.
    Handling user input and providing feedback.
    Updating the score and high score.
    Restarting the game.
    Key Functions and Event Listeners
    displayMessage(message): Updates the message displayed to the player.
    Event listener for the "Check!" button:
    Checks if the player's input is correct, too high, or too low.
    Updates the score and high score accordingly.
    Changes the background color and number box size upon a correct guess.
    Event listener for the "Again!" button:
    Resets the game to its initial state.

## Acknowledgements

This game was inspired by a common beginner project in web development courses. It provides a fun way to practice HTML, CSS, and JavaScript skills.

## Author

Shahd Salah
