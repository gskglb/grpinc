Meteor.publish("getServiceProvidersDetails", function() {
	return ServiceProvider.find()
});