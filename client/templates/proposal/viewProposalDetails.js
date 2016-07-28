Template.viewProposalDetails.rendered = function() {
  console.log('Template Rendered ' + Session.get("deleteAttempted"));
};

Template.registerHelper('equals', function (a, b) {
  return a === b;
});

Template.viewProposalDetails.helpers({
	isEditing: function(){
		return Session.get('isEditing');
	},
	empDetailsAttach: function () {
		return EmpDetailsAttach.findOne({_id : this.empDetailsAttach});
  	},

  prevClaimsHistory: function () {
    return PreviousClaimsHistory.findOne({_id : this.prevClaimsHistory});
    },
    
  	proposalCreatedByUser : function(){
  		return Meteor.users.findOne({_id : this.createdBy});
  	},

    onError: function () {
      return function (error) {
      	Flash.danger("System ecountered error");
      };
    },
    onSuccess: function () {
      return function (result) {
      	Flash.success("Proposal Deleted successfully");
      };
    },
    beforeRemove: function () {
      return function () {
        if (confirm('Really delete ?')) {
          this.remove();
        }
      };
    },
    isSubmitForReviewRequired : function(){
      return this.status === "Draft";
    },
    isEditRequired : function(){
      return this.status === "Draft";
    },

});

Template.viewProposalDetails.events({
	'click .edit' : function(){
		Session.set('isEditing', true);

	},
	'click .submit' : function(){
		Session.set('isEditing', false);

	},
	'click .cancelEdit' : function(){
		Session.set('isEditing', false);

	},

  'click .submitForReview' : function(){
    var proposalId = this._id;
    swal({
          title: "Are you sure?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, submit it!",
          closeOnConfirm: false
        }, function(){
             console.log("Submitted " + proposalId);
             Meteor.call("submitForReview", proposalId, function(error, result) {
              if(error) {
               swal("Error!", "Something went wrong.", "error");
              } else {
               swal("Submitted!", "The proposal has been successfully submitted for review.", "success");
              }
            });
        }
      );
  }

});
AutoForm.debug();

AutoForm.hooks({
  updateProposalForm123: {
    onSuccess: function () {
    	 	Flash.success("Proposal is successfully updated");
        return true;
    }
  }
});

AutoForm.hooks({
  updateProposalForm123 : {
    onSubmit : function(doc) {
      console.log("Submitting");
      this.done(); //We've finished
      return true; //Let autoForm do his default job now
    }
  }
});
