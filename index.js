// var tweet = prompt ();
// var tweetCounter = tweet.length;

// alert ("You have written " + tweetCounter + " characters, and your remaining is " + (140 - tweetCounter ) + " characters");

// var tweet = prompt ("Compose your tweet:");
// var tweetUnder2 = tweet.slice(0,2);

// alert (tweetUnder2);

//Simplified version

// alert(prompt("Compose your tweet").slice(0,2)); 

// prompt ("What is your name");

//Hello, Angela

// var name = prompt("What is your name");

// var firstNameLetter = name.slice(0,1);
// var restofNameLetter = name.slice(1).toLowerCase();

// var firstNameLetter = firstNameLetter.toUpperCase();

// var capitalisedName = firstNameLetter + restofNameLetter;



// alert ("Hello, " + capitalisedName)



var name = prompt("What is your name");

var spaceIndex = name.indexOf(" ");
var firstName = name.slice(0, spaceIndex);
var lastName = name.slice(spaceIndex + 1);

var formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
var formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

var formattedName = formattedFirstName + " " + formattedLastName;

alert("Hello, " + formattedName);

