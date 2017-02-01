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
    }).then(
      (res) => {
        console.log(res.data);

        return res;
      }, 
      (err) =>{
        return err;
      }
    );
  }

}

export default VehicleService;