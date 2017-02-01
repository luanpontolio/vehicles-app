import angular from 'angular';

let servicesModule = angular.module('app.service', []);

// Services
import VehicleService from './vehicle.service';
servicesModule.service('Vehicle', VehicleService);

export default servicesModule;
