Meteor.publish("getCompanyDetails", function() {
	// I was getting organization undefined as it is newly added for this project. Not in default Meteor.users
	organizationId  = Meteor.users.findOne({_id : this.userId}).organization.id;
	return CompanyDetails.find({_id : organizationId})
});

