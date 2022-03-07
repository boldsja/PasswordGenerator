// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;
var CharCount;
var Input;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers =[0,1,2,3,4,5,6,7,8,9]
var specials = ["!","@","#","$","%","&","*","(",")","-","_","+","="]

// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.

function askAboutLowercase(){
  allowLowerCase = confirm("Are lower case characters allowed?");
  console.log(allowLowerCase);
}

function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed?");
  console.log(allowNumbers);
}

function askAboutSpecials(){
  allowSpecials = confirm("Are special characters allowed?");
  console.log(allowSpecials);
}

function askCharacterCount(){
  var passwordCharacterCount = parseFloat( window.prompt("How many characters do you want?"));
  var Input = (passwordCharacterCount);
  console.log(Input);
}
//verifying that prompt was converted into integer
//console.log(isNaN (Input));

function chooseRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//create function to grab from character options
var AllChars = allowLowerCase allowNumbers, allowUppercase, allowSpecials]; 

function createArray (PassGen) {
  //create empty array
  //var EmptyPass = [];
    for(var i=0; i<PassGen; i++){
      var EmptyPass = [];
      var ChooseChars = AllChars;
      //var for empty string
      var HoldPassString;
      //var for result of generated number function 
      var desiredlength = chooseRandomNumber(6, 12);
        for( var j = 0; j<desiredlength; j++) {
          HoldPassString = HoldPassString + AllChars[chooseRandomNumber(0,75)]
        }
      EmptyPass.push(HoldPassString);
    }
    //

}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){


      var finalized = generatePassword
}

  var finalResult = '';

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  
  // HINT: You may want to look into merging arrays together


  //return finalResult;

//}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumbers();
  askAboutSpecials();
  askCharacterCount();


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Random number generator
function chooseRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}