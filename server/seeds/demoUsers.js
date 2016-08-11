Meteor.startup(function() {

	// Flush all data first

	console.log('Step 1 : Flushing all data');
	CompanyDetails.remove({});
	Users.remove({});
	ServiceProvider.remove({});
	CompanyInbox.remove({});
	Proposals.remove({});
	EmpDetailsAttach.remove({});
	PreviousClaimsHistory.remove({});
	console.log('Step 1 : Done');

	// Add demo data
	console.log('Step 2 : Adding Company Details');
    var clients = [
    {name:"HSBC Software Development India Pvt. Ltd.",address:"Laxmi Cyber City, Hitech City, Cyberabad, Hyderabad",url:"http://hsbc.co.in"},
    {name:"Infosys India Pvt. Ltd.",address:"#201, Raheja Mindspace, Hitech City, Cyberabad, Hyderabad",url:"http://infy.com"},
    {name:"Parimala AppLabs",address:"#201, Vaishnavi's Lakshmi Residency, Near Silver Oak's, Bachupally, Hyderabad",url:"http://superguru.co"},
    {name:"Tata Consultancy Services",address:"#401, EPark, Near Kothaguda Circle, Kondapur, Hyderabad",url:"http://tcs.com"},
  	];

  	var cid = null;
	_.each(clients, function (demoData) {
		cid = CompanyDetails.insert({
		name: demoData.name,
		address: demoData.address,
		url:demoData.url, 
		});
	});

	console.log('Step 2 : Done' + cid);
	console.log('Step 3 : Adding demo users');
	var users = [
        {name:"Administrator",		email:"parimala.applabs@gmail.com",		roles:['admin']},
        {name:"Proposal Creator",	email:"creator@example.com",	roles:['create']},
        {name:"Proposal Reviewer",	email:"reviewer@example.com",	roles:['reviewer']},
	];

    var comp = CompanyDetails.findOne({_id:cid});

    _.each(users, function (userData) {
      var id,user;
      id = Accounts.createUser({
        email: userData.email,
        password: "test123",
        profile: { name: userData.name },
      });

    const organization = {
    	id : comp._id,
    	name : comp.name,
    	url : comp.url
	}
	
    Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true, 'organization' : organization}});
    Roles.addUsersToRoles(id, userData.roles);
    });
    console.log('Step 3 : Done');
	console.log('Step 4 : Creating demo serviceProviders');

    var serviceProviders = [
        {name:"ABC1 Service Provider India Pvt. Ltd.",address:"#101, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abc1serviceprovider.com"},
        {name:"ABC2 Service Provider India Pvt. Ltd.",address:"#201, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abc2serviceprovider.com"},
        {name:"ABC3 Service Provider India Pvt. Ltd.",address:"#301, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abc3serviceprovider.com"},
        {name:"ABC4 Service Provider India Pvt. Ltd.",address:"#401, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abccserviceprovider.com"},
      ];

    _.each(serviceProviders, function (demoData) {

      ServiceProvider.insert({
        name: demoData.name,
        address: demoData.address,
        url:demoData.url, 
      });
	
    });
	console.log('Step 4 : Done');
});