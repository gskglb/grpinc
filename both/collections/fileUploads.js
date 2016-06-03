UploadedFiles = new FS.Collection('uploadedFiles', {
  stores: [new FS.Store.FileSystem('uploadedFiles', {path: "~/uploads"})]
});