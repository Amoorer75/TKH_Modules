
//https://codepen.io/amoorer75/pen/NWjOaWE


let Name = ["Westly Snipes", "Nicholas Cage", "Nasir Jones","Sean Carter", "Sean Combs", "Michael Jordan",
"Patrick Ewing"];

var first_name = []
var last_name = []

for(i = 0; i < Name.length; i++){
      
     

        if (Name[i]){
            
            
            first_name = Name[i].split(" ").slice(0,-1).join(" ");
    

            console.log("First name: " +first_name)
        }
        if (Name[i]){
            
            
            last_name = Name[i].split(" ").slice(-1).join(" ");
    

            console.log("LastName: " +last_name)
        }


       

};

