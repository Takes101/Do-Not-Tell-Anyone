// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function make for passwrod criteria
function passwordProcess() {
  window.alert("Select Password Criteria!");
  password = "";

  // password length criteria
  var passwordLength = prompt("Enter Leangth of Password:");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        window.prompt("Error: Must be betweeen 8 and 126 characters!");
    } else {
        console.log(passwordLength);
    }

  var lowerCase = confirm("Include lower case letters?");
  if (lowerCase) {
    password += lowerCaseChar;
  }

  var upperCase = confirm("Include upper case letters?");
  if (upperCase) {
    password += upperCaseChar;
  }

}
