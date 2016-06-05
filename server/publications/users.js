Meteor.publish('userdata', function(){
	console.log("SERVER CODE : sending more user data");
  return Meteor.users.find({_id: this.userId});
});