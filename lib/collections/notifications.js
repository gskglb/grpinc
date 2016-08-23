Notifications = new Mongo.Collection('notifications');

NotificationsSchema = new SimpleSchema({
	  "refNo": {
	    type: String,
	    label: "Proposal Ref No"

	  },
	  "url": {
	    type: String,
	    label: "Proposal URL"

	  },	  
	  "to" : {
		type: String,
	    label: "Notification To"
	  },	
	  "message" : {
	  	type : String,
	  	label : "Notification message"
	  },
	  "comments" : {
	  	type : String,
	  	label : "Notification comments",
	  	optional: true
	  },
	  "type" : {
	  	type : String,
	  	label : "Notification type"
	  },
	  "createdAt": {
	    type: Date,
	    autoValue: function() {
	        return new Date;
	    }
	  },	  
	  "createdBy": {
	    type: String,
	    autoValue: function () {
			return Meteor.userId();	
        }
	  }

});

Notifications.attachSchema(NotificationsSchema);
