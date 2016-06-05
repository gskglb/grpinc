// Get proposals  
Meteor.publishComposite("getProposals", {
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


Meteor.publishComposite("getProposalById", function(id){
	return {

		find : function () {
			console.log("SERVER CODE :  inside parent of getProposalById for proposal " + id);
	  		return Proposals.find({'createdBy' : this.userId, "_id" : id},
                    { limit: 1});
	  	},
	  	children : [
	  		{
	  			find : function(proposal){
	  				console.log("SERVER CODE :  looking for user  " + proposal.createdBy);
	  				return Meteor.users.find({_id : proposal.createdBy},
                    { limit: 1, fields: { profile: 1 }});
	  			}

	  		}

	  	]	
	};
});