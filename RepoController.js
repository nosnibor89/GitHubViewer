(function() {

  //App Dependency Injection
  var apiApp = angular.module("apiApp");

  var RepoController = function($scope, github, $routeParams) {


    var onError = function(reason) {
      $scope.error = "Could not fecth data!";
    };


    var onDetails = function(data){
      $scope.repo = data;
    };
    // var onIssues = function(data) {
    //   console.log(data);
    //   $scope.issues = data.length;
    // };

    // var onContributors = function(data) {
    //   $scope.contributors = data;
    //   console.log(data);
    // };
  
    github.getRepoDetails($routeParams.username, $routeParams.reponame)
      .then(onDetails, onError);
  
    // github.getContributors($routeParams.username, $routeParams.reponame)
    //   .then(onContributors, onError);

    // github.getIssuesCount($routeParams.username, $routeParams.reponame)
    //   .then(onIssues, onError);

  
  };

  apiApp.controller("RepoController", ["$scope", "github", "$routeParams", RepoController]);

})();