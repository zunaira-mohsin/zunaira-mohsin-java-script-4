//CHAPTER NO 09-10;
//QUESTION NO 01;
let city = prompt("enter your city");
if (city ==="karachi"){
alert("Welcome to city of lights");
}
//QUESTION NO 02;
let gender = prompt("enter your gender(male/female):")
if (gender==="male"){
    alert("Good morning sir")
}else if (gender==="female"){
    alert("Good morning ma'am")
}
//QUESTION NO 03;
let color=prompt("enter traffic signal color Red/yellow/Green");
color = color.toLowerCase();
if (color==="red"){
    alert("Must Stop")
}
if (color==="yellow"){
    alert("Ready to move")
}
if (color==="green"){
    alert("Move now")
}
//QUESTION NO 04;
let fuel=prompt("enter your remaining fuel in car (in litres)") 
if (fuel<0.25){
    alert("Please refill the fuel in your car")
}
//QUESTION NO 05;
// part=a;
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//alert display is show
//part=b;
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//alert display is not show
//part=c;
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
//alert display is  not show

if (c === 13){
alert("condition 2 is true");
}
//alert display is show
if (++c < 14){
alert("condition 3 is true");
}
//alert display is not show
if(c === 14){
alert("condition 4 is true");
}
//alert display is show
//part=d;
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//alert display is show
//part=e;
 if (true){
alert("True");
}
//alert display is show true
if (false){
alert("False");
}
//alert display is not show
//part=f;
 if("car" < "cat"){
alert("car is smaller than cat");
}
//alert display is show
//QUESTION NO 06;
let English =prompt("enter mark for english");
let Urdu =prompt("enter mark for urdu");
let Math =prompt("enter mark for math");
let totalmark = +prompt("enter total mark");
let Obtainedmark=English+Urdu+Math;
let percentage=(Obtainedmark/totalmark)*100;
if (percentage>80){
    grade= "A-one";
    remark="Excellent"
}else
    if (percentage>70){
    grade= "A";
    remark="Good"
}else
    if (percentage>60){
    grade= "B";
    remark="You need to improve"
}else{
    grade="Fail";
    remark="Sorry"
}
document.writeln("<h3>Mark Sheet</h3>");
document.writeln("Total marks : "+totalmark+"<br>");
document.writeln("Mark Obtained : "+Obtainedmark+"<br>");
document.writeln("Percentage : "+percentage+"%"+"<br>");
document.writeln("Grade :"+grade+"<br>");
document.writeln("Remarks :"+remark+"<br>");
//QUESTION NO 07;
let guess =+prompt("enter guess the secret number (1 to 10)")
let secretNumber = 6
if(guess===secretNumber){
alert("Bingo! Correct answer")
}else{
    if(guess===secretNumber+1)
        alert("Close enough to the correct answer")
}
//QUESTION NO 08;
let number = prompt("enter a number to check if it's divisible by 3");
if (number % 3===0){
alert("This number is divisible by 3.")
}else{
alert("This number is not divisible by 3.")
}
//QUESTION NO 09;
let Number =prompt("enter a number");
if (Number % 2===0){
    alert("This number is even")
}else{
    alert("This number is odd")
}
//QUESTION NO 10;
let temperature =prompt("enter the temperature");
if(temperature>=40){
    alert("It is too hot outside")
}else
    if(temperature>=30){
        alert("The weather today is normal")
}else
if(temperature>=20){
    alert("Today's weather is cool")
}else
    if(temperature>=10){
        alert("OMG! today's weather is a cool")
    }
//QUESTION NO 11;
let number1 =+prompt("enter first number")
let operation =prompt("enter operates"+"+,-,*,/,%")
let number2 =+prompt("enter second number")
    if ( operation==="+"){
  result=number1+number2
    }else
    if (operation==="*"){
        result=number1*number2
    }else
    if(operation==="/"){
       result=number1/number2
    }else
    if(operation==="%"){
        result=number1%number2
    }else
    if(operation==="-"){
        result=number1-number2
    }
    alert("Result :" +result)

    //end









