(function(){
  
  
  var github = function($http){
    
    
    var getUser = function(username){
      
      //Return the success promise with data proccessed... so I won't need to deal with reponse
      //just the data I care about - return promise(return data);
        return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                  return response.data;
                });
    };
    
    
    var getRepos = function(user){
      //Return the success promise with data proccessed... so I won't need to deal with reponse
      //just the data I care about - return promise(return data);
       return  $http.get(user.repos_url)
                .then(function(response){
                  return response.data;
                });
    };
    

    var getRepoDetails = function(username, reponame){
      
          var repo =  null;
          var repoUrl = "https://api.github.com/repos/" + username 
                    + "/" + reponame;
          return $http.get(repoUrl)
                .then(function(response){
                  repo = response.data;
                  return $http.get(repoUrl + "/contributors");
                })
                .then(function(response){
                  repo.contributors = response.data;
                  return repo;
                });
    };

    
    // var getIssuesCount = function(username, reponame){
    //   return $http.get("https://api.github.com/repos/" + username 
    //           + "/" + reponame  + "/issues")
    //     .then(function(response){
    //       return response.data;
    //     });
    // };
    
    // var getContributors = function(username, reponame){
    //   return $http.get("https://api.github.com/repos/" + username 
    //       + "/" + reponame + "/contributors")
    //     .then(function(response){
    //       return response.data;
    //     });
    // };
    
    return{
      getUser : getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
      // getIssuesCount: getIssuesCount,
      // getContributors: getContributors
    };
    
  };
  
  var module = angular.module("apiApp");
  module.factory('github', github);
  
  
}());