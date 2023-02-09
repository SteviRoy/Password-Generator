// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128 characters:");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var includeLowercase = confirm("Include lowercase letters in the password?");
    var includeUppercase = confirm("Include uppercase letters in the password?");
    var includeNumeric = confirm("Include numeric characters in the password?");
    var includeSpecial = confirm("Include special characters in the password?");
    
    if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
      var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    } else {
      alert("Please select at least one character type to include in the password.");
    }
  } else {
    alert("Password length must be between 8 and 128 characters.");
  }
}

// Generate password function
function generatePassword(length, lowercase, uppercase, numeric, special) {
  var password = "";
  var charTypes = 0;
  var charTypesArr = [];

  if (lowercase) {
    charTypesArr.push("abcdefghijklmnopqrstuvwxyz");
    charTypes++;
  }

  if (uppercase) {
    charTypesArr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    charTypes++;
  }

  if (numeric) {
    charTypesArr.push("0123456789");
    charTypes++;
  }

  if (special) {
    charTypesArr.push("!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?`~");
    charTypes++;
  }

  for (var i = 0; i < length; i++) {
    var charType = Math.floor(Math.random() * charTypes);
    var randomChar = charTypesArr[charType][Math.floor(Math.random() * charTypesArr[charType].length)];
    password += randomChar;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
