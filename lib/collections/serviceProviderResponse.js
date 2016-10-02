ServiceProviderResponse = new Mongo.Collection('serviceProviderResponses');

ServiceProviderResponseSchema = new SimpleSchema({
	  "refID": {
	    type: String,
	    label: "Proposal Reference ID"
	  },
	  "serviceProviderID": {
	    type: String,
	    label: "Service Provider ID"
	  },	  
	  "quotationAmount": {
	    type: String,
	    label: "Quotation Amount"
	  },
	  "quotationSummary": {
	    type: String,
	    label: "Quotation Summary",
		max: 5000,
        autoform: {
	      rows: 10
	    }
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

ServiceProviderResponse.attachSchema(ServiceProviderResponseSchema);
