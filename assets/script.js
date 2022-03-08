// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numbers = '0123456789';
var specials = "!@#$%^&*()_+-={}:;<>?";
var userChoice = "";
var characters = "";

function generatePassword(){


  var passLength = parseInt(window.prompt("How many characters would you like in your password? (Choose between 10-128)"));

  console.log("passLength", passLength)

  if(passLength < 10 || passLength > 128){
    alert("Please choose a number of characters between 10 and 128.")
    return;

  } else {

  var letterLittle = window.confirm("Would you like lowercase characters in your password?");

  var letterBig = window.confirm("Would you like uppercause characters in your password?");

  var nums = window.confirm("Would you like numbers in your password?");


  var specialChars = window.confirm("Would you like special characters in your password?")

  // if they want lowercase letters add lowercaseChars to userChoice variable and so on..
  if(letterLittle === true){
 userChoice += lowercaseChars
  }

  if(letterBig === true){
    userChoice += uppercaseChars
  }

  if(nums === true){
    userChoice += numbers
  }

  if(specialChars === true){
    userChoice += specials
  }

  console.log("USER CHOICES", userChoice)

  //loop to choose random characters until desired length reached
  for(var i = 0; i < passLength; i++){
    
    var indexRandomizer = Math.floor(Math.random() * userChoice.length)
    //console.log("indezRandomizer", indexRandomizer)

    characters += userChoice.charAt(indexRandomizer)
    console.log(characters)

  }


  }

  var passwordText = document.querySelector("#password");
  passwordText.textContent = characters;
}




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//Random number generator
//function chooseRandomNumber(min, max){
  //return Math.floor(Math.random() * (max - min + 1) + min);
//}