'use strict';

var userInput = prompt("Enter your name")
alert("Welcome " + userInput + " to my gusseing game")
<<<<<<< HEAD
//console.log(userInput)

var userInput1 = prompt("How are you feeling today? " + userInput);

switch (userInput1) {

=======


var userInput1 = prompt("How are you feeling today? " + userInput);

switch (userInput1) {

>>>>>>> a3ab50784ecbd85b282343849796754aaa151ebf
    case 'good':
    case 'great':
    case 'fine':
        alert('Okay thats great');
        break;
    case 'not good':
        alert('Its okay :( it will get better :)');
        break;
}

function firstQuestion() {
    var userScore = 0;
    var userInput2 = prompt("Do I love reading ? answer (yes/no or y/n) ")
    userInput2=userInput2.toLocaleLowerCase();
    if (userInput2 === "yes" || userInput2 === "y") {
        alert("Great! you are right")
        userScore += 1;
    }
    else if (userInput2 === "no" || userInput2 === "n") {
        alert("Wrong answer,I love reading")
    }
    else {
        alert('Please answer with y/n or yes/no')

    }
    return userScore;

}
firstQuestion();


function secondQuestion() {
    var userScore = 0;
    var userInput3 = prompt("Do I love programming ? answer (yes/no or y/n) ")
    userInput3=userInput3.toLocaleLowerCase();
    if (userInput3 == "yes" || userInput3 == "y") {
        alert("Great! you are right")
        userScore += 1;
    }
    else if (userInput3 == "no" || userInput3 == "n") {
        alert("Oops!, Wrong answer")
    }
    else {
        alert('Please answer with y/n or yes/no')
    }
    return userScore;

}
secondQuestion();

function thirdQuestion() {
    var userScore = 0;
    var userInput4 = prompt("Am I a girl ? answer (yes/no or y/n) ")
    userInput4=userInput4.toLocaleLowerCase();
    if (userInput4 == "yes" || userInput4 == "y") {
        alert("Exactly,I`m a girl");
        userScore += 1;
    }
    else if (userInput4 == "no" || userInput4 == "n") {
        alert("Oops!, Wrong answer")
    }
    else {
        alert('Please answer with y/n or yes/no')
    }
    return userScore;

}

<<<<<<< HEAD

=======
>>>>>>> a3ab50784ecbd85b282343849796754aaa151ebf
thirdQuestion();

function forthQuestion() {
    var userScore = 0;
    var userInput5 = prompt("Did I graduated in 2017 ? answer (yes/no or y/n) ")
    userInput5=userInput5.toLocaleLowerCase();
    if (userInput5 == "yes" || userInput5== "y") {
        alert("Wrong answer")
    }
    else if (userInput5 == "no" || userInput5 == "n") {
        alert("You are right!,I graduated in 2018")
        userScore += 1;
    }
    else {
        alert('Please answer with y/n or yes/no')
    }
    return userScore;

}
forthQuestion();

function fifthQuestion() {
    var userScore = 0;
    var userInput6 = prompt("Do I want to take the master degree ? answer (yes/no or y/n) ")
    userInput6=userInput6.toLocaleLowerCase();
    if (userInput6 == "yes" || userInput6 == "y") {
        alert("Great! you are right");
        userScore += 1;

    }
    else if (userInput6 == "no" || userInput6 == "n") {
        alert("Wrong answer,I want to complete postgraduate studies");
    }
    else {
        alert("Please answer with y/n or yes/no");
    }
    return userScore;
}
fifthQuestion();



function sixthQuestion() {
    var correctAnswer = 11;
    var userScore = 0;
    for (let i = 0; i < 4; i++) {
        var userInput7 = parseInt(prompt('Try to guess a number from 1 to 20: you have 4 attempts '));
        if (userInput7 > correctAnswer) {

            alert('Too High');
        } else if (userInput7 < correctAnswer) {

            alert('Too low');
        } else if (userInput7 == correctAnswer) {
<<<<<<< HEAD

            alert("That's Correct");
            userScore += 1;
            break;
        }
    }

=======

            alert("That's Correct");
            userScore += 1;
            break;
        }
    }

>>>>>>> a3ab50784ecbd85b282343849796754aaa151ebf
    alert('The correct answer is: ' + correctAnswer);
    return userScore;
}
sixthQuestion();

function seventhQuestion() {
    var userScore = 0;
    var correctAnswer = [25, 30, 60, 70, 13, 18, 98, 78, 35, 47];
    for (let i = 0; i < 6; i++) {
        var userInput8 = parseInt(prompt('Try to guess a number from 0 to 100,you have only 6 attempts'));

        for (let j = 0; j < correctAnswer.length; j++) {
<<<<<<< HEAD
            if (userInput8 == correctAns[j]) {
=======
            if (userInput8 == correctAnswer[j]) {
>>>>>>> a3ab50784ecbd85b282343849796754aaa151ebf
                
                alert("That's  Correct");
                userScore += 1;
            }
        }
    }

    alert('The correct answers are: ' + correctAnswer);
    return userScore;

}
alert('you final score is: ' + (firstQuestion() + secondQuestion() + thirdQuestion() + forthQuestion() + fifthQuestion() + sixthQuestion() + seventhQuestion()));

<<<<<<< HEAD

seventhQuestion();
=======
seventhQuestion();

var userInput9 = confirm("DONE,Have a nice day!");
 if(userInput9){
     alert('Bye :)');
 } else {
     alert('ok ');
 }
>>>>>>> a3ab50784ecbd85b282343849796754aaa151ebf

