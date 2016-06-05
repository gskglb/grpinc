Meteor.publish('empDetailsAttach', function(proposalID) {
	var proposal = Proposals.findOne({_id : proposalID});
	console.log("SERVER CODE : Finding empDetailsAttach for " + proposal.empDetailsAttach);
  	return EmpDetailsAttach.find({_id : proposal.empDetailsAttach});
});

Meteor.publish('findAttach', function() {
	return EmpDetailsAttach.find();
});