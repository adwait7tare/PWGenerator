// Funtion to collect information: 

//Array of special characters
var specialChar = ['@', ];

//Array of numarical characters

//Array of lowerCase characters (look up .split())

//Arrat of upperCase characters (look up .split())

//Create a function that prompts the user forthe password options
function getUserOptions() {

// Create a variable to store the lenght of the password from the user input (look up parseInt())
var passLength = prompt (parseInt("Enter password lenght"));
}

//create a conditional statement to check if the lenght is an actual number and not a string
//create a conditional to check if the password lenght is at least 8 chars long
//create a conditional to check if the password lenght is not exceeding (lower than) 128 chars long

//create four differnet conditional statements to store if the user password is going to use (continued on next line)
//(continued) special chars, numbers and lower and upper case chars

//Create a conditional statement to check if the user included at least some type of character - this could use if else statements

//create a variable to store the user input - create an object to store user inputs which will include muliple attributeds

var passOptions = {
  passLenght: passLenght,
  specialChars: ... ,
  numeriacalChars: ... ,
  lowerCase: ... ,
  upperCase: ... ,

}
//-------------------------------------------------

// Function for getting a random element fro man array
//check out math.random 
//-------------------------------------------------

//Function to generate a password with the user input function created before (function to include a fucntion)

function generatePass {
   //create variables and call our function so we can use data from the previous funciotn
   var userOptions = getUserOptions ();

  // create a variable to store the newly generated password
  //var results = []
  
  // array to store teh types of characters to include in our password 
  //var userPosChar = []

  // array to contain at leaset one of each chosen tyoe of characters to make sure at least one of every character is being used (validation)

  // create conditional statems that add the array of characters into an array of possible characters based on our user input
  //need to push our new random characters to the guaranteed characters (look up .contact())
    // if(userOptions.specialCharacters) {
      // take characters and contat()
      //take characters and push (randomizationfunction (SpecialCharacter)(after we randomize)
    //}
    // create conditional statems that add the array of characters into an array of possible characters based on our user input
  //need to push our new random characters to the guaranteed characters (look up .contact())
  // for numarals

    // create conditional statems that add the array of characters into an array of possible characters based on our user input
  //need to push our new random characters to the guaranteed characters (look up .contact())
   // for upper case chars 

    // create conditional statems that add the array of characters into an array of possible characters based on our user input
  //need to push our new random characters to the guaranteed characters (look up .contact())
  // for lower case chars

//create a for loop to pluck out random options objects and graing random characters from the array of possible character and contact them 
//into the results variable

//create another for loop to guarantee at least one character from each possible character in the results

// 


}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
