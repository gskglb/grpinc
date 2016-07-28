
Meteor.publish("getTasks", function(){
	user = Meteor.users.findOne({_id: this.userId});
	compId = user.organization.id;
	
	console.log("Fetching Company Inbox for " + compId);
	return CompanyInbox.find({'companyId' : compId}, {sort : {createdAt : -1}});
});
