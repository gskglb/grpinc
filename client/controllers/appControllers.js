// App Controller
AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

// Dashboard Controller
DashboardController = AppController.extend({
  waitOn: function() {
    return [
      //this.subscribe('getNotificationCount'),
      //this.subscribe('getTasksCount'),
    ];
    this.ready();   
  },
  data: {
    //notificationCount: Counts.get("getNotificationsCount")
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});


// Home Controller
HomeController = AppController.extend({
  data: {

  }
});


// Public Controller
PublicController = RouteController.extend({
  layoutTemplate: 'publicLayout'
});

PublicController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});