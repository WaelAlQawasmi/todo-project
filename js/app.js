var name = prompt("Please enter your name");
var age = prompt("Please enter your age");
var genge = prompt("Please enter your gender  he answer should be either (male or female)");
var genger= genge.toLocaleLowerCase();
if ( Number(age)<=0) {
    alert(" age is less than or equal to zero");
    
}

var welcomw = confirm("do you want to skip welcome massege");
if (welcomw == true) {

} 
else {
if (genger=="male") {alert("welcome Mr "+name);}

else
if (genger=="female") 
alert("welcome Ms "+name);
  else
  {
    alert("welcome "+name);
  } 
    
 
}
//////////new////////
var answer=[question1(),question2(),question3()];
for (let index = 0; index < answer.length; index++) {
  console.log(answer[index]) ;
  
}

function question1() {
  var question=prompt("are you ok?  (yous answer should  be (Yes/No)");
  question=question.toLowerCase();
   while (question !== "yes"&&question !== "no") {
    
     question=prompt("are you ok?  (yous answer should  be (Yes/No) ");
     question=question.toLowerCase();
  console.log(question);  }

return question ;
  
}

function question2() {
  var question=prompt("are you here?  (yous answer should  be (Yes/No)");
  question=question.toLowerCase();
   while (question !== "yes"&&question !== "no") {
    
     question=prompt("are you ok?  (yous answer should  be (Yes/No) ");
     question=question.toLowerCase();
  console.log(question);  }

return question ;
  
}

function question3() {
  var question=prompt("are you right?  (yous answer should  be (Yes/No)");
  question=question.toLowerCase();
   while (question !== "yes"&&question !== "no") {
    
     question=prompt("are you ok?  (yous answer should  be (Yes/No) ");
     question=question.toLowerCase();
  console.log(question);  }

return question ;
  
}