
//https://codepen.io/amoorer75/pen/XWRxebb



var quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, " 
var word = [] 

word = quote.split(" ")


console.log(word)

for(i = 0; i < word.length; i++){

  if(word[i] == "s"){
      
    word[i](0,'s') = word[i](0,'$')

    console.log(word[i])
  }
    

}