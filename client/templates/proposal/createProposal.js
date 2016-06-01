Template.createProposal.rendered = function() {
   
};

Template.registerHelper("incTypes", function() {
    return [
        {label: "Group Medical Insurance", value: "Group Medical Insurance"},
        {label: "Group Life Insurance", value: "Group Life Insurance"},
    ];
});


AutoForm.hooks({
  insertProposalForm: {
    onSuccess: function () {
      	Flash.success("Proposal is successfully created");
        return false;
    }
  }
});