import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import SearchInput from './search-input.component';
componentsModule.component('searchInput', SearchInput);

export default componentsModule;
