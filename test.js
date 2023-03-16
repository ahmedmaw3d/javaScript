var x = 1;

function tastParent(){

   "use strict";

    var x = 5;

    function testChild(){

      var Calc = x + 2;

      console.log(Calc);

    }
    return testChild();
}

tastParent();

console.log(x + 2);

/*function changeX1(){

  "use strict";

    var x = 1;

}
function ChangeXTo2(){

  "use strict";

     x = 2;

}
function changeXTo3(){

  "use strict";

    var x = 3;

}
   console.log(x);

   ChangeXTo2();

   console.log(x);

   changeXTo3();

   console.log(x);*/

/*var season = prompt("whats the Bast Season for you")

switch(season){

case "Winter":

  alert("winter Is Too Cold");

   break;

case "Summer":

  alert("Summer the too Hot");

   break;

case "Autumn":

  alert("Autumn the too Good");

   break;

case "Spring":

  alert("Spring the Amazing");

   break;

default:

   alert("you didnt Eeter A season Name");

   break;
}*/

/*function convertUsdToRiyal() {

  "use strict";

  var amount = document.getElementById("dollar").value,

      result = amount * 3.75,

      test = document.getElementById("test");

    if(amount === ""){

      test.innerHTML ="this field Is Empty"
    }
    else if(isNaN(amount)){

      test.innerHTML ="this field Accept Number Only";

    }
    else if(amount === "0"){

      test.innerHTML ="the Value Must Not By 0";
    }
    else if(amount < 0){

      test.innerHTML ="the Value Must Not By Nagative Number";

    }
    else{

      test.innerHTML = amount + " dollar Is worth " +  result + " Riyal";

    }
}*/

/*function convertUsdToRiyal() {

  "use strict";

  var amount = document.getElementById("dollar").value,

      result = amount * 3.75;

    document.getElementById("test").innerHTML = 

    amount + " dollar Is worth " +  result + " Riyal";
}*/

/*function calcNumber(a , b , c){
    "ues strict";

    return a + b + c;
  
}
document.getElementById("test").innerHTML = calcNumber(10,350,20);*/

/*function calcDays(age){
  "ues strict";

  var yeas = 365;

  return yeas * age;
}
var dynamicAge = calcDays (prompt("whats your Age ?"));

document.getElementById("test").innerHTML = dynamicAge;*/

/*function sayHello(firstName,middleName,lastName){
    "use strict";

    return "Hello " + firstName + " " + middleName + " "+ lastName + " How are you today ";
}

document.getElementById("test").innerHTML = sayHello("Malik","Ahmed","Mawed");*/

/*function myAgeInhours(){

  var myAge = 28;

  return myAge * 365 * 24;
}
var hoursCalc = myAgeInhours();

document.getElementById("test").innerHTML = "your Age In day = " + hoursCalc +"days";*/

/*function myInfo(){

  var myName = "Ahmed",

      myAge = 28;

      return myName;
}
var myFunction = myInfo();

document.getElementById("test").innerHTML = myFunction;*/

/*function seyHi(){
  
    "use Strict";
    var myName = "Ahmed";

    if(myName==="Ahmed"){

        alert("Hello " + myName +" you are wolcome ");
    }else{

      alert("Hello " + myName +" you are not wolcome ");
    }
}*/

/*var Name = "Ahmed",

    age = 28,

    address = "Kus";


if(Name === "ahmed" || age === 28 || address === "Kus"){

  alert("Good");

}else{

  alert("Bad");

}*/

/*var myPrice = 50;

 if(myPrice == 60)
 {
   alert("Good");
 }
 else
 {
   alert("Bad");
 }*/
/*var person ={firstName:"Ahmed",lastName:"mawed",gender:"m",age:"28"};

   document.getElementById("test").innerHTML=
    
    "my firstName Is: " + person.firstName + "<br>" +
    
    "my LastName Is: " +person.lastName+ "<br>" +
    
    "gender Is: " + person.gender+ "<br>" +
    
    "Age Is: " + person.age;*/

/*var x = 100;

   document.getElementById("test").innerHTML +="100 <br>";

   document.getElementById("test").innerHTML +="100<br>";

   document.getElementById("test").innerHTML +="100<br>";

   document.getElementById("test").innerHTML +="100";*/
