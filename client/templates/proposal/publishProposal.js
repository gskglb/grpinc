Template.publishProposal.rendered = function() {
  
};

Template.publishProposal.helpers({

  alertRequired : function(){
    return this.status === "Draft";
  },
  serviceProviders: function () {
    // var allServiceProviders = ServiceProvider.find();
    // Session.set("chosenSP" , allServiceProviders);
    // return allServiceProviders;
    return ServiceProvider.find();
  },

});