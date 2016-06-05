Proposals = new Mongo.Collection('proposals');

ProposalSchema = new SimpleSchema({
	  "incType": {
	    type: String,
	    label: "Insurance Type"

	  },
	  "status": {
	    type: String,
	    label: "Status"

	  },	  
	  "summary": {
	    type: String,
	    label: "Proposal Summary"

	  },
	  "details": {
	    type: String,
	    label: "Proposal Details",
	    max: 1000,
        autoform: {
	      rows: 5
	    }
	  },

	  "empDetailsAttach": {
          type: String,
          label: 'Employee Details File Upload',
          autoform: {
               afFieldInput: {
                    type: 'fileUpload',
                    collection: 'EmpDetailsAttach'
               }
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
          		return Meteor.userId()
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
          		return Meteor.userId()
          	}
        },
        optional : true
	  }

});

Proposals.attachSchema(ProposalSchema);
