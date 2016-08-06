Proposals = new Mongo.Collection('proposals');

ProposalSchema = new SimpleSchema({

	  "refNo" : {
	  	type : String,
	  	label : "Proposal Reference Number"
	  },	

	  "companyId": {
	    type: String,
	    label: "Company ID",
	    autoValue: function () {
	    	if ( this.isInsert ) {
	    		var company = CompanyDetails.findOne({_id : Meteor.user().organization.id}) 
          		return company.companyId;
          	}
        }
	  },	  

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

	  "rejectionComments": {
	    type: String,
	    label: "Rejection Comments",
	    max: 1000
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

      "prevClaimsHistoryApplicable": {
      	type: String,
      	label : "Previous Claims History Applicable?",
      	allowedValues: ["Yes", "No"]
      } ,

      "prevClaimsHistory": {
      	type: String,
      	label : "Previous Claims History File Upload ",
      	optional: true,
      	custom: function () {
      		if ((this.field("prevClaimsHistoryApplicable").value=="Yes") && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
        		return "required";
      		}
    	},
      	autoform: {
           afFieldInput: {
                type: 'fileUpload',
                collection: 'PreviousClaimsHistory'
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

Proposals.attachSchema(ProposalSchema);

Proposals.helpers({
	creator : function(){
		return Meteor.users.findOne({_id : this.createdBy})
	}
});