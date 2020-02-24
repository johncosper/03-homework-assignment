var btn = document.querySelector("#generateBtn");

btn.addEventListener("click", function() {
    alert("Hello and welcome to the Random Password Generator 9000!");
    
    alert("Please answer the following questions to set the criteria for your new password!");
    
    var pwlength = prompt("How long would you like your Password?", "between 8-128 characters");
       
        if (pwlength == null || pwlength < 8) {
            alert("Sorry, your password needs to be between 8 and 128 characters!");
        }
        else {
            alert("Great we will make your password " + pwlength + " characters long!");
        }
        while (pwlength < 8) {
            var pwlength = prompt("How long would you like your Password?", "between 8-128 characters");
        }
    
    var spechar = confirm("Would you like to include special characters in your password?");

        if (spechar == true) {
            alert("Okay! We'll include special characters!");
        }
        else {
            alert("Okay! We won't include any special characters!");
        }
    
    var numbers = confirm("Would you like to include numbers in your password?");

        if (numbers == true) {
            alert("Okay! We'll include numbers!");
        }
        else {
            alert("Okay! We won't include any numbers!");
        }

    var uppercase = confirm("Would you like to include uppercase letters in your password?");

        if (uppercase == true) {
            alert("Okay! We'll include uppercase letters!");
        }
        else {
            alert("Okay! We won't include any uppercase letters!");
        }
    
    alert("Are you ready for your brand new password? Because here it comes!")

        
});

