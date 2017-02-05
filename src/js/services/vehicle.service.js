class VehicleService {
  constructor($http, AppConstants){
    'ngInject';

    this._AppContants = AppConstants;
    this._$http = $http;
  }

  getVehicles(){
    return this._$http({
      url: this._AppContants.api + 'vehicles',
      method: 'GET'
    }).then((res) => res.data);
  }

  addVehicle(vehicle){

    return this._$http({
      url: this._AppContants.api + 'vehicles',
      method: 'POST',
      data: {
        params: vehicle
      }
    }).then((res) => res);
  }

  editVehicle(vehicle) {
    return this._$http({
      url: this._AppContants.api + 'vehicles/' + vehicle.placa,
      method: 'PUT',
      data: {
        params: vehicle
      }
    }).then((res) => res);
  }

  destroyVehicle(id) {
    return this._$http({
      url: this._AppContants.api + 'vehicles/' + id,
      method: 'DELETE'
    }).then(
      (res) => {
        return res;
      }, 
      (err) => {
        return err;
      }
    )
  }

}

export default VehicleService;
