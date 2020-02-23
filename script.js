var btn = document.querySelector("#generateBtn");

btn.addEventListener("click", function() {
    alert("Hello and welcome to the Random Password Generator 9000!");
    
    alert("Please answer the following questions to set the criteria for your new password!");
    
    var pwlength = prompt("How long would you like your Password?", "between 8-128 characters");
       
        if (pwlength == null || pwlength < 8) {
            alert("Sorry, your password needs to be between 8 and 128 characters!");
        }
        else {
            alert("Great we will make your password " + pwlength + " characters long!")
        }
    
});

