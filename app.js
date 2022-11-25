

var questionBank= [
    {
        question : 'Who invented the Microsoft company?',
        option : ['Elon Musk','Biligate','Jef Bezos','Steve Jobs'],
        answer : 'Biligate'
    },
    {
        question : 'Who is the richest person in the world?',
        option : ['Elon Musk','Biligate','Jef Bezos','Markzukarberck'],
        answer : 'Elon Musk'
    },
    {
        question : 'How many people in the world?',
        option : ['8 billion','7 billion','6 billion','5 billion'],
        answer : '8 billion'
    },
    {
        question : 'Which year did the world cup start?',
        option : ['1930','1920','1940','1910'],
        answer : '1930'
    },
    {
        question : 'Which country did the world cup start?',
        option : ['England','Uraguay','Germany','France'],
        answer : 'Uraguay'
    },
    {
        question:'which country has own the most world cup?',
        option:["Germany","France","Brazil","Itlay"],
        answer:"Brazil"
    },
    {
        question:'How many countries are participating in the world cup?',
        option:["28","32","26","29"],
        answer:"28"
    },
    {
        question:'Which country started the sport of football?',
        option:["Brazil","England","Germany","France"],
        answer:"England"
    },
    {
        question:"How much money does the world cup winner get?",
        option:["42 million","49 million","50 million","59 million"],
        answer:"42 million"
    } 
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);

}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
next.addEventListener('click',nextQuestion);
function backToQuiz(){
    location.reload();
}

function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();
