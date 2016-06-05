Router.route('/', {
  name: 'home',
  layoutTemplate: 'publicLayout'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/view-proposals', {
  name: 'view-proposals',
  controller : 'ViewProposalsController'
});

Router.route('/viewProposalDetails/:id', {
  name: 'viewProposalDetails',
  controller : 'ViewProposalDetailsController'
});

Router.route('/create-proposal', {
  name: 'create-proposal',
  controller : 'CreateProposalController'
});

Router.plugin('ensureSignedIn', {
 only : ['dashboard', 'view-proposals', 'create-proposal', 'viewProposalDetails']  
});