angular.module("restapi",[])
.controller("personCtrl",personCtrl)

function personCtrl($http)
{
    // RANDOM USER GENERATOR 
    var person = this;
    var url = "https://randomuser.me/api/";
    var promise = $http.get(url);

    promise.then(function(data)
    {
        console.log(data);
        person.randomUser = data.data.results["0"];
    }).catch(function(err){
        console.log(err);
    });

    //  MARVEL COMICS 
    var baseUrl ="https://gateway.marvel.com";
    var path = "/v1/public/characters"
    

   

     person.gettingHero = function()
                            {
                                var query = "?nameStartsWith="+person.hero+"&apikey=3bb905009db9288a8d33cf09a99766bf"
                                      var p = $http.get(baseUrl+path+query);
                                     p.then(function(d)
                                    {
                                         console.log(d);
                                         person.marvel = d.data.data.results
        
                                    }).catch(function(err){} );


                            }






    

}