Template.viewProposalDetails.rendered = function() {
  console.log('Template Rendered ' + Session.get("deleteAttempted")); 
};

Template.viewProposalDetails.helpers({
	isEditing: function(){
		return Session.get('isEditing');
	},
	uploadedFiles: function () {
		var f = UploadedFiles.find();
		console.log("UploadedFiles" + f);
		
    	return f;
  	}
});

Template.viewProposalDetails.events({
	'click .edit' : function(){
		Session.set('isEditing', true);
		console.log("isEditing is set");
	},
	'click .submit' : function(){
		Session.set('isEditing', false);
		console.log("isEditing is unset");
	},
	'click .cancelEdit' : function(){
		Session.set('isEditing', false);
		console.log("isEditing is unset");
	},
	'click .attemptDelete' : function(){
		Session.set('deleteAttempted', true);
		console.log("Delete Attempted");
	},
	'click .delete' : function(){
		Session.set('deleteAttempted', false);
		console.log("Ok I will delete");
		// perform delete
	},

});
AutoForm.debug();

AutoForm.hooks({
  updateProposalForm123: {
    onSuccess: function () {
    	console.log("Got success message")
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