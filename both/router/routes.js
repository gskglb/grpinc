Router.route('/', {
  name: 'home',
  layoutTemplate: 'publicLayout'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/view-proposals', {
  name: 'view-proposals'
});

Router.route('/create-proposal', {
  name: 'create-proposal',
  controller : 'CreateProposalController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','view-proposals','create-proposals']
});
