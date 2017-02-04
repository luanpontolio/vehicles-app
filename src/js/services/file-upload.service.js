class FileUploadService {
  constructor(AppConstants, Upload) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._Upload       = Upload;
  }

  uploadImageVehicle(file) {
    console.log(file.type);
    console.log(file.$ngfBlobUrl);

    return this._Upload.upload({
      url: this._AppConstants.nguploadAPI + '/upload',
      method: 'POST',
      headers: {
        'Content-Type': file.type
      },
      data: file
    }).then(
      (res) => {
        return res.data.result[0].value;
      },
      (err) => {
        return err;
      }
    )
  }
}

export default FileUploadService;
