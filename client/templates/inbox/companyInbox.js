Template.companyInbox.rendered = function() {
   $('[data-toggle="tooltip"]').tooltip();   
};

Template.companyInbox.helpers({
   statusIndicator : function(){
    if(this.status === "Open") return "danger";
    else if(this.status === "Closed") return "success";
   },

   notifications : function(){
   	return Notifications.find();
   },

   notificationBy : function(){
   	return Meteor.users.findOne(this.createdBy);
   }
});