(function(angular){
angular.module('chatApp', [])
.factory('socketFactory', ['$rootScope', function($rootScope){
    var socket = io.connect('http://localhost');
    return {
        on: function(eventName, eventHandler){
            socket.on(eventName, function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    eventHandler.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, eventHandler){
            socket.emit(eventName, function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    if(eventHandler){
                        eventHandler.apply(socket, args);
                    }
                });
            });
        }
    };
}])
.controller('test', ['socketFactory', function(socketFactory){
    var socket = socketFactory;
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}]);
})(window.angular);