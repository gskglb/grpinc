CompanyDetails = new Mongo.Collection('companyDetails');

CompanyDetailsSchema = new SimpleSchema({
	  "name": {
	    type: String,
	    label: "Company Name"

	  },
	  "address": {
	    type: String,
	    label: "Company Address"

	  },	  
	  "url": {
	    type: String,
	    label: "Company URL"

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
	    		if(Meteor.isClient){
	    			return Meteor.userId();	
	    		}else{
	    			return "-1";
	    		}
          		
          	}
        }
	  },
	  "updatedAt": {
	    type: Date,
	    autoValue: function() {
	      if ( this.isUpdate ) {
	        return moment().toDate();
	      } 
	    },
	    optional : true
	  },

	  "updatedBy": {
	    type: String,
	    autoValue: function () {
	    	if ( this.isUpdate ) {
          		if(Meteor.isClient){
	    			return Meteor.userId();	
	    		}else{
	    			return "-1";
	    		}
          	}
        },
        optional : true
	  }

});

CompanyDetails.attachSchema(CompanyDetailsSchema);
