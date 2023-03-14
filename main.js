
/* if else if
var yourAge = prompt("whats your Age");

if(yourAge < 18){
    
    document.getElementById("test").innerHTML =
        
        "sorry your Age Is " + yourAge +" you are Not Allowed Here";
}else{
    
    document.getElementById("test").innerHTML =
        
        "Hello your Age Is " + yourAge +" you are Wolcome Here";
}
var ticketPrice = 3000;

if( ticketPrice < 1500){
    
    console.log("yes Its cheap");
    
}else if(ticketPrice ==2000){
    
    console.log("yes Its Good price");
}else{
    
    console.log("No Its Expensive");
    
}*/
//---------------------------------------------
/*Operators
var z = 23 % 2;

document.getElementById("test").innerHTML = z;*/
//----------------------------------------------
/*Output Data 
var myName = "Ahmed",
    
    myAge = 28,
        
    myDiv = document.getElementById("test");
alert( "Hello my Name Is " + myName + " And my Age Is " + myAge);

document.write("Hello my Name Is " + myName + " And my Age Is " + myAge);

myDiv.innerHTML = "Hello my Name Is " + myName + " And my Age Is " + myAge;

console.log("Hello my Name Is " + myName + " And my Age Is " + myAge);*/
//-------------------------------------
/* concatenation
var myName = "Ahmed",
    
    myAge = 28,
    
    myCountry = "Egypt";

document.getElementById("test").innerHTML = 
    
    "My Name Is: " + myName + "<br>" +
    
    "And myAge Is: " + myAge + "<br>" +
    
    "myCountry Is: " + myCountry;*/
//-------------------------------------------    
/* number
var myAge; //= 32 + 10;

document.getElementById("test").innerHTML = myAge;*/
//----------------------------------------
/* string
var myName = "Malik Ahmed \"look\"";

document.getElementById("test").innerHTML = myName;*/
//----------------------------------------------
/*Odject
var myInfo = {firstName:"Ahmed",lastName:"Malik"};

document.getElementById("test").innerHTML = myInfo.lastName;*/

//----------------------------------------------
/* Arryay
var socialWebsites = ["facebook.com","youtube.com","google.com"];

document.getElementById("test").innerHTML = socialWebsites;*/
//--------------------------------------------
/* Boolean
var hasDiscount = false;

if(hasDiscount === true){
    
    var mainPrice =350;
    
}else {
    
    var mainPrice = 450;
}

document.getElementById("test").innerHTML = mainPrice; */
//------------------------------------------------------
/*
mySmallDiscount = 50,
    
myMediumDiscount = 100,
    
myBigDiscount = 250;   

    //myNewPrice = 900,

   // myDiscount = myOldPrice - myNewPrice + 500;

document.getElementById("price").innerHTML=mainPrice;

document.getElementById("product1").innerHTML=mainPrice - mySmallDiscount;

document.getElementById("product2").innerHTML=mainPrice - myMediumDiscount;

document.getElementById("product3").innerHTML=mainPrice - myBigDiscount;*/