Meteor.publish("getCompanyDetails", function() {
	// I was getting organization undefined as it is newly added for this project. Not in default Meteor.users
	organizationId  = Meteor.users.findOne({_id : this.userId}).organization.id;
	var result = null;
	if(Roles.userIsInRole(this.userId,['service_provider'])){	
		result = ServiceProvider.find({_id : organizationId});
	}else{
		result = CompanyDetails.find({_id : organizationId});	
	}
	return result;
});

