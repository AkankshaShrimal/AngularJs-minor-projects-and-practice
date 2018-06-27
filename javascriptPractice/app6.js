//DISPLAYING WATCH 


     function timer(){
     	 var time = new Date();
	document.getElementById("timeDisplay").innerText = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
     }
   
     setInterval(timer,1000)
