
CompanyInboxController = AppController.extend({
  waitOn: function() {
    return [this.subscribe('getTasks')];
    this.ready();
  },
  data: {
   tasks: CompanyInbox.find()
  },
  onAfterAction: function () {
    Meta.setTitle('Inbox');
  }
});