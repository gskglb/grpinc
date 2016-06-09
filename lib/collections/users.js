Meteor.users.helpers({
	company : function(){
		return CompanyDetails.findOne({_id : this.organization.id});
	}
});