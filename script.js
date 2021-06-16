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
  var passwordLength = window.prompt("Enter Leangth of Password:")
    console.log(passwordLength);

    if (passwordLength < 8) {
        window.alert("Error: Must be at least 8 characters!")
    }

}
