Template.viewProposals.rendered = function() {
   $('[data-toggle="tooltip"]').tooltip();   
};

Template.viewProposals.helpers({
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
    }
  });