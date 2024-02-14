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
  var includeUppercase = window.confirm("Click OK to confirm including uppercase characters.");
  if(includeUppercase) {
    window.alert("You chose to include uppercase characters.");
  } else {
    window.alert("You chose not to include uppercase characters.");
  }

  // 4. ask the user if they want to include numbers
  var includeNumbers = window.confirm("Click OK to confirm including numeric characters.");
  if(includeNumbers) {
    window.alert("You chose to include numbers.");
  } else {
    window.alert("You chose not to include numbers");
  }

  // 5. ask the user if they want to include special chararacters
  // https://owasp.org/www-community/password-special-characters
  var includeSpecialChars = window.confirm("Click OK to confirm including special characters.");
  if(includeSpecialChars) {
    window.alert("You chose to include special characters.");
  } else {
    window.alert("You chose not to include special characters");
  }

  // 6. generate the password based on the user's input
  // we have the length of the number of chars needed.
  // we have the value indicating if the user wants uppercase chars
  // we have the value indicating if the user wants lowercase chars
  // we have the value indicating if the user wants numbers
  // we have the value indicating if the user wants special chars

  // first off, we should provide lists of all the valid characters that we can
  // use.

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  var validChars = "";


  // next, let's review what the user wanted in their password.
  if(includeLowercase) {
    // add the lowercase characters to the valid list of characters
    validChars = validChars + lowercaseChars;
  }

  if(includeUppercase) {
    // add the uppercase characters to the valid list of characters
    validChars += uppercaseChars; // same as validChars = validChars + uppercaseChars;
  }

  if(includeNumbers) { 
    // add the numeric characters to the valid list of characters
    validChars += numericChars;
  }

  if(includeSpecialChars) {
    // add the special characters to the valid list of characters
    validChars += specialChars;
  }

  // and store them in a variable that will store all the valid characters we can use.

  window.alert("your choice of characters appears to be :" + validChars);

  // check to see if the variable storing the valid list of characters is not empty.
  // if it is, alert the user that they did not choose correctly, and to try again.

  // using the final valid list of characters, we will generate a random password
  // based on the length or number of characters that the user wants (loop)


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
