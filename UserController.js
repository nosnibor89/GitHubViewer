// Code goes here

(function() {
  //App Dependency Injection
    var apiApp = angular.module('apiApp');

  //Controller
  var UserController = function($scope, github, $routeParams, $location) {

    //Private Method
    var onUserComplete = function(data) {
      $scope.user = data;
      // console.log(data);
      github.getRepos($scope.user)
        .then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
      // console.log(data);
      //Scroll Functionality
      // $location.hash('user-datails');
      // $anchorScroll();
    };
    
    

    var onError = function(reason) {
      $scope.error = "Could not fecth data!";
    };

    

    // $scope.username = "angular";
    $scope.username = $routeParams.username;
    $scope.reposSortOrder = "-stargazers_count";
    github.getUser($scope.username)
      .then(onUserComplete, onError);

    $scope.getRepoInfo = function(reponame){
      $location.path("/user/" + $scope.username +"/"+ reponame);
    };

  };


  //Controller Declaration 
  apiApp.controller("UserController", ["$scope", "github", "$routeParams", "$location", UserController]);

})();