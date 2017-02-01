function AppConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
  	url: '/',
    // abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;