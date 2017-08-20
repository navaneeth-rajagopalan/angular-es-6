import angular from 'angular';
let HomeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
HomeModule.config(HomeConfig);

import HomeCtrl from './home.controller';
HomeModule.controller('HomeCtrl', HomeCtrl);

export default HomeModule;