Meteor.publish('uploadedFiles', function() {
  return UploadedFiles.find();
});