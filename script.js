alert('Welcome to the Password Generator 9000!');
alert('Answer these prompts to select the criteria for your new password!');

var lengthCase = prompt('How long would you like your password? (8 - 128)');
var uprCase = prompt('Would you like to include uppercase letters? (yes or no)');
var specCase = prompt('Would you like to include special characters? (yes or no)');
var numCase = prompt('Would you like to include numbers? (yes or no)');

let passwordLength = lengthCase.value;
let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
let genPassword = '';

for(var i = 0; i <= passwordLength; i++) {
    genPassword = genPassword + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
}