//	SDI Project 4
//	Corey Hobbs	
//	SDI January 2012

//	Library
// I got a lot of help from stackoverflow.com and w3schools.com//

//Uppercase the first letter of each word.//
var txt = "text here";
txt = txt.toLowerCase().replace(/\b[a-z]/g, function(letter) {
	return letter.toUpperCase();
});
console.log(txt);


//Format a number to use a specific number of decimal places.//
var num = 2.1
var result = num.toFixed(2);
	alert(result);



//Does a string follow an email address pattern?//	
function verifyEmail(){
var eMail = false;     
var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (document.myform.email.value.search(email) == -1) {
          alert("Please enter a valid email address.");
}
    else {
          alert("Your email address is valid.");
          status = true;
     }
    return status;
};



//Does a string follow a phone number pattern?//
function validateUsPhone( strValue ) {
var number = /^\([1-9]\d{2}\)\s?\d{3}\-\d{4}$/;
	if (number = true) {
		alert("valid phone number");
}
	else {
		alert("invalid number");
}
};


// Find the total value of numbers in array, even if some of the items are not numbers.//
var array = ['a',1,'b',2,'c',3,'d',4];
var sum = 0;
	for (var i=0; i<array.length; i++) {
  if (!isNaN(parseInt(array[i]))) { sum += array[i]; }
}
		alert(sum);



//Return a string value of a number as an actual number.//		
var number = "42";
var sum = parseInt(number);
parseInt(number);
		alert(sum);
	