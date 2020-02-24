var char = "abcdefghijklmnopqrstuvwxyz";
var upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*()_+";

var charNum = document.getElementById("pwLength");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var uprBox = document.getElementById("uprCase");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

alert("Hello and welcome to the Random Password Generator 9000!");
    
alert("Please answer the following questions to set the criteria for your new password!");

submit.addEventListener("click",function(){
    var characters = char;
    (numBox.checked) ? characters += num : "";
    (symBox.checked) ? characters += sym : "";
    (uprBox.checked) ? characters += upr : "";
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}