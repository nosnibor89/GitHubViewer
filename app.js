(function(){
  
  /** 
  * Note: When route provider or any dependency is needed in the angular app,
  * it's necesary to inject that depency in app declaration, then in config
  * function like this example with ngRoute and $routeProvider
  **/
  
   //App Declaration
  var apiApp = angular.module('apiApp', ["ngRoute"]);
  
  //Configuration
    apiApp.config(function($routeProvider){
      
      //Tell the route what controller and template(view or html) to use
      $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })//the colon(":") is treat as a parameter
        .when("/user/:username", {
          templateUrl: "user.html",
          controller: "UserController"
        })//If a route is not available or unknown, rediret this("/main")
        .when("/user/:username/:reponame", {
          templateUrl: "repo.html",
          controller: "RepoController"
        })
        .otherwise({redirectTo: "/main"});
    });
    
})();