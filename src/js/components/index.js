import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import SearchInput from './search-input.component';
componentsModule.component('searchInput', SearchInput);


import AlertMessage from './alert-message.component';
componentsModule.component('alertMessage', AlertMessage);

export default componentsModule;
