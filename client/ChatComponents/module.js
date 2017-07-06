(function(angular){
angular.module('chatComponents', [])
.directive('chatHeadSender', function(){
    return{
        templateUrl: 'chatHead.html',
        restrict: 'E',
        link: function(scope, elem, attr){

        }
    };
})
.directive('chatHeadReceiver', function(){
    return{
        templateUrl: '',
        controller: '',
    };
})
.directive('chatInput', function(){
    return{
        templateUrl: 'public/ChatComponents/chatInput.html',
        restrict: 'E',
        link: function(scope, elem, attr){
            scope.test = "test message";
            scope.sendMessage = function(){
                if(scope.message !== ''){
                    console.log(scope.message);
                    scope.message = '';
                }
            };
        }
    }   
})
})(window.angular);