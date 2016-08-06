// Accounts Templates Config

AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('signUp', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
    layoutTemplate: 'publicLayout'
});



// App Configurations
Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

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

Router.route('/companyInbox', {
  name: 'companyInbox',
  template : 'companyInbox',
  controller : 'CompanyInboxController'
});

Router.route('/publish/Proposal/:id', {
  name: 'publishProposal',
  template: 'publishProposal',
  controller : 'PublishProposalController'
});

Router.plugin('ensureSignedIn', {
 only : ['dashboard', 'view-proposals', 'create-proposal', 'viewProposalDetails','companyInbox','publishProposal']  
});
