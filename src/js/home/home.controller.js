class HomeCtlr{
  constructor(AppConstants, Vehicle, $scope){
    'ngInject';

    this.vehicles = [];
    this.appName  = AppConstants.appName;
    this._Vehicle = Vehicle;
    this._$scope  = $scope;
    this.goForm   = false;

    this.typeGases = ('Gasolina Alcool Flex').split(' ').map(function(option) {
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
        this.message = "Falha ao carregar " + err;
        console.log(this.message);
      }
    );
  }

  add(vehicle) {
    this._Vehicle
    .createVehicle(vehicle) 
    .then(
      (res) => {
        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this.message = 'Cadastrado com sucesso!'

        this.load();
      },
      (err) => {
        this.message = "Não foi possível efetuar o cadastro" + err;
      }
    )
  }

  edit(vehicle) {
    console.log(vehicle);
    this._$scope.vehicle = vehicle;
    this._$scope.editing = true;
    this.goForm  = true;
    this.message = "";
  }

  save(vehicle) {
    console.log(vehicle);
  }

  orderBy(col) {
    this.order = col;
    this.reverse = !this.reverse;
  }

}

export default HomeCtlr;
