Meteor.methods({
	getNotificationCount : function(){
		console.log("Fetching notifications count");
		return Notifications.find({'to' : this.userId}).count();
	},
	getTasksCount : function(){
		console.log("Fetching open tasks count");
		user = Meteor.users.findOne({_id: this.userId});
		compId = user.organization.id;
		return CompanyInbox.find({'companyId' : compId}).count();
	},	
});