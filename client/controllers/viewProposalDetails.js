ViewProposalDetailsController = AppController.extend({
  waitOn: function() {
  	var proposalID = this.params.id;
    return [Meteor.subscribe('empDetailsAttach',proposalID), Meteor.subscribe('getProposalById',proposalID)];
    this.ready();
  },
  data: function() {
  	var proposalID2 = this.params.id;
    return Proposals.findOne(proposalID2)
  },
  onAfterAction: function () {
    Meta.setTitle('View Proposal Details');
  }
});
