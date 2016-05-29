Meteor.startup(function() {

	if (Meteor.users.find().count() === 0 ) {

	    console.log('STARTUP CODE : Creating demo users');

	    var users = [
	        {name:"Administrator",email:"admin@example.com",roles:['admin']},
	        {name:"Proposal Creator",email:"creator@example.com",roles:['create']},
	        {name:"Proposal Approver",email:"approver@example.com",roles:['approver']},
	        {name:"Proposal Reviewer",email:"reviewer@example.com",roles:['reviewer']},
	      ];

	    _.each(users, function (userData) {
	      var id,user;
	      
	      console.log(userData);

	      id = Accounts.createUser({
	        email: userData.email,
	        password: "test123",
	        profile: { name: userData.name }
	      });

	      // email verification
	      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

	      Roles.addUsersToRoles(id, userData.roles);
	    
	    });
	}else{
		console.log("STARTUP CODE : Users found, no demo users loaded ");
	}


});