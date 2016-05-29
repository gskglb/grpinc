ViewProposalsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('getProposals');
  },
  data: {
    proposals: Proposals.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('View Proposals');
  }
});

