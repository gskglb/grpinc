Meteor.publish('empDetailsAttach', function(proposalID) {
	var proposal = Proposals.findOne({_id : proposalID});
	return EmpDetailsAttach.find({_id : proposal.empDetailsAttach});
});

Meteor.publish('findAttach', function() {
	return EmpDetailsAttach.find();
});