
//https://codepen.io/amoorer75/pen/JjNmrbE

let weIncome = parseInt(prompt("Weekly Income"))
let fCost = parseInt(prompt("Food Cost"))
let hCost = parseInt(prompt("Housing Cost"))
let tCost = parseInt(prompt("Transportation Cost"))
let oCost = parseInt(prompt("Other Cost"))
let savAmount= parseInt(prompt("How much you want to save in a year"))

let x = fCost + hCost + tCost + oCost
let y = weIncome - x 
let z = savAmount%52
let w = z - y

 if(y > z){
     
      document.getElementById("compare1").outerHTML = "You are on track" ;
    
 }else{

    document.getElementById("compare1").outerHTML = "You need to save " + w;
 }



document.getElementById("income").outerHTML = "" + weIncome;
document.getElementById("food").outerHTML = "" + fCost;
document.getElementById("housing").outerHTML = "" + hCost;
document.getElementById("transport").outerHTML = "" + tCost;
document.getElementById("other").outerHTML = "" + oCost;
document.getElementById("compare3").outerHTML = "your cost are " + x;
document.getElementById("compare2").outerHTML = "what is left is "+ y;
