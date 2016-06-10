Meteor.methods({
  deleteProposal: function(proposalId) {
  	if(!proposalId){
  		throw new Meteor.Error("Proposal ID is needed for delete");
  	}
  	Proposals.remove({_id : proposalId});
    console.log("Proposal deleted " + proposalId);
  }
});