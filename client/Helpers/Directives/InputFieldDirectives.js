(function(angular){
angular.module('helpers')
.directive('setFocus', ['$timeout', function($timeout){
    return{
        restrict: 'A',
        link: function(scope, elem, attr){
            $timeout(function(){
                elem[0].focus();
            });
        }
    };
}]);
})(window.angular);