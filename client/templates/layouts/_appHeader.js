Template._appHeader.rendered = function(){

};

Template._appHeader.helpers({
	showCompanySection : function(){
		if (Roles.userIsInRole(Meteor.userId(), ['create', 'reviewer', 'approver'])) {
			return true;
		}else{
			return false;
		}
	}
});