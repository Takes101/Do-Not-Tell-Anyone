// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";




// function make for passwrod criteria
function generatePassword() {
  window.alert("Select Password Criteria!");
  password = "";
  passwordCriteria = "";

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
      passwordCriteria += lowerCaseChar;
    }

  var upperCase = confirm("Include upper case letters?");
    if (upperCase) {
      passwordCriteria += upperCaseChar;
    }

  var special = confirm("Include special characters?");
    if (special) {
      passwordCriteria += specialChar;
    }

  var numbers = confirm("Include numbers?");
    if (numbers) {
      passwordCriteria += numberChar;
    }

  console.log(passwordCriteria);
  
  for (var i = 0; i < passwordLength; i++) { 
    password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
  } 
    return password;
}


// Write password to the #password input
function writePassword() {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  
  console.log(newPassword);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);