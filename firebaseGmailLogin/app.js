angular.module("login",["firebase"])
.controller("firstCtrl",firstCtrl)





function firstCtrl($firebaseAuth)
{
    var first = this;
    var auth = $firebaseAuth();

    var promise = auth.$signInWithPopup("google");
    promise.then(function(result){
        console.log(result);
        first.img = result.user.photoURL;
    }).catch(function(err){
        console.log(err);
    });

}

