Template.createProposal.rendered = function() {
   
};

Template.registerHelper("incTypes", function() {
    return [
        {label: "Group Medical Insurance", value: "Group Medical Insurance"},
        {label: "Group Life Insurance", value: "Group Life Insurance"},
        {label: "Group Accident Insurance", value: "Group Accident Insurance"},
    ];
});

Template.insertProposalFormTemplate.helpers({
  defaultValues : function(){
    var templateData = Template.instance().data;
    return { 
      refNo : "P_" + moment().format('DDMMMYYYY_HMMss'),
      status : "Draft",
      companyId : templateData._id,
    };
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