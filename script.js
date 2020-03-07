alert('Welcome to the Password Generator 9000!');
alert('Answer these prompts to select the criteria for your new password!');

var newPassword = document.getElementById('new-password')
var lengthCase = prompt('How long would you like your password? (8 - 128)');
var uprCase = prompt('Would you like to include uppercase letters? (yes or no)');
var symCase = prompt('Would you like to include special characters? (yes or no)');
var numCase = prompt('Would you like to include numbers? (yes or no)');

generate()

var passwordLength = lengthCase;
var lwrValues = 'abcdefghijklmnopqrstuvwxyz'
var uprValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numValues = '0123456789'
var symValues = '~!@#$%^&*()_+'

function generate (e) {
    var characters = lwrValues;
    (uprCase == 'yes') ? characters += uprValues: '';
    (numCase == 'yes') ? characters += numValues: '';
    (symCase == 'yes') ? characters += symValues: '';
    newPassword.value = password(passwordLength, characters);
}



function password(l, characters) {
    var genPassword = ''
    for (var i = 0; i < l; i++) {
        genPassword += characters.charAt(Math.floor(Math.random() * passwordLength));
    }
    console.log(genPassword);
}


