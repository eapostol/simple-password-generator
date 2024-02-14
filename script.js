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

  // add a check to see if the user entered a valid password length 
  // (i.e. between 8 and 128 characters)

  // 2. ask the user if they want to include lowercase letters
  // use a confirm box to ask the user if they want to include lowercase letters
  // a confirm box simply displays an OK or cancel button. OK returns true, cancel returns false
  // true means yes, false means no
  var includeLowercase = window.confirm("Click OK to confirm including lowercase characters.");
  if(includeLowercase) {
    window.alert("You chose to include lowercase characters.");
  } else {
    window.alert("You chose not to include lowercase characters.");
  }

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
