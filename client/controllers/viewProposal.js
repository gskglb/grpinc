ViewProposalsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('getProposals');
    this.ready();
  },
  data: {
  	proposals: Proposals.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('View Proposals');
  }
});

