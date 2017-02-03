class VehicleService {
  constructor($http, AppConstants){
    'ngInject';

    this._AppContants = AppConstants;
    this._$http = $http;

    this.current = null;
  }

  getVehicles(){
    return this._$http({
      url: this._AppContants.api + 'vehicles',
      method: 'GET'
    }).then(
      (res) => {
        console.log(res.data);

        this.current = res.data;

        return res;
      }, 
      (err) => {
        return err;
      }
    );
  }

  addVehicle(vehicle){
    console.log(vehicle);

    return this._$http({
      url: this._AppContants.api + 'vehicles',
      method: 'POST',
      data: {
        params: vehicle
      }
    }).then(
      (res) => {
        console.log(res.data);

        return res;
      },
      (err) => {
        return err;
      }
    );
  }

  editVehicle(vehicle) {
    return this._$http({
      url: this._AppContants.api + 'vehicles/' + vehicle.placa,
      method: 'PUT',
      data: {
        params: vehicle
      }
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    )
  }

  destroyVehicle(id) {
    console.log(id)
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
