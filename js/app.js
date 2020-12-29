'use strict';

var userInput = prompt("Enter your name")
alert("Welcome "+ userInput+ " to my gusseing game")
//console.log(userInput)

var userInput1 = prompt("How are you feeling today? "+userInput); 
 
switch (userInput1) { 
    
    case 'good':
    case 'great':
    case 'fine':
        alert('Okay thats great');
        break;
    case 'not good':
        alert('Its okay :( it will get better :)');
        break;
}

    
var userInput2=prompt("Do I love reading ? answer (yes/no or y/n) ")
if (userInput2.toLocaleLowerCase == "yes" || "y" ){
alert("Great! you are right")
}
else{
    alert("Wrong answer,I love reading")
}
//console.log(userInput2)

var userInput3=prompt("Do I love programming ? answer (yes/no or y/n) ")
if (userInput3.toLocaleLowerCase == "yes" || "y" ){
alert("Great! you are right")
}
else{
    alert("Wrong answer,I love programming")
}

var userInput4=prompt("Am I a girl ? answer (yes/no or y/n) ")
if (userInput4.toLocaleLowerCase == "yes" || "y" ){
alert("Exactly,I`m a girl")
}
else{
    alert("Oops!, Wrong answer")
}
//console.log(userInput4)

var userInput5=prompt("Did I graduated in 2017 ? answer (yes/no or y/n) ")
if (userInput5.toLocaleLowerCase == "yes" || "y" ){
alert("Wrong answer,I graduated in 2018")
}
else{
    alert("You're right,I didnt graduated in 2017")
}
//console.log(userInput5)

var userInput6=prompt("Do I want to take the master degree ? answer (yes/no or y/n) ")
if (userInput6.toLocaleLowerCase == "yes" || "y" ){
alert("Great! you are right")
}
else{
    alert("Wrong answer,I want to complete postgraduate studies")
}
//console.log(userInput6)

var userInput7 = confirm("DONE,Have a nice day!); 
 console.log(userInput7);
 if(userInput7){
     alert('Bye :)');
 } else {
     alert('ok ');
 }
//console.log(userInput7)

