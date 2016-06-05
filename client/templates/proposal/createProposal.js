Template.createProposal.rendered = function() {
   
};

Template.registerHelper("incTypes", function() {
    return [
        {label: "Group Medical Insurance", value: "Group Medical Insurance"},
        {label: "Group Life Insurance", value: "Group Life Insurance"},
    ];
});

Template.createProposal.helpers({
  creator : function(){
    console.log(Meteor.user());
    return Meteor.user();
  }
});

AutoForm.hooks({
  insertProposalForm: {
    onSuccess: function () {
      	Flash.success("Proposal is successfully created");
        return true;
    }
  }
});