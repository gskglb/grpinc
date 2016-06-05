Meteor.publish('findCompanyId', function(userID) {
	return CompanyUserMapper.find({userID : this.userId});
});