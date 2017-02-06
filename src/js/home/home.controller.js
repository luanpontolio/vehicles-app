class HomeCtlr{
  constructor(AppConstants, Vehicle, $scope, $filter, FileUpload, NgTableParams){
    'ngInject';

    this.vehicles       = [];
    this.appName        = AppConstants.appName;
    this._Vehicle       = Vehicle;
    this._$scope        = $scope;
    this._FileUpload    = FileUpload;
    this._NgTableParams = NgTableParams;
    this._$filter       = $filter;
    this.goForm         = false;
    this.message        = {};
    this.paramsFilter   = { modelo: '', combustivel: '' };

    this.typeGases = ('Gasolina Alcool Flex').split(' ').map((option) => {
      return { option: option };
    });

    this.load();
  }

  load() {
    this._Vehicle.getVehicles().then(
      (res) => {
        console.log(res);
        this.vehicles    = res;
        this.tableParams = this.tableLoad();
      },
      (err) => {
        this.isSucess = false;
        this.message = "Oops :( ! Falha ao carregar";
      }
    );
  }

  add(vehicle) {
    this._Vehicle
    .addVehicle(vehicle) 
    .then(
      (res) => {

        this.upload(vehicle.imagem);

        delete this._$scope.vehicle;
        this._$scope.formVehicle.$setPristine();
        this.message.success = 'Operação realizada com sucesso!';

        this.load();
      },
      (err) => {
        this.message.error = "Não foi possível efetuar o cadastro";
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
        this.goForm          = false;

        this.tableParams.reload();
      }
    );
  }

  delete(vehicle) {
    this.vehicles.splice(this.vehicles.indexOf(vehicle), 1);
    this._Vehicle
    .destroyVehicle(angular.copy(vehicle))
    .then(
      (res) => {
        console.log(this.vehicles);
        delete this._$scope.vehicle;;
        this._$scope.formVehicle.$setPristine();
        this._$scope.editing = false;
        this.goForm          = false;
        this.message.success = 'Operação realizada com sucesso!';

        this.tableParams.reload();
      }
    );
  }

  upload(file) {
    if (this._$scope.formVehicle.imagem.$valid && file) {
      this._FileUpload.uploadImageVehicle(file);
    }
  }

  tableLoad() {
    let initialConfig = {
      page: 1,
      count: 5,
      filter: this.paramsFilter
    }

    let initialSettings = {
      counts: [],
      total: this.vehicles.length,
      getData: (params) => {
        var orderedData = params.sorting() ? this._$filter('filter')(this.vehicles, params.orderBy()) : this.vehicles;
        orderedData = this._$filter('filter')(orderedData, params.filter());
        params.total(orderedData.length);
        return orderedData.slice((params.page() - 1) * params.count(),
          params.page() * params.count());
      }
    }

    return new this._NgTableParams(initialConfig, initialSettings);
  }
}

export default HomeCtlr;
