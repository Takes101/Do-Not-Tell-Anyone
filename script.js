// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

  // password length criteria
  var passwordLength = window.prompt("Enter Leangth of Password:");

    if (passwordLength < 8 || passwordLength > 128) {
        window.prompt("Error: Must be betweeen 8 and 126 characters!");
    } else {
        console.log(passwordLength);
    }

  var 

}
