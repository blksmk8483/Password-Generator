//My arrays 


//*** check back on my notes from 9-30, we learned a new way to do this that would have been much
// easier. 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var characterLength = 8; //minimum characters my password needs to be
var choices = []; //Where all my arrays that I'm combining go to.


// Assignment Code // The actual button
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When I click the button it will run (writePassword)

// Write password to the #password input
function writePassword() {
    var passwordTextArea = document.querySelector("#password");
    var truePrompts = myPrompts(); //this will get me yes or no


    if (truePrompts) {
        var newPassword = generatePassword();
        passwordTextArea.value = newPassword;
    } else {
        passwordTextArea.value = " ";
    }

}


function generatePassword() {
    var password = " ";

    for (var i = 0; i < characterLength; i++) {

        var randomIndex = Math.floor(Math.random() * choices.length); //gets my random (she said typically use this one.)
        password = password + choices[randomIndex];
    }
    return password;
}

function myPrompts() {
    choices = choices.concat(lowerCase, upperCase, specialCharacter, number);  //This is just generating from all four options???
    // choices = [];choices.concat(lowerCase, upperCase, specialCharacter, number); //Nope!
// choices = choices.prototype.concat(lowerCase, upperCase, specialCharacter, number);//Nope!
// choices = choices.concat();

    //Gets me how many characters
    //I was missing ()
    characterLength = parseInt(window.prompt("How many characters would you like your password to be? (8 - 128 characters"));

    if (characterLength < 8 || characterLength > 128) {
        alert("Character length has to be a number between (8-128). Please try again.");

        return false;
    }

    //Why is this not working?  - Look into my arrays?
    //I put everything in "", so...???
    // I had .push but could not get to work - start this over on 9-29
    //concat - can combine arrays into a new array
    if (window.confirm("Would you like lowercase letters in your password?")) {
    }

    if (window.confirm("Would you like uppercase letters in your password?")) {
    }

    if (window.confirm("Would you like numbers in your password?")) {
    }

    if (window.confirm("Would you like special characters in your password?")) {
    }

   
    return true;
    //it true put them in my choices
};