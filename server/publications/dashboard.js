Meteor.publish('getNotificationCount', function() {
	console.log(Notifications.find({'to' : this.userId}).count());
	Counts.publish(this,"getNotificationCount",Notifications.find({'to' : this.userId}));
});
