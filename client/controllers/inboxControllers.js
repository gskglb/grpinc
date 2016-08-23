
CompanyInboxController = AppController.extend({
  waitOn: function() {
    return [
      this.subscribe('getTasks'),
      this.subscribe('getNotifications'),
    ];
    this.ready();
  },
  data: {
   tasks: CompanyInbox.find()
  },
  onAfterAction: function () {
    Meta.setTitle('Inbox');
  }
});