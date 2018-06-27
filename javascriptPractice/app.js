// COMPARING DIFFERENT LETTERS IN TWO WORDS


function compare(){

var ele = document.getElementById("dna1");
var ele2 = document.getElementById("dna2");
arr1 = ele.value.split("");
arr2 = ele2.value.split("");


var i = 0;
var j = 0;
var count = 0;
while( i<arr1.length || j<arr2.length)
{
    if( arr1[i]!=undefined && arr2[j]!=undefined && arr1[i]!=arr2[j])
    count++;
    
 
    if(!arr1[i])
    {
         
        while(j<arr2.length)
        {
            
        count++; j++;
        }
    break;
}
     if(!arr2[j])
    {
         
        while(i<arr1.length)
        {
            
        count++; i++;
        }
    break;
}
    i++;
    j++;
}
console.log("answer is "+ " " + count);




}