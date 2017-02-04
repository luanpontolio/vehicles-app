class HomeCtlr{
  constructor(AppConstants, Vehicle, $scope, FileUpload){
    'ngInject';

    this.vehicles    = [];
    this.appName     = AppConstants.appName;
    this._Vehicle    = Vehicle;
    this._$scope     = $scope;
    this._FileUpload = FileUpload;
    this.goForm      = false;
    this.search      = null;

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
        this.isSucess = false;
        this.message = "Oops :( ! Falha ao carregar";
        console.log(this.errors);
      }
    );
  }

  add(vehicle) {
    console.log(vehicle.imagem);

    this._Vehicle
    .addVehicle(vehicle) 
    .then(
      (res) => {
        console.log(vehicle.imagem);

        this.upload(vehicle.imagem);

        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this.isSucess = true;
        this.message  = 'Operação realizada com sucesso!';

        this.load();
      },
      (err) => {
        this.isSucess = false;
        this.message  = "Não foi possível efetuar o cadastro";
      }
    )
  }

  edit(vehicle) {
    if (vehicle.selected) {
      this._$scope.vehicle = vehicle;
      this._$scope.editing = true;
      this.goForm          = true;
    } else{
      this._$scope.vehicle = null;
      this._$scope.editing = false;
      this.goForm          = false;
    }
  }

  save(vehicle) {
    this._Vehicle
    .editVehicle(angular.copy(vehicle))
    .then(
      (res) => {
        // Make upload
        this.upload(vehicle.imagem);

        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this._$scope.editing = false;

        this.load();
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
        this.message         = 'Operação realizada com sucesso!';
      }
    );
  }

  orderBy(col) {
    this.order   = col;
    this.reverse = !this.reverse;
  }

  upload(file) {
    console.log(file);
    if (this._$scope.formVehicle.imagem.$valid && file) {
      this._FileUpload.uploadImageVehicle(file);
    }
  }

}

export default HomeCtlr;
