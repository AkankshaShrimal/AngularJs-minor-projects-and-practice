// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('whatsapp', {
    url: '/whatsapp',
    
    templateUrl: 'templates/whatsapp.html'
  })

 .state('whatsapp.chats', {
    url: '/chats',
   views: {
      'whatsapp-chats': {
        templateUrl: 'templates/chats.html',
        controller: 'ChatsCtrl'
        
      }
    }
  })
   .state('whatsapp.status', {
    url: '/status',
   views: {
      'whatsapp-status': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

   .state('whatsapp.calls', {
    url: '/calls',
     views: {
      'whatsapp-calls': {
        templateUrl: 'templates/calls.html',
        controller: 'callsCtrl'
      }
    }
  })

  
  $urlRouterProvider.otherwise('/whatsapp/chats');

});


// function chatsCtrl(){}

// function statusCtrl(){}

// function callCtrl() {}
//  .controller("chatsCtrl",chatsCtrl)
// .controller("statusCtrl",statusCtrl)
// .controller("callsCtrl",callsCtrl)



