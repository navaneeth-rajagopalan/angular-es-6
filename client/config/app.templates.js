angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("Index.html","<!doctype html>\r\n<html>\r\n\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta charset=\"utf-8\">\r\n  <title ng-bind=\'pageTitle\'></title>\r\n  <link rel=\"stylesheet\" href=\"styles.min.css\">\r\n</head>\r\n\r\n<body>\r\n  <div ui-view class=\'template-holder\'></div>\r\n  <script src=\"main.js\"></script>\r\n</body>\r\n\r\n</html>");
$templateCache.put("auth/auth.html","<div class=\'login-container\'>\r\n  <form class=\"login-user-name\">\r\n    <input class=\'\' type=\'text\' set-focus spellcheck=\"false\" placeholder=\"Enter your name\">\r\n  </form>\r\n</div>");
$templateCache.put("home/home.html","<h1 ng-bind=\"$ctrl.appName\"></h1>\r\n<h3>Welcome</h3>");
$templateCache.put("layout/app-view.html","<div ui-view class=\"template-holder\"></div>");}]);