import angular from 'angular';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import 'angular-ui-router';
import 'ng-file-upload';
import 'ng-table';
import 'angular-input-masks';

// Import app.templates (generated by Gulp)
import './config/app.templates';

// Import our app functionaity
import './layout';
import './components';
import './home';
import './services';

const requires = [
  'ui.router',
  'ui.utils.masks',
  'ngFileUpload',
  'ngTable',
  'templates',
  'app.layout',
  'app.components',
  'app.home',
  'app.service'
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
