// FINDING PANAGRAM - sentence containing all alphabets from a to z

alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var z =document.getElementById("pan");

function check(){
   
     for(var i=0;i<alpha.length;i++)
     {
         if(!z.value.match(alpha[i]))
         {console.log("NOT A PANAGRAM");
         break;
         }
         else 
         console.log("PANAGRAM");
     }
    

}