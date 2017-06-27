(function(angular){
angular.module('chatApp', ['route.config', 'helpers', 'socket.io', 'chatComponents'])
.controller('test', ['socketService', function(socketService){
    var socket = socketService;
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}])
.controller('loginController', ['$scope', function($scope){
    $scope.userName = '';

    $scope.authencticateUser = function(){
        if($scope.userName !== ''){
            
        }
    };
}])
})(window.angular);