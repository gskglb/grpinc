// Create Proposal 
CompanyInboxController = AppController.extend({
  waitOn: function() {
    //return [this.subscribe('userdata'), this.subscribe("getCompanyDetails")];
    this.ready();
  },
  data: {
   // userdata: Users.findOne({_id : Meteor.userId()});
  },
  onAfterAction: function () {
    Meta.setTitle('Inbox');
  }
});