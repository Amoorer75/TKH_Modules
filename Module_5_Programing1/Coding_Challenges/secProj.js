

//https://codepen.io/amoorer75/pen/PomyJqe



let score = 78;
let grade;

if(score > 90){
    
    grade = "A+";

}else if(score > 88 && score <= 90){

    grade = "A";

}else if(score > 84 && score <= 88){
    
    grade = "B+";

}else if(score > 76 && score <= 84){
    
    grade = "C+";

}else if(score > 70 && score <= 76){
    
    grade = "C";

}else if(score > 67 && score <= 70){
    
    grade = "D+";

}else if(score > 64 && score <= 67){
    
    grade = "D";

}else if(score < 64){
    
    grade = "F";

}
console.log(grade)





