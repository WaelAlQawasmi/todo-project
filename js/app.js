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
