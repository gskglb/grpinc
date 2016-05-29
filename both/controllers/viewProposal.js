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

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
