
let optionOne = document.getElementById('option1');
let optionTwo = document.getElementById('option2');
let optionThree = document.getElementById('option3');
 let answer=0;
let audio = document.getElementById('beep');
let audio1 = document.getElementById('clap');
optionOne.addEventListener('click', ()=>{
    if(optionOne.innerHTML==answer){
        audio1.play();
    generateEquation();
}else{
  audio.play();  
}
});
optionTwo.addEventListener('click', ()=>{
    if(optionTwo.innerHTML==answer){
        audio1.play();
    generateEquation();
}else{
    audio.play();  
}
});
optionThree.addEventListener('click', ()=>{
    if(optionThree.innerHTML==answer){
        audio1.play();
    generateEquation();
}else{
    audio.play();   
}
});
 function generateEquation(){
var num1=Math.floor(Math.random() *10);
var num2=Math.floor(Math.random() *15);
var dummyAnswer=Math.floor(Math.random() *150);
var dummyAnswerOne=Math.floor(Math.random() *120);
var allAnswers=[];
 answer=num1 * num2;
document.getElementById('num1').innerHTML=num1;
document.getElementById('num2').innerHTML=num2;
allAnswers=[answer, dummyAnswer, dummyAnswerOne];
 const shuffleAnswer=(arr)=>arr.sort(() =>Math.random() -0.5);
 const list=shuffleAnswer(allAnswers); //shuffle the answers
 optionOne.innerHTML=list[0];
 optionTwo.innerHTML=list[1];
 optionThree.innerHTML=list[2];
 }
 window.addEventListener('load', ()=>{
    generateEquation();
 })