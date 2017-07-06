(function(angular){
angular.module('chatApp', ['route.config', 'helpers', 'socket.io', 'chatComponents'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '/public/views/login.html',
        controller: ['$rootScope', '$scope', '$location', 'storageService', function($rootScope, $scope, $location, storageService){
            var loggedInUser = storageService.getLocal('userName');
            console.log(loggedInUser);
            if(! (loggedInUser === undefined || loggedInUser === null || loggedInUser === '')){
                console.log('logged in');
                $rootScope.loggedInUser = loggedInUser;
                $location.path('/chat');
            }
            $scope.userName = '';
            $scope.authencticateUser = function(){
                if($scope.userName !== ''){
                    storageService.saveLocal('userName', $scope.userName);
                    $rootScope.loggedInUser = $scope.userName;
                    $location.path('/chat');
                }
            };
        }]
    })
    .when('/chat', {
        templateUrl: '/public/views/Chat.html',
        controller: ['$rootScope', '$scope', function($rootScope, $scope){
            
        }]
    })
    .otherwise({
        redirectTo: '/login'
    })
}])
.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
        if($rootScope.loggedInUser === undefined || $rootScope.loggedInUser === null || $rootScope.loggedInUser === ''){
            console.log(nextRoute)
            console.log(currentRoute);
            if(! nextRoute.$$route.templateUrl.endsWith('Login.html')){ // Routing to routes other than /Login
                $location.path('/login');
            }
        }        
    });
}])
.directive('header', ['storageService', function(storageService){
    return{
        templateUrl: 'public/views/Header.html',
        link: function(scope, elem, attr){
            scope.logOut = function(){
                storageService.blah();
            }
        }
    }
}]);
})(window.angular);