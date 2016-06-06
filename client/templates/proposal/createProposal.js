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
    return Meteor.user();
  },
  refNo : function(){
    return "P_" + moment(new Date).format('DDMMMYYYY_HHMMSSS');
  },

});

AutoForm.hooks({
  insertProposalForm: {
    onSuccess: function () {
      	Flash.success("Proposal is successfully created");
        return true;
    }
  }
});