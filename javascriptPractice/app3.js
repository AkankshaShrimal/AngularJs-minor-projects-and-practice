//GETTING A ACRONYM FOR A SENTENCE 

var x =document.getElementById("acr");


function get(){

 array = x.value.split(" ");
 temp = [];
 var j =0;
 console.log("acronym for this is :" )
 for(var i=0;i<array.length;i++)
 {
    temp[j]=array[i].split("").shift();
   console.log(temp[j]);
    j++;
 }


}