class HomeCtlr{
  constructor(AppConstants, Vehicle){
    'ngInject';

    this.appName  = AppConstants.appName;
    this._Vehicle = Vehicle;

    this.vehicles = [];
  }

  listVehicles() {
    return this._Vehicle
    .getVehicles()
    .then(
      (res) => {
        this.vehicles = res.data;

        return res;
      },
      (err) => {
        return err;
      }
    );
  }

}

export default HomeCtlr;
