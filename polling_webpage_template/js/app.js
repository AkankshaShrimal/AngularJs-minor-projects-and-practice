angular.module("web",["ngRoute"])

.config(configs)
.controller("pollingCtrl",pollingCtrl)

function configs($routeProvider)
{
    $routeProvider
    .when("/",{templateUrl : "hello.html"})
    .when("/h",{template : "<h1>hello</h1>"})
    
    .otherwise({redirectTo : "/"})
    
}

function pollingCtrl()
{
    var poll = this;
}




