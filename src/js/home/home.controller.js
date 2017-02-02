class HomeCtlr{
  constructor(AppConstants, Vehicle){
    'ngInject';

    this.vehicles = [];

    this.appName  = AppConstants.appName;
    this._Vehicle = Vehicle;

    this.typeGases = ('Gasolina Alcool Flex').split(' ').map(function(option) {
      console.log({ option: option })
      return { option: option };
    });

    this._Vehicle.getVehicles().then(
      (res) => {
        this.vehicles = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  add(vehicle){
    console.log(vehicle);
  }

  

}

export default HomeCtlr;
