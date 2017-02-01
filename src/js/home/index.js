import angular from 'angular';

let homeModule = angular.module('app.home', []);

// Config
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;
