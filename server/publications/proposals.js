// Get proposals  

Meteor.publishComposite("getProposals", {
	find : function () {
		user = Meteor.users.findOne({_id: this.userId});
		compId = user.organization.id;
		return Proposals.find({'companyId' : compId}, {sort : {createdAt : -1}});
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
			return Proposals.find({"_id" : id},
                    { limit: 1});
	  	},
	  	children : [
	  		{
	  			find : function(proposal){
	  				return Meteor.users.find({_id : proposal.createdBy},
                    { limit: 1, fields: { profile: 1 }});
	  			}

	  		}

	  	]	
	};
});

Meteor.publish("getPublisherDetailsForProposal", function(proposalId){
	var proposal =  Proposals.findOne({_id:proposalId});
	var splist = proposal.publishedTo; 
	var array = [];
	_.each(splist, function(sp){
		array.push(sp._id);
	});

	var selector = {_id: {$in: array}};
	return ServiceProvider.find(selector);
});

/*
Meteor.publish("getProposals", function(){
	return Proposals.find({'createdBy' : this.userId}, {sort : {createdAt : -1}});
});

Meteor.publish("getProposalById", function(id){
	console.log("getting proposal details for " + id);
	return Proposals.findOne({'createdBy' : this.userId, "_id" : id});
});
*/