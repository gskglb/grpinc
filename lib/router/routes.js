Router.route('/', {
  name: 'home',
  layoutTemplate: 'publicLayout'
});

// If we do not mention layout, default appLayout is understood?

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/list/proposals', {
  name: 'view-proposals',
  template : 'viewProposals',
  controller : 'ViewProposalsController'
});

Router.route('/view/Proposal/:id', {
  name: 'viewProposalDetails',
  template: 'viewProposalDetails',
  controller : 'ViewProposalDetailsController'
});

Router.route('/create/proposal', {
  name: 'create-proposal',
  template : 'createProposal',
  controller : 'CreateProposalController'
});

Router.plugin('ensureSignedIn', {
 only : ['dashboard', 'view-proposals', 'create-proposal', 'viewProposalDetails']  
});
