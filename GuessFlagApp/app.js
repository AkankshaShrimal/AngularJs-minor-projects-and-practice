angular.module("flagApp",[])
.controller("flagCtrl",flagCtrl);

function flagCtrl()
{
    var flag = this;
    
    flag.call = call;
    flag.give_options = false;
    flag.temp = 0;
    flag.option = option;
    var count = 0;
   
    flag.getFlag = false;

    flag.putting = function(t){
                                    
                                    if(!flag.nation)
                                        flag.nation = t;
                                }
    
    
    function call(){
                    flag.getFlag = true;
                    flag.nation ="";
                    flag.give_options = false;
                    count = 0;
                    var r = Math.floor(Math.random()*flag_alpha.length);
                    var randomNation = flag_alpha[r];
                    flag.alpha  =    randomNation["alpha-2"].toLowerCase();
                    flag.nationName = randomNation["name"].toLowerCase();
    
                    console.log(r,randomNation,flag.alpha,randomNation["name"].toLowerCase());
                    }

    

     function option()
    {
            count++;
            if(count == 1)
            {
            flag.temp = 1;
            flag.give_options = true;
            
            var x = Math.floor(Math.random()*flag_alpha.length);  
             var y= Math.floor(Math.random()*flag_alpha.length); 
            var z = Math.floor(Math.random()*flag_alpha.length);
            flag.option1 =     flag_alpha[x].name.toLowerCase();
            flag.option2 =     flag_alpha[y].name.toLowerCase();
            flag.option3 =     flag_alpha[z].name.toLowerCase();
            console.log(x,y,z,flag.option1,flag.option2,flag.option3);
            } 
}


}