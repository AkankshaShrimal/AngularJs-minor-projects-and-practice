angular.module("flagApp",[])
.controller("flagCtrl",flagCtrl);

function flagCtrl()
{
    var flag = this;
    
    flag.call = call;
   
    function call(){
       
    var r = Math.floor(Math.random()*flag_alpha.length);
    var randomNation = flag_alpha[r];
    flag.alpha  =    randomNation["alpha-2"].toLowerCase();
    flag.nationName = randomNation["name"].toLowerCase();
    
    console.log(r,randomNation,flag.alpha,randomNation["name"].toLowerCase());
    }
    flag.option = option;
    console.log(flag.option());
    flag.temp = 0;
     function option()
    {
    flag.temp = 1;
    
    var x = Math.floor(Math.random()*flag_alpha.length);  
     var y= Math.floor(Math.random()*flag_alpha.length); 
    var z = Math.floor(Math.random()*flag_alpha.length);
    flag.option1 =     flag_alpha[x].name.toLowerCase();
    flag.option2 =     flag_alpha[y].name.toLowerCase();
    flag.option3 =     flag_alpha[z].name.toLowerCase();
    console.log(x,y,z,flag.option1,flag.option2,flag.option3); 
}


}