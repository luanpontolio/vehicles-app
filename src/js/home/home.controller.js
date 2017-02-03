class HomeCtlr{
  constructor(AppConstants, Vehicle, $scope){
    'ngInject';

    this.vehicles = [];
    this.appName  = AppConstants.appName;
    this._Vehicle = Vehicle;
    this._$scope  = $scope;
    this.goForm   = false;
    this.search   = null;

    this.typeGases = ('Gasolina Alcool Flex').split(' ').map((option) => {
      return { option: option };
    });
    
    this.load();
  }

  load() {
    this._Vehicle.getVehicles().then(
      (res) => {
        this.vehicles = res.data;
      },
      (err) => {
        this.errors = "Falha ao carregar " + err;
        console.log(this.errors);
      }
    );
  }

  add(vehicle) {
    this._Vehicle
    .addVehicle(vehicle) 
    .then(
      (res) => {
        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this.message = 'Operação realizada com sucesso!';

        this.load();
      },
      (err) => {
        this.errors = "Não foi possível efetuar o cadastro" + err;
      }
    )
  }

  edit(vehicle) {
    if (vehicle.selected) {
      this._$scope.vehicle = vehicle;
      this._$scope.editing = true;
      this.goForm  = true;
    } else{
      this._$scope.vehicle = null;
      this._$scope.editing = false;
      this.goForm  = false;
    }
  }

  save(vehicle, ) {
    this._Vehicle
    .editVehicle(angular.copy(vehicle))
    .then(
      (res) => {
        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this._$scope.editing = false;
      }
    );
  }

  delete(vehicle) {
    this.vehicles.splice(this.vehicles.indexOf(vehicle),1);
    this._Vehicle
    .destroyVehicle(vehicle)
    .then(
      (res) => {
        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this._$scope.editing = false;
        this.message = 'Operação realizada com sucesso!';
      }
    );
  }

  orderBy(col) {
    this.order = col;
    this.reverse = !this.reverse;
  }

}

export default HomeCtlr;
