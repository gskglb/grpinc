CreateProposalController = AppController.extend({
  waitOn: function() {
    return this.subscribe('userdata');
    this.ready();
  },
  data: {
   // userdata: Users.findOne({_id : Meteor.userId()});
  },
  onAfterAction: function () {
    Meta.setTitle('Create Proposal');
  }
});

