import angular from 'angular';

let servicesModule = angular.module('app.service', []);

// Services
import VehicleService from './vehicle.service';
servicesModule.service('Vehicle', VehicleService);

import FileUploadService from './file-upload.service';
servicesModule.service('FileUpload', FileUploadService);

export default servicesModule;
