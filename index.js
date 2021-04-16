var readlineSync= require("readline-sync");
const chalk = require('chalk');
var readName = readlineSync.question("Please Enter your Name: ");

console.log(chalk.blue.bgWhite.bold("Welcome "+readName));
console.log("Lets play Friends Quiz")
score=0;
console.log("Please choose from the option below\n")
function play(question,answer){
  var userAnswer= readlineSync.question(question);
  var actualAnswer= userAnswer.toUpperCase();
  if (actualAnswer === "A"||actualAnswer === "B"||actualAnswer === "C"||actualAnswer === "D"){
    if(actualAnswer === answer){
    console.log(chalk.green("Correct Answer!"));
    score= score+1;
  }
  else{
    console.log(chalk.red("Wrong Answer!"))
    }
  }
  else{
    console.log("Please Enter a Valid OPTION!")
  }
}

var questions= [{
  question: "What is Chandler's Last name?? \n A. Bing \n B. Geller \n C. Buffay\n D. Green\n",
  answer: "A"
},
{
  question: "What is Monica's apartment door color\n A. Orange\n B. Green\n C. Purple\n D. Blue\n",
  answer: "C"
},
{
  question: "How many sisters does Joey have?\n A. 11\n B. 6\n C. 8\n D. 7\n",
  answer: "D"
},
{
  question: "What's the name of the dancer Joey lived with?\n A. Janice\n B. Jenine\n C. Jenny\n D. Jovita\n",
  answer: "B"
},
{
  question: "What’s Phoebe’s sister’s name?\n A. Ursula\n B. Regina\n C. Emily\n D. Emma\n",
  answer: "A"
},
{
  question: "What store does Phoebe hate?\n A. Ikea\n B. PepperFry\n C. Crate and Barrel\n D. Pottery Barn\n",
  answer: "D"
},
{
  question: "What’s the name of Phoebe’s most popular song?\n A. Christmas Song\n B. Scaredy Cats\n C. Smelly Cats\n D. None of the above\n",
  answer: "C"
},
{
  question: "What’s the name of the coffee shop that the friends always go to?\n A. Insomnia Cafe\n B. Central Park\n C. Middle Park\n D. Jurasic Park\n",
  answer: "B"
},
{
  question: "How many Seasons does FRIENDS have?\n A. 8\n B. 7\n C. 9\n D. 10\n",
  answer: "D"
},
{
  question: "What year FRIENDS series started?\n A. 1994\n B. 1995\n C. 1996\n D. 1998\n",
  answer: "A"
}
]

for (var i=0; i<questions.length;i++){
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your score is: "+score)

var highScore=[{
  name: "Varshini",
  score: 9
},
{
  name: "Panchami",
  score: 8
},
{
  name: "Hithesh",
  score: 7
}]
console.log("These are the HighScorers");
for(var i=0;i<highScore.length;i++){
  if(score > highScore[i].score){
    console.log(chalk.blue("\nYou are one of the HighScorer!!"));
    var newHighscore= {name:readName, score:score};
    highScore.splice(i, 0, newHighscore);
    highScore.pop();
    break;
  }
}
for(var i=0;i<highScore.length;i++){
  console.log("Name:",highScore[i].name + ", Score: ", highScore[i].score);
}