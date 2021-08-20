// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordArray = []
var finalPassword = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
  //  created blank array to allow user to generate password multiple times without refreshing page
    finalPassword = []
    var chooseLength = prompt("Choose password length (between 8 and 128 characters")
  // if user hits "cancel" instead of choosing a length
    if (!chooseLength) {
      alert("You must choose a length to create a password!");
    }
  // if user chooses a length less than 8 or greater than 128
    else if (chooseLength < 8 || chooseLength > 128) {
      alert("Please choose a password length between 8 and 128");
    }
  // user choices with confirmation boxes
    else { chooseUpper = confirm("Do you want uppercase letters?");
    chooseLower = confirm("Do you want lowercase letters?");
    chooseSymbols = confirm("Do you want symbols?");
    chooseNumbers = confirm("Do you want numbers?");
  }
  // all false 
  if(!chooseUpper && !chooseLower && !chooseSymbols && !chooseNumbers){
    alert("Please make a choice you dummy!");
  }
  // all true
  if(chooseUpper && chooseLower && chooseSymbols && chooseNumbers){
    passwordArray = upperCase.concat(lowerCase, symbolChar, numbersChar);
  }
  // upper true else false
  if(chooseUpper && !chooseLower && !chooseSymbols && !chooseNumbers){
    passwordArray = upperCase;
  }
  // lower true else false
  if(!chooseUpper && chooseLower && !chooseSymbols && !chooseNumbers){
    passwordArray = lowerCase;
  }
  // Numbers true else false
  if(!chooseUpper && !chooseLower && !chooseSymbols && chooseNumbers){
    passwordArray = numbersChar;
  }
  // symnbol true else false
  if(!chooseUpper && !chooseLower && chooseSymbols && !chooseNumbers){
    passwordArray = symbolChar;
  }
  // upper and lower true else false
  if(chooseUpper && chooseLower && !chooseSymbols && !chooseNumbers){
    passwordArray = upperCase.concat(lowerCase);
  }
  // upper and Numbers true else false
  if(chooseUpper && !chooseLower && !chooseSymbols && chooseNumbers){
    passwordArray = upperCase.concat(numbersChar);
  }
  // upper and symbol true else false
  if(chooseUpper && !chooseLower && chooseSymbols && !chooseNumbers){
    passwordArray = upperCase.concat(symbolChar);
  }
  // upper, lower and Numbers true 
  if(chooseUpper && chooseLower && !chooseSymbols && chooseNumbers){
    passwordArray = upperCase.concat(lowerCase,numbersChar);
  }
  // upper, lower and symbol true
  if(chooseUpper && chooseLower && chooseSymbols && !chooseNumbers){
    passwordArray = upperCase.concat(lowerCase,symbolChar);
  }
  // upper Number and symbol true
  if(chooseUpper && !chooseLower && chooseSymbols && chooseNumbers){
    passwordArray = upperCase.concat(symbolChar,numbersChar);
  }
  // lower and Numbers are true else false
  if(!chooseUpper && chooseLower && !chooseSymbols && chooseNumbers){
    passwordArray = lowerCase.concat(numbersChar);
  }
  // lower and symbol are true else false
  if(!chooseUpper && chooseLower && chooseSymbols && !chooseNumbers){
    passwordArray = lowerCase.concat(symbolChar);
  }
  // lower Numbers and symbol are true
  if(!chooseUpper && chooseLower && chooseSymbols && chooseNumbers){
    passwordArray = lowerCase.concat(numbersChar, symbolChar);
  }
  // Numbers and symbol are true else false
  if(!chooseUpper && !chooseLower && chooseSymbols && chooseNumbers){
    passwordArray = symbolChar.concat(numbersChar);
  }
  // random password generation from previous choices 
  for(var i = 0; i < chooseLength; i++){
    var index = Math.floor(Math.random() * passwordArray.length);
    var password = passwordArray[index];
    finalPassword.push(password); 
 } return finalPassword.join(""); 
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
