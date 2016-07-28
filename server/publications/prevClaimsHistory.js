Meteor.publish('prevClaimsHistory', function(proposalID) {
	var proposal = Proposals.findOne({_id : proposalID});
	return PreviousClaimsHistory.find({_id : proposal.prevClaimsHistory});
});

Meteor.publish('findAttach', function() {
	return PreviousClaimsHistory.find();
});