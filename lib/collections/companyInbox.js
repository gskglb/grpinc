CompanyInbox = new Mongo.Collection('companyInbox');

CompanyInboxSchema = new SimpleSchema({

	  "refNo" : {
	  	type : String,
	  	label : "Reference Number"
	  },	

	  "companyId": {
	    type: String,
	    label: "Company ID",
	  },	  

	  "desciption": {
	    type: String,
	    label: "Task Desciption"

	  },

	  "status": {
	    type: String,
	    label: "Status"

	  },

	  "url": {
	    type: String,
	    label: "Task URL"

	  },

	  "type": {
	    type: String,
	    label: "Task Type",
	  },

	  "createdAt": {
	    type: Date,
	    autoValue: function() {
	      if ( this.isInsert ) {
	        return new Date;
	      } 
	    }
	  },	  

	  "createdBy": {
	    type: String,
	    autoValue: function () {
	    	if ( this.isInsert ) {
          		return Meteor.userId()
          	}
        }
	  },

	  "updatedAt": {
	    type: Date,
	    autoValue: function() {
	      if ( this.isUpdate ) {
	        return new Date;
	      } 
	    },
	    optional : true
	  },

	  "updatedBy": {
	    type: String,
	    autoValue: function () {
	    	if ( this.isUpdate ) {
          		return Meteor.userId()
          	}
        },
        optional : true
	  }

});

CompanyInbox.attachSchema(CompanyInboxSchema);

CompanyInbox.helpers({
	creator : function(){
		return Meteor.users.findOne({_id : this.createdBy})
	}
});