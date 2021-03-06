Template.publishProposal.rendered = function() {
  var splist = ServiceProvider.find({}, {fields: {'_id':1}}).fetch();
  Session.set("InterestedServiceProviders", splist);
};

Template.publishProposal.helpers({
  alertRequired : function(){
    return this.status === "Draft";
  },
  serviceProviders: function () {
    return ServiceProvider.find();
  },
  readyForPublish: function () {
    return this.status === "Pending Publish" || this.status === "Draft";
  },
  
});

Template.publishProposal.events({
'click input': function(event) {
	var target = $(event.target);
	if(target.is(':checkbox')){
		if(target.is(":checked") == true){
			var splist = Session.get("InterestedServiceProviders");
			splist.push({"_id" : target.attr('id')});
			Session.set("InterestedServiceProviders", splist);
		}else{
			var splist = Session.get("InterestedServiceProviders");
			var filtered = _.reject(splist, function(item){
				return item._id === target.attr('id')
			});
			Session.set("InterestedServiceProviders", filtered)
		}
	} 
 },

 'click .publish' : function(){
 	var proposalId = this._id;
 	var splist = Session.get("InterestedServiceProviders");
 	if( splist=="undefined" || splist.length == 0){
 		swal("Error!", "You need to select atleast one service provider", "error");
 	}else{
 		Meteor.call("publishProposal", proposalId, splist, function(error, result) {
	      if(error) {
	        swal("Error!", "Something went wrong.", "error");
	      } else {
	        swal("Published!", "The proposal has been successfully published.", "success");
	      }
	    });  
 	}
 }

});