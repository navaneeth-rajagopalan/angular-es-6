(function(angular){
angular.module('socket.io', [])
.service('socketService', ['$rootScope', function($rootScope){
    var socket = io.connect('http://localhost');
    this.on = function(eventName, eventHandler){
        socket.on(eventName, function(){
            var args = arguments;
            $rootScope.$apply(function(){
                eventHandler.apply(socket, args);
            });
        });
    };
    this.emit = function(eventName, data, eventHandler){
        socket.emit(eventName, function(){
            var args = arguments;
            $rootScope.$apply(function(){
                if(eventHandler){
                    eventHandler.apply(socket, args);
                }
            });
        });
    }
}]);
})(window.angular);