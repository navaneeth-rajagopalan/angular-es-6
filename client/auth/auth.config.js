function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.login', {
      url: '/login',
      templateUrl: 'auth/auth.html',
      title: 'Sign in'
    })
    .state('app.signup', {
      url: '/signup',
      templateUrl: 'auth/auth.html',
      title: 'Sign up'
    });
}

export default AuthConfig;