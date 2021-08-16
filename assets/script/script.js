// alert ("hello - this is the password generator");
// ------------------------------------------------------------------------------------------------
// Passord Generator Function

function passwordGenerator() {

  // ------------------------------------------------------------------------------------------------
  // create arrays
  // ------------------------------------------------------------------------------------------------
  //Array of special characters
  var specialCharsArr = ['!', '@', '#', '$', '%', '&', '*'];
  console.log(specialCharsArr.length);

  //Array of numarical characters
  var numCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  console.log(numCharsArr.length);

  //Array of lowerCase characters (look up .split())
  var lowerCaseCharsArr = ("abcdefghijklmnopqrstuvwxyz").split('');
  console.log(lowerCaseCharsArr[12]);

  // //Arrat of upperCase characters (look up .split())
  var upperCaseCharsArr = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');
  console.log(upperCaseCharsArr[25]);

  // ------------------------------------------------------------------------------------------------
  // check for password quality
  // ------------------------------------------------------------------------------------------------

  function runPassQualCheck() {

    // ------------------------------------------------------------------------------------------------
    // check for password lenght
    // ------------------------------------------------------------------------------------------------

    function getPassLength() {
      var passLength = parseInt(prompt("Please include lenght of the desired password"));
      console.log("Password lenght input received " + passLength);
      return passLength;
    }

    function checkPassLenght(passLength) {
      //create a conditional statement to check if the lenght is an actual number and not a string
      if (Number.isNaN(passLength)) {
        alert("Passoword must be only a numerical number");
        return checkPassLenght(getPassLength());
      }
      //create a conditional to check if the password lenght is at least 8 chars long
      else if (passLength < 8) {
        alert("Password must be at least 8 characters long");
        return checkPassLenght(getPassLength());
      }
      //create a conditional to check if the password lenght is not exceeding (lower than) 128 chars long
      else if (passLength > 128) {
        alert("Password must be less than 128 characters long");
        return checkPassLenght(getPassLength());
      } else {
        return passLength;
      }
    }

    // save accepted password lenght in as a variable
    var acceptedPassLength = checkPassLenght(getPassLength());

    console.log("Accepted Password Lenght = " + acceptedPassLength);

    // ------------------------------------------------------------------------------------------------
    //Create a functions that prompts the user for the password options
    // ------------------------------------------------------------------------------------------------

    // confirm if special chars are ok to be included
    function includeSpecialChar() {
      var specCharIncluded = confirm('Would you like a special character included in your password?');
      console.log(specCharIncluded);
      return specCharIncluded;
    }

    // confirm if numerals are ok to be included
    function includeNumChar() {
      var numCharIncluded = confirm('Would you like a numeral included in your password?');
      console.log(numCharIncluded);
      return numCharIncluded;
    }

    // confirm if lower case chars are ok to be included
    function includeLowerCaseChar() {
      var lowerCaseCharIncluded = confirm('Would you like a lower case character included in your password?');
      console.log(lowerCaseCharIncluded);
      return lowerCaseCharIncluded;
    }

    // confirm if upper case chars are ok to be included
    function includeUpperCaseChar() {
      var upperCaseCharIncluded = confirm('Would you like a upper case character included in your password?');
      console.log(upperCaseCharIncluded);
      return upperCaseCharIncluded;
    }

    // store answers of password options as variables
    var specCharTF = includeSpecialChar();
    var numCharTF = includeNumChar();
    var lowerCaseCharTF = includeLowerCaseChar();
    var upperCaseCharTF = includeUpperCaseChar();

    console.log("special char accepted = " + specCharTF);
    console.log("numerals accepted = " + numCharTF);
    console.log("lower case char accepted = " + lowerCaseCharTF);
    console.log("upper case char accepted = " + upperCaseCharTF);


    // create array of password options
    var passwordOptions = {
      length: acceptedPassLength,
      specialChars: specCharTF,
      numerals: numCharTF,
      lowerCase: lowerCaseCharTF,
      upperCase: upperCaseCharTF,
    };

    return passwordOptions;
  }

  var finalPassOptions = runPassQualCheck();

  console.log(finalPassOptions);
  console.log(finalPassOptions.length);
  console.log(finalPassOptions.specialChars);
  console.log(finalPassOptions.numerals);
  console.log(finalPassOptions.lowerCase);
  console.log(finalPassOptions.upperCase);

  // ---------------------  Pass quality Check to be validated -------------------------------------
  // function passQualCheck() {
  //   if (specCharTF === false && numCharTF === false && lowerCaseCharTF === false && upperCaseCharTF === false) {
  //     alert("Please include at least one type of characters");
  //     runPassQualCheck ();
  //     }
  //-------------------------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------------------------
  // Function for getting a random element from an array
  //---------------------------------------------------------------------------------------------------

  var initialCombinedCharSet = [];
  var combinedCharSet = [];

  if (finalPassOptions.specialChars === false) {
    combinedCharSet = initialCombinedCharSet.concat(numCharsArr, lowerCaseCharsArr, upperCaseCharsArr);
  } else if (finalPassOptions.numerals === false) {
    combinedCharSet = initialCombinedCharSet.concat(specialCharsArr, lowerCaseCharsArr, upperCaseCharsArr);
  } else if (finalPassOptions.lowerCase === false) {
    combinedCharSet = initialCombinedCharSet.concat(specialCharsArr, numCharsArr, upperCaseCharsArr);
  } else if (finalPassOptions.upperCase === false) {
    combinedCharSet = initialCombinedCharSet.concat(specialCharsArr, numCharsArr, lowerCaseCharsArr);
  } else {
    combinedCharSet = initialCombinedCharSet.concat(specialCharsArr, numCharsArr, lowerCaseCharsArr, upperCaseCharsArr);
  }
  console.log(combinedCharSet);

  //-------------------------------------------------------------------------------------------------
  // generate random password from the character set selected
  //-------------------------------------------------------------------------------------------------

  var password = [];
  for (i = 0; i < finalPassOptions.length; i++) {
    var randomNum = Math.floor(Math.random() * combinedCharSet.length);
    console.log(randomNum);
    password.push(combinedCharSet[randomNum]);
  }
  console.log(password);

  var passToOutput = password.join('');
  console.log(passToOutput);

  return passToOutput;
}


function displayPassword(){
  var passwordToDisplay = (passwordGenerator());

  console.log("Display following password = " + passwordToDisplay);
  console.log ("password lenght = " + passwordToDisplay.length);

  var passwordTextBox = document.getElementById ('password');
  passwordTextBox.value = passwordToDisplay;

}


var generatePassBtn = document.getElementById ('generate');
generatePassBtn.addEventListener('click', displayPassword);



//Function to generate a password with the user input function created before (function to include a fucntion)

// function generatePass {
//create variables and call our function so we can use data from the previous funciotn
//  var userOptions = getUserOptions ();

// create a variable to store the newly generated password
//var results = []

// array to store teh types of characters to include in our password 
//var userPosChar = []

// array to contain at leaset one of each chosen tyoe of characters to make sure at least one of every character is being used (validation)

// create conditional statems that add the array of characters into an array of possible characters based on our user input
//need to push our new random characters to the guaranteed characters (look up .concat())
// if(userOptions.specialCharacters) {
// take characters and concat()
//take characters and push (randomizationfunction (SpecialCharacter)(after we randomize)
//}
// create conditional statems that add the array of characters into an array of possible characters based on our user input
//need to push our new random characters to the guaranteed characters (look up .concat())
// for numarals

// create conditional statems that add the array of characters into an array of possible characters based on our user input
//need to push our new random characters to the guaranteed characters (look up .concat())
// for upper case chars 

// create conditional statems that add the array of characters into an array of possible characters based on our user input
//need to push our new random characters to the guaranteed characters (look up .concat())
// for lower case chars

//create a for loop to pluck out random options objects and graing random characters from the array of possible character and contact them 
//into the results variable

//create another for loop to guarantee at least one character from each possible character in the results

// // 


// }



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);