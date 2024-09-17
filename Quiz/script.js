const quizData=[
    {
        question:"What does HTML stands for?",
        options:[
            "HyperText Markup Language",
            "HyperText Machine Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correct:0,
    },
    {
        question:"Which CSS property is used to control the space between the elements?",
        options:[
            "Margin",
            "Padding",
            "Spacing",
            "Border-Spacing"
        ],
        correct:0,
    },
    {
        question:"What is the javascript function used to select the HTML element by its id?",
        options:[
            "getElementsByClassName",
            "querySelector",
            "findElementById",
            "getElementById"
        ],
        correct:3,
    },
    {
        question:"Which one of these is higher order loop?",
        options:[
            "For Loop",
            "Do While Loop",
            "While Loop",
            "For of Loop"
        ],
        correct:3,
    },
    {
        question:"Which HTML tag is used to create the ordered list?",
        options:[
            "li",
            "ul",
            "ol",
            "lo"
        ],
        correct:2,
    },
    {
        question:"Who developed and designed TypeScript?",
        options:[
            "Microsoft",
            "TypeScript",
            "Amazon",
            "Google"
        ],
        correct:0,
    },
    {
        question:"JavaScript File Has An Extension of:",
        options:[
            ".JavaScript",
            ".js",
            ".Java",
            ".xml"
        ],
        correct:1,
    },
    {
        question:"Which statement cannot be used to declare a variable in JavaScript?",
        options:[
            "let",
            "var",
            "const",
            "int"
        ],
        correct:3,
    },
    {
        question:"Given x = new Date(), how do you represent x as a String in universal time (time zone +0000)?",
        options:[
            "X.getUTC();",
            "x.getUTCDate()",
            "x.toUTCString",
            "x.getUTCString"
        ],
        correct:2,
    },
    
    {
        question:"Given the following, what is the value of x? var x = typeof 'abc' ",
        options:[
            "abc",
            "string",
            "undefined",
            "error"
        ],
        correct:1,
    }
];
//step two
const answerElm=document.querySelectorAll('.answer');
const [questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll('.question','#option_1','#option_2','#option_3','#option_4');
const btn=document.querySelector("#submit");
let currentQuiz=0;
let message=document.querySelector('.Message');
// message.innerHTML='';
const quiz=document.querySelector('.quiz')
let score=0;
// console.log(questionElm)
//Step three
const loadQuiz= ()=>{
    const { question,options}=quizData[currentQuiz];
    questionElm.innerText=`${currentQuiz+1}.${question}`;
    
    options.forEach((currOpt,Index)=>(
        window[`option_${Index+1}`].innerText=currOpt
    )
    );
    
};
loadQuiz();
//step four
const getCheckedOption = ()=>{
   let ans_Index=undefined;
    answerElm.forEach((currOpt,Index)=>{
          if(currOpt.checked){
            ans_Index=Index;
            
          }
          
    });
    return ans_Index;
}
// let answerElement=Array.from(answerElm);
//  return answerElement.findIndex((currElm)=>{currElm.checked});
// }
const deSelectedAnswer=()=>{
 return answerElm.forEach((currOpt)=>{
    currOpt.checked =false
});

}
btn.addEventListener('click',(e)=>{

            const selectedOptionIndex=getCheckedOption();

            answerElm.forEach((opt)=>{
if(opt.checked){
    if(selectedOptionIndex ===quizData[currentQuiz].correct){
        score=score+1;
    }
    currentQuiz++;
    if(currentQuiz<quizData.length){
        
        deSelectedAnswer();
        loadQuiz();
        
    }
    else{
        quiz.innerHTML=`<div class="result">
        <h2>🏆Your Score:${score}/${quizData.length} Correct Answer </h2>
        <P>Congratulation on completing the quiz!🎉</P>
        <button class='reload-button' onclick="location.reload()">Play Again 🔄️</button>
        </div>`
        ;
    }
}
else{
    if(selectedOptionIndex ===undefined){
        message.innerHTML='Please select an Option before submitting !'
        message.style.backgroundColor='#d9d9d9';
        message.style.border='1px solid black'
    }else{
        message.innerHTML='';
        message.style.backgroundColor='';
        message.style.border='none'
    }
}
            })
           
}
    );
