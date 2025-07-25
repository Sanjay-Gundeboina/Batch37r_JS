let questions=[
    {
        question:"what is the capital of india?",
        options:["delhi","hyderabad","jaipur","kolkotta"],
        correct:"delhi"
    },
    {
        question:"what is fullform of js?",
        options:["java","javascript","javadabJK","javasmart"],
        correct:"javascript"
    },
    {
        question:"what is css?",
        options:["style","cascading style sheets","jaipur","kolkotta"],
        correct:"cascading style sheetsi"
    }
]


let instructioncontainer=document.getElementById("instruction-container");
let questioncontainer=document.getElementById("question-container");
let quizovercontainer=document.getElementById("quizover-conatiner");
let btn=document.getElementById("btn");
let quest=document.getElementById("quest");
let opt=document.getElementsByClassName("opt-btn");
let time=document.getElementById("time");
let marks=document.getElementById("marks");
let questionNo=-1;
let points=0;

let sec=59;
let min=9;
let is_time_running=false

instructioncontainer.style.display="block";
questioncontainer.style.display="none";
quizovercontainer.style.display="none";


let timer=()=>{
    let stop=setInterval(() => {
        sec--;
        if(sec==0){
            min--;
            sec=59;
        }
      
        if(min==-1){
            min=0
            sec=0
            clearInterval(stop)
            instructioncontainer.style.display="none";
            questioncontainer.style.display="none";
            quizovercontainer.style.display="block";
        }
        time.textContent=`${min}:${sec}`
    },1000);
}




btn.onclick=()=>{
//    console.log("btn")
    if(is_time_running){
        timer()
        is_time_running=False
    }
    questionNo++;
    if (questionNo==questions.length){
        instructioncontainer.style.display="none";
        questioncontainer.style.display="none";
        quizovercontainer.style.display="block";
        return
    }
    instructioncontainer.style.display="none";
    questioncontainer.style.display="block";
    quizovercontainer.style.display="none";
    btn.textContent="Next";
    quest.textContent=questions[questionNo].question;
    for(let i=0;i<4;i++){
         opt[i].textContent=questions[questionNo].options[i]
         opt[i].style.backgroundColor="grey";
    }

}

for(let i=0;i<4;i++){
    opt[i].onclick=()=>{
        // console.log(opt[i].textContent==questions[questionNo].correct)
        if(opt[i].textContent==questions[questionNo].correct){
        opt[i].style.backgroundColor="green";
        points++;
        marks.textContent="marks:"+points
        }
        else{
            opt[i].style.backgroundColor="red";
            points--;
            marks.textContent="marks:"+points
            for(let j=0;j<4;j++){
                if(questions[questionNo].options[j]== questions[questionNo].correct){
                    opt[j].style.backgroundColor="green"
                }
            }
        }
    }
}
