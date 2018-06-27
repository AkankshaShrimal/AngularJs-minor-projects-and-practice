angular.module("routing",["ngRoute"])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)
.factory("data",data)
.config(config)

function config($routeProvider)
{
    $routeProvider
    .when("/",{templateUrl : "views/home.html"})
    .when("/profile",{templateUrl : "views/profile.html"})
    .otherwise({redirectTo : "/home"})
}


function data()
{
    return {};
}
function secondCtrl(data)
{
    var second = this;
    // data['name'] = "aaku";
    second.person = data;
   

}
function firstCtrl(data)
{
    var first = this;
    first.person = data;


}