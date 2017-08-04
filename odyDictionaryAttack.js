var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  for (i = 0; i < wordsList; i++) { 
    if (hour < 18) {
    greeting = "Good day";
    } else {
    greeting = "Good evening";
      }
    }
  }
}
  
      
      //here is what I know I want you to do.
      //you must have the whole list.
      //With the list and the input I want it to check the list for the users inout.
      //continue this. If there is no same input in the list, then say it's ok.
      //if the user input matches. I want it to say that you can't create that pass word.
      //What is needed: For loop, for password input 
