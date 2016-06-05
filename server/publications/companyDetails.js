// Get proposals  
Meteor.publishComposite("getCompanyDetailsForUser", {
	find : function () {
		return Proposals.find({'createdBy' : this.userId}, {sort : {createdAt : -1}});
	},
	children : [
		{
			find : function(proposal){
				return Meteor.users.find({_id : proposal.createdBy});
			}
		}
	]
});
