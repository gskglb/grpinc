Meteor.publish('prevClaimsHistory', function(proposalID) {
	var proposal = Proposals.findOne({_id : proposalID});
	return PreviousClaimsHistory.find({_id : proposal.prevClaimsHistory});
});

Meteor.publish('findClaimsAttach', function() {
	return PreviousClaimsHistory.find();
});