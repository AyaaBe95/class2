'use strict';
var userScore = 0;

function name1() {
    var userInput = prompt("Enter your name");
    alert("Welcome " + userInput + " to my gusseing game");
    var userInput1 = prompt("How are you feeling today [good / great / fine / not good ]? " + userInput);

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
}
name1();


function firstQuestion() {
    var userInput = prompt("Do I love reading ? answer (yes/no or y/n) ");
    userInput = userInput.toLocaleLowerCase();
    if (userInput === "yes" || userInput === "y") {
        alert("Great! you are right");
        userScore += 1;
    }
    else if (userInput === "no" || userInput === "n") {
        alert("Wrong answer,I love reading");
    }
    else {
        alert('Please answer with y/n or yes/no');

    }
}
firstQuestion();


function secondQuestion() {
    var userInput = prompt("Do I love programming ? answer (yes/no or y/n) ")
    userInput = userInput.toLocaleLowerCase();
    if (userInput == "yes" || userInput == "y") {
        alert("Great! you are right")
        userScore += 1;
    }
    else if (userInput == "no" || userInput == "n") {
        alert("Oops!, Wrong answer")
    }
    else {
        alert('Please answer with y/n or yes/no')
    }

}
secondQuestion();

function thirdQuestion() {

    var userInput = prompt("Am I a girl ? answer (yes/no or y/n) ")
    userInput = userInput.toLocaleLowerCase();
    if (userInput == "yes" || userInput == "y") {
        alert("Exactly,I`m a girl");
        userScore += 1;
    }
    else if (userInput == "no" || userInput == "n") {
        alert("Oops!, Wrong answer")
    }
    else {
        alert('Please answer with y/n or yes/no')
    }

}

thirdQuestion();

function forthQuestion() {
    var userInput = prompt("Did I graduated in 2017 ? answer (yes/no or y/n) ")
    userInput = userInput.toLocaleLowerCase();
    if (userInput == "yes" || userInput == "y") {
        alert("Wrong answer")
    }
    else if (userInput == "no" || userInput == "n") {
        alert("You are right!,I graduated in 2018")
        userScore += 1;
    }
    else {
        alert('Please answer with y/n or yes/no')
    }

}
forthQuestion();

function fifthQuestion() {
    var userInput = prompt("Do I want to take the master degree ? answer (yes/no or y/n) ")
    userInput = userInput.toLocaleLowerCase();
    if (userInput == "yes" || userInput == "y") {
        alert("Great! you are right");
        userScore += 1;

    }
    else if (userInput == "no" || userInput == "n") {
        alert("Wrong answer,I want to complete postgraduate studies");
    }
    else {
        alert("Please answer with y/n or yes/no");
    }
}
fifthQuestion();



function sixthQuestion() {
    var correctAnswer = 11;
    for (let i = 0; i < 4; i++) {
        var userInput = parseInt(prompt('Try to guess a number between 1-20: you have 4 attempts '));
        if (userInput > correctAnswer) {

            alert('Too High');
        } else if (userInput < correctAnswer) {

            alert('Too low');
        } else if (userInput == correctAnswer) {

            alert("That's Correct");
            userScore += 1;
            break;
        }
    }


    alert('The correct answer is: ' + correctAnswer);
}

sixthQuestion();

function seventhQuestion() {
    var correctAnswer = [1, 2, 3, 5, 7, 9];
    var countAttempt = 0
    var continue1 = true
    while (countAttempt < 6 && continue1) {
        var userInput = parseInt(prompt('Try to guess primary number less than 20 ,you have only 6 attempts'));
        for (let i =0; i< correctAnswer.length; i++){
            
                if (userInput == correctAnswer[i]) {
                    alert("That's  Correct");
                    continue1=false;
                    userScore += 1;
                    break;
                }

            }
            alert('The correct answers are: ' + correctAnswer);
            countAttempt++

        
    }//end while
   

    alert('you final score is: ' + userScore);

}//end fon

seventhQuestion();

function bye() {

    var userInput9 = confirm("DONE,Have a nice day!");
    if (userInput9) {
        alert('Bye :)');
    } else {
        alert('ok ');
    }
}
bye()