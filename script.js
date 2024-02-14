// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // steps required to generate the password are placed here.
  // in between the curly brackets.

  // create a variable to store the generated password
  var password = "";

  // 1. ask the user for the length of the password (between 8 and 128 characters)
  var passwordLength = window.prompt("How many characters would you like your password to contain (min. 8 chars, max. 128)?");
  window.alert("You chose " + passwordLength + " characters.");
  // 2. ask the user if they want to include lowercase letters

  // 3. ask the user if they want to include uppercase letters

  // 4. ask the user if they want to include numbers

  // 5. ask the user if they want to include special chararacters
  // https://owasp.org/www-community/password-special-characters

  // 6. generate the password based on the user's input

  // 7. we will return the password at the end of the function

}

// Write password to the #password input
function writePassword() {
  // Function to generate password
  var password = generatePassword();
  // passwordText is the id of the text box
  // we identify the text box by its id, so that we can write the password to it
  var passwordText = document.querySelector("#password");
  // write the password to the text box
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
