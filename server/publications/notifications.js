
Meteor.publishComposite("getNotifications", {
	find : function(){
		return Notifications.find({'to' : this.userId}, {sort : {createdAt : -1}});
	},
	children : [{
		find : function(notification){
			return Meteor.users.find(
				{_id: notification.createdBy},
                { limit: 1, fields: { profile: 1 } });
		}

	}]	
		
});