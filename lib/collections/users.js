Users = Meteor.users;

Users.helpers({
	company : function(){
		if(Roles.userIsInRole(Meteor.userId(),['service_provider'])){	
			console.log(this);
			return ServiceProvider.findOne({_id : this.organization.id});
		}else{
			return CompanyDetails.findOne({_id : this.organization.id});	
		}
		
	}
});