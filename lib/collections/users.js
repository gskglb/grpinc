Users = Meteor.users;

Users.helpers({
	company : function(){
		return CompanyDetails.findOne({_id : this.organization.id});
	}
});