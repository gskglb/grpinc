Template.viewProposals.rendered = function() {
   $('[data-toggle="tooltip"]').tooltip();   
};

Template.viewProposals.helpers({

   statusIndicator : function(){
    if(this.status === "Draft") return "danger";
    if(this.status === "Pending Review") return "info";
    if(this.status === "Under Review") return "warning";
    return "success";
   },

   isDeleteRequired : function(){
    return this.status === "Draft";
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
      
      return function (collection, id) {
        swal({   
          title: "Are you sure?",   
          text: "You will not be able to recover this proposal!",   
          type: "warning",   
          showCancelButton: true,   
          confirmButtonColor: "#DD6B55",   
          confirmButtonText: "Yes, delete it!",   
          closeOnConfirm: false 
        }, function(){   
             Meteor.call("deleteProposal", id, function(error, result) {
              if(error) {
               swal("Error!", "Something went wrong.", "error"); 
              } else {
               swal("Deleted!", "The proposal has been deleted.", "success");  
              }
            });     
        }
      )};    
    }
  });

Template.viewProposals.events({
  "click .delete" : function(event){
    event.preventDefault();
    var proposalID = this._id;
    swal({   
          title: "Are you sure?",   
          text: "You will not be able to recover this proposal!",   
          type: "warning",   
          showCancelButton: true,   
          confirmButtonColor: "#DD6B55",   
          confirmButtonText: "Yes, delete it!",   
          closeOnConfirm: false 
        }, function(){ 
            Meteor.call("deleteProposal", proposalID, function(error, result) {
              if(error) {
               swal("Error!", "Something went wrong.", "error"); 
              } else {
               swal("Deleted!", "The proposal has been deleted.", "success");  
            }
        });
      });
  }
});