Meteor.startup(function () {

  Accounts.onCreateUser(function (options, user) {
    console.log('STARTUP CODE : User Created. Assigning Default Role and Organization' + user);
    
    if (user.roles == undefined) {
    	user.roles = ["default-user"];
    }	
    
    if (user.organization == undefined) {
    	user.organization = {};
    }
    _.extend(user.organization, {id : ""});
    _.extend(user.organization, {name : ""});
    _.extend(user.organization, {address : ""});
    _.extend(user.organization, {url : ""});

    if (options.profile){
    	user.profile = options.profile;
    }else{
    	if (user.profile == undefined) {
    		user.profile = {};
    	}
    	_.extend(user.profile, {name : ""});
    }
    	
    return user;
  });

});