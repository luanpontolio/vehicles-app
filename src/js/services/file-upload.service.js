class FileUploadService {
  constructor(AppConstants, Upload) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._Upload       = Upload;
  }

  uploadImageVehicle(file) {
    return this._Upload.upload({
      url: this._AppConstants.nguploadAPI + '/upload',
      method: 'POST',
      headers: {
        'Content-Type': file.type
      },
      data: { 'js': 'object'},
      file: file
    }).then(
      (res) => {
        console.log(res.data.result[1].value);
        return res.data.result[1].value;
      },
      (err) => {
        return err;
      }
    )
  }
}

export default FileUploadService;
