(function(angular){
angular.module('helpers')
.service('storageService', ['$window', function($window){
    this.saveLocal = function(key, data){
        $window.localStorage.setItem(key, data);
    };
    this.getLocal = function(key){
        return $window.localStorage.getItem(key);
    };
    this.saveSession = function(key, data){
        $window.sessionStorage.setItem(key, data);
    };
    this.getSession = function(key){
        return $window.sessionStorage.getItem(key);
    };
}]);
})(window.angular);