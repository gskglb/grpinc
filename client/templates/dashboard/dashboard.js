Template.dashboard.rendered = function() {
	Meteor.call("getNotificationCount",function(error, result){
		Session.set("notificationCount", result);
	});
	Meteor.call("getTasksCount",function(error, result){
		Session.set("taskCount", result);
	});
   
};

Template.dashboard.helpers({
	notificationCount : function(){
		return Session.get("notificationCount");
	},
	taskCount : function(){
		return Session.get("taskCount");
	}	
});
