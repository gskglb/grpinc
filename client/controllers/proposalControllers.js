// Create Proposal 
CreateProposalController = AppController.extend({
  waitOn: function() {
    return [this.subscribe('userdata'), this.subscribe("getCompanyDetails")];
    this.ready();
  },
  data: {
   // userdata: Users.findOne({_id : Meteor.userId()});
  },
  onAfterAction: function () {
    Meta.setTitle('Create Proposal');
  }
});


// View Proposal List
ViewProposalsController = AppController.extend({
  waitOn: function() {
    return [
      this.subscribe('userdata'),  
      this.subscribe('getProposals'),
    ];  
    this.ready();
  },
  data: {
    proposals: Proposals.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('View Proposals');
  }
});

// Proposal Details
ViewProposalDetailsController = AppController.extend({
  waitOn: function() {
    var proposalID = this.params.id;
    return [
      this.subscribe('userdata'),
      this.subscribe('empDetailsAttach',proposalID),
      this.subscribe('prevClaimsHistory',proposalID),
      this.subscribe('getProposalById',proposalID),
      this.subscribe('getPublisherDetailsForProposal',proposalID),
      this.subscribe("getCompanyDetails"),
    ];
    this.ready();
  },
  data: function() {
    var proposalID2 = this.params.id;
    return Proposals.findOne({_id:proposalID2})
  },
  onAfterAction: function () {
    Meta.setTitle('View Proposal Details');
  }
});

PublishProposalController = AppController.extend({
  waitOn: function() {
    var proposalID = this.params.id;
    return [
      Meteor.subscribe('getProposalById',proposalID),
      Meteor.subscribe('getServiceProvidersDetails',proposalID),
      
    ];
    this.ready();
  },
  data: function() {
    var proposalID2 = this.params.id;
    return Proposals.findOne({_id:proposalID2})
  },
  onAfterAction: function () {
    Meta.setTitle('Publish Proposal');
  }
});
