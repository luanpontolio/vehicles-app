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
        console.log(res.data);
        return res.data;
      },
      (err) => {
        return err;
      }
    )
  }
}

export default FileUploadService;
